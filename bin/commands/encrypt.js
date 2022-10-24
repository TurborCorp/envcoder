"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptFile = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var CryptoJS = tslib_1.__importStar(require("crypto-js"));
var uuid_1 = require("uuid");
var encryptFile = function (fileName) {
    fs.writeFileSync('private.key', (0, uuid_1.v4)());
    var privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
    var data = fs.readFileSync(process.cwd() + "/".concat(fileName), 'utf-8');
    var token = CryptoJS.AES.encrypt(JSON.stringify(data), privateKey).toString();
    fs.writeFileSync('secret.pub', token);
    console.log("File was encrypted successfully");
};
exports.encryptFile = encryptFile;
//# sourceMappingURL=encrypt.js.map