import * as fs from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import { decryptData } from './decrypt';
import build from '../lib';
import { JsonSerialization } from './encrypt';

/**
 * Поля, приходящие с командой env
 */
export interface ParamsData {
  secret: string;
  file: string;
  url: string;
}

/**
 * Перевод данных из файла в .env
 * @param {ParamsData} data - данные, приходящие с командой env
 */
export const dataToEnv = (data: ParamsData) => {
  /** Проверка наличия секретного ключа */
  if (!data.secret) {
    throw new Error('Invalid secret key');
  }
  /** Создание пустого файла .env для дальнейшего заполнения */
  const envFile = fs.createWriteStream(join(process.cwd(), '.env'));

  /** Использование ключа из файла или из переменной в env */
  const fileSecretKey = process.env.ENV_SECRET_KEY
    ? process.env.ENV_SECRET_KEY
    : fs.readFileSync(join(process.cwd(), `${data.secret}`), 'utf8');
  if (data.file !== undefined) {
    const filePub = JSON.parse(fs.readFileSync(join(process.cwd(), `${data.file}`), 'utf8').toString());
    const decryptedData = decryptData(filePub.data, fileSecretKey);
    build(decryptedData, envFile);
    console.log('Env was created from file');
  } else if (data.url !== undefined) {
    const urldata = dataFromURL(data.url);
    urldata.then((data) => {
      const decryptedUrl = decryptData(data.data, fileSecretKey);
      build(decryptedUrl, envFile);
      console.log('Env was created from URL');
    });
  }
};

/**
 * Сбор данных из URL
 * @param {String} url - ссылка на файл с удаленного хранилища
 */
export const dataFromURL = (url: string): Promise<JsonSerialization | any> => {
  const fetchData = fetch(url).then((response) => {
    if (response.status === 400) {
      throw new Error('File not found in specified URL');
    }
    return response.json().then((data) => {
      return data;
    });
  });
  return fetchData;
};
