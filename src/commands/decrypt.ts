import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';

export const decryptFile = (fileNamePub: string, fileNameKey: string) => {
  try {
    const privateKey = fs.readFileSync(process.cwd() + `/${fileNameKey}`, 'utf-8');
    const token = JSON.parse(fs.readFileSync(process.cwd() + `/${fileNamePub}`, 'utf-8').toString());
    let bytes = CryptoJS.AES.decrypt(token.data, privateKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    fs.writeFileSync(`${fileNamePub}.json`, decryptedData);
    console.log('File was decrypted successfully');
  } catch (e) {
    console.log('ERROR: Invalid file of private key or encrypted data. Please, check the name of specified files');
    return;
  }
};

export const decryptData = (fileNamePub: string, fileNameKey: string) => {
  try {
    let bytes = CryptoJS.AES.decrypt(fileNamePub, fileNameKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (e) {
    console.log('ERROR: Invalid file of private key or encrypted data. Please, check the name of specified files');
    return;
  }
};
