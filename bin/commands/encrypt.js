"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptFile = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var CryptoJS = tslib_1.__importStar(require("crypto-js"));
var uuid_1 = require("uuid");
var encryptFile = function (fileName) {
    try {
        var newFileName = fileName.split('.');
        fs.writeFileSync("".concat(newFileName[0], ".key"), (0, uuid_1.v4)());
        var privateKey = fs.readFileSync(process.cwd() + "/".concat(newFileName[0], ".key"), 'utf-8');
        var data = fs.readFileSync(process.cwd() + "/".concat(fileName), 'utf-8');
        var token = CryptoJS.AES.encrypt(JSON.stringify(data), privateKey).toString();
        fs.writeFileSync("".concat(newFileName[0], ".pub"), token);
        console.log('File was encrypted successfully');
    }
    catch (e) {
        console.log(e);
        return;
    }
};
exports.encryptFile = encryptFile;
//# sourceMappingURL=encrypt.js.map