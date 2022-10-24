"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptFile = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var CryptoJS = tslib_1.__importStar(require("crypto-js"));
var decryptFile = function () {
    var privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
    var token = fs.readFileSync(process.cwd() + '/secret.pub', 'utf-8');
    var bytes = CryptoJS.AES.decrypt(token, privateKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    fs.writeFileSync('development.json', decryptedData);
    console.log("File was decrypted successfully");
};
exports.decryptFile = decryptFile;
//# sourceMappingURL=decrypt.js.map