#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yargs_1 = tslib_1.__importDefault(require("yargs"));
var helpers_1 = require("yargs/helpers");
var encrypt_1 = require("./commands/encrypt");
var program = require('commander').program;
program.command('encrypt <fileName>')
    .description('Encrypt file')
    .action(encrypt_1.encryptFile);
program.parse();
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .commandDir('commands')
    .strict()
    .alias({ h: 'help' })
    .argv;
//# sourceMappingURL=cli.js.map