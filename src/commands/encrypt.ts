import * as fs from 'fs';
import * as CryptoJS from 'crypto-js'
import { v4 as uuidv4 } from 'uuid'

export const encryptFile = (fileName: string) => {
    fs.writeFileSync('private.key', uuidv4());
    const privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
    const data = fs.readFileSync(process.cwd() + `/${fileName}`, 'utf-8');
    const token = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        privateKey,
    ).toString();
    fs.writeFileSync('secret.pub', token);
    console.log("File was encrypted successfully")
};
