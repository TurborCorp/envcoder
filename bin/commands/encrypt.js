"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptFile = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var CryptoJS = tslib_1.__importStar(require("crypto-js"));
var encryptFile = function (fileName) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var privateKey, data, token;
    return tslib_1.__generator(this, function (_a) {
        fs.writeFileSync('private.key', '15');
        privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
        data = fs.readFileSync(process.cwd() + "/".concat(fileName), 'utf-8');
        token = CryptoJS.AES.encrypt(JSON.stringify(data), privateKey).toString();
        fs.writeFileSync('secret.pub', token);
        return [2];
    });
}); };
exports.encryptFile = encryptFile;
//# sourceMappingURL=encrypt.js.map