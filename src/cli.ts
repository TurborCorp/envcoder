#!/usr/bin/env node

import { encryptFile } from "./commands/encrypt";
import { decryptFile } from "./commands/decrypt";

const { createCommand } = require('commander');
const program = createCommand();

program.command('encrypt')
    .argument("<fileName>")
    .description('Encrypt file')
    .action(encryptFile);

program.command('decrypt')
    .description('Decrypt file')
    .action(decryptFile);

program.parse()

