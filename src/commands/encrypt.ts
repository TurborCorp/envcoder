import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

export const encryptFile = (fileName: string) => {
  try {
    const newFileName = fileName.split('.');
    fs.writeFileSync(`${newFileName[0]}.key`, uuidv4());
    const privateKey = fs.readFileSync(process.cwd() + `/${newFileName[0]}.key`, 'utf-8');
    const data = fs.readFileSync(process.cwd() + `/${fileName}`, 'utf-8');
    const token = CryptoJS.AES.encrypt(JSON.stringify(data), privateKey).toString();
    fs.writeFileSync(`${newFileName[0]}.pub`, token);
    console.log('File was encrypted successfully');
  } catch (e) {
    console.log(e);
    return;
  }
};
