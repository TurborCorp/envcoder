#!/usr/bin/env node

import { encryptFile } from './commands/encrypt';
import { decryptFile } from './commands/decrypt';
import { dataToEnv } from './commands/env';
import { jsonToEnv } from './commands/json';

const { createCommand } = require('commander');
const program = createCommand();

/**
 * Команды
 */
program
  .command('encrypt')
  .argument('<fileName>', 'Data which you want to be encrypted')
  .usage('<filename>')
  .description('Encrypt local .json file and generate unique secret key')
  .action(encryptFile);

program
  .command('decrypt')
  .argument('<fileNamePub>', 'Data that was encrypted')
  .argument('<fileNameKey>', 'Key which was used to encrypt the file')
  .usage('<filenamePub> <filenameKey>')
  .description('Decrypt local .json file with private key')
  .action(decryptFile);

program
  .command('env')
  .option('-f, --file <fileName>', 'Data from local file')
  .option('-u, --url <urlName>', 'Data from URL')
  .requiredOption('-s, --secret <fileNameKey>', 'File with secret key')
  .description('Decrypt data from file or URL and convert it to .env')
  .usage('[-u <urlToFile>] -f <filenamePub> -s <filenameKey>')
  .action(dataToEnv);

program
  .command('json')
  .option('-f, --file <fileName>', 'Data from your local JSON file')
  .option('-u, --url <urlName>', 'JSON file from URL')
  .description('Build .json file to .env')
  .usage('[-f <filename>] [-u <urlToFile>]')
  .action(jsonToEnv);

program.parse();
