import * as fs from 'fs';
import * as CryptoJS from 'crypto-js'

export const encryptFile = async (fileName: string) => {
    console.log(fileName)
    fs.writeFileSync('private.key', '15');
    const privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
    const data = fs.readFileSync(process.cwd() + `/${fileName}`, 'utf-8');
    const token = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        privateKey,
    ).toString();
    fs.writeFileSync('secret.pub', token);
};
