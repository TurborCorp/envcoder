import * as fs from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import { decryptData } from './decrypt';
import build from '../lib';
import { JsonSerialization } from './encrypt';

export interface ParamsData {
  secret: string;
  file: string;
  url: string;
}

export const dataToEnv = (data: ParamsData) => {
  if (!data.secret) {
    throw new Error('Invalid secret key');
  }
  const envFile = fs.createWriteStream(join(process.cwd(), '.env'));
  const fileSecretKey = fs.readFileSync(join(process.cwd(), `${data.secret}`), 'utf8');
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

export const dataFromURL = (url: string): Promise<JsonSerialization> => {
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
