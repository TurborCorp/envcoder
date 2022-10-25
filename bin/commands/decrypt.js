"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptFile = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var CryptoJS = tslib_1.__importStar(require("crypto-js"));
var decryptFile = function (fileNamePub, fileNameKey) {
    try {
        var privateKey = fs.readFileSync(process.cwd() + "/".concat(fileNameKey), 'utf-8');
        var token = fs.readFileSync(process.cwd() + "/".concat(fileNamePub), 'utf-8');
        var bytes = CryptoJS.AES.decrypt(token, privateKey);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        fs.writeFileSync('development.json', decryptedData);
        console.log('File was decrypted successfully');
    }
    catch (e) {
        console.log('ERROR: Invalid file of private key or encrypted data. Please, check the name of specified files');
        return;
    }
};
exports.decryptFile = decryptFile;
//# sourceMappingURL=decrypt.js.map