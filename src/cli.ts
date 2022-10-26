#!/usr/bin/env node

import { encryptFile } from './commands/encrypt';
import { decryptFile } from './commands/decrypt';
import { dataToEnv } from './commands/env';
import { jsonToEnv } from './commands/json';

const { createCommand } = require('commander');
const program = createCommand();

/**
 * Комманды
 */
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

program
  .command('env')
  .option('-f, --file <fileName>', 'Data from local file')
  .option('-u, --url <urlName>', 'Data from URL')
  .requiredOption('-s, --secret <fileNameKey>', 'File with secret key')
  .description('Decrypt file and convert to .env')
  .action(dataToEnv);

program
  .command('json')
  .option('-f, --file <fileName>', 'Data from local file')
  .option('-u, --url <urlName>', 'Data from URL')
  .description('Convert .json file to .env')
  .action(jsonToEnv);

program.parse();
