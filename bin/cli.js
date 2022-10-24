#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encrypt_1 = require("./commands/encrypt");
var decrypt_1 = require("./commands/decrypt");
var createCommand = require('commander').createCommand;
var program = createCommand();
program.command('encrypt')
    .argument("<fileName>")
    .description('Encrypt file')
    .action(encrypt_1.encryptFile);
program.command('decrypt')
    .description('Decrypt file')
    .action(decrypt_1.decryptFile);
program.parse();
//# sourceMappingURL=cli.js.map