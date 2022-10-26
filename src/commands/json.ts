import fs from 'fs';
import { join } from 'path';
import build from '../lib';
import { dataFromURL } from './env';

/**
 * Поля, приходящие с командой json
 */
export interface FileData {
  file: string;
  url: string;
}

/**
 * Конвертирование JSON файла в .env из файла или URL
 * @param {FileData} data
 */
export const jsonToEnv = (data: FileData) => {
  /** Создание пустого файла .env для дальнейшего заполнения */
  const envFile = fs.createWriteStream(join(process.cwd(), '.env'));
  if (data.file !== undefined) {
    const jsonFile = fs.readFileSync(process.cwd() + `/${data.file}`, 'utf-8');
    build(jsonFile, envFile);
    console.log('Env was created from file');
  } else if (data.url !== undefined) {
    const urlData = dataFromURL(data.url);
    urlData.then((jsonData) => {
      build(JSON.stringify(jsonData), envFile);
      console.log('Env was created from URL');
    });
  }
};
