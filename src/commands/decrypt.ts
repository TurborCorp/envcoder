import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';

export const decryptFile = (fileNamePub: string, fileNameKey: string) => {
  try {
    const privateKey = fs.readFileSync(process.cwd() + `/${fileNameKey}`, 'utf-8');
    const token = fs.readFileSync(process.cwd() + `/${fileNamePub}`, 'utf-8');
    let bytes = CryptoJS.AES.decrypt(token, privateKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    fs.writeFileSync('development.json', decryptedData);
    console.log('File was decrypted successfully');
  } catch (e) {
    console.log('ERROR: Invalid file of private key or encrypted data. Please, check the name of specified files');
    return;
  }
};
