#!/usr/bin/env node

import { encryptFile } from './commands/encrypt';
import { decryptFile } from './commands/decrypt';

const { createCommand } = require('commander');
const program = createCommand();

program
  .command('encrypt')
  .argument('<fileName>', 'Data which you want to be encrypted')
  .description('Encrypt file')
  .action(encryptFile);

program
  .command('decrypt')
  .argument('<fileNamePub>', 'Data that was encrypted')
  .argument('<fileNameKey>', 'Key which was used to encrypt the file')
  .description('Decrypt file')
  .action(decryptFile);

program.parse();
