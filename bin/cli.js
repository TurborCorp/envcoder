#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encrypt_1 = require("./commands/encrypt");
var decrypt_1 = require("./commands/decrypt");
var createCommand = require('commander').createCommand;
var program = createCommand();
program
    .command('encrypt')
    .argument('<fileName>', 'Data which you want to be encrypted')
    .description('Encrypt file')
    .action(encrypt_1.encryptFile);
program
    .command('decrypt')
    .argument('<fileNamePub>', 'Data that was encrypted')
    .argument('<fileNameKey>', 'Key which was used to encrypt the file')
    .description('Decrypt file')
    .action(decrypt_1.decryptFile);
program.parse();
//# sourceMappingURL=cli.js.map