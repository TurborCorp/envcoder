#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {encryptFile} from "./commands/encrypt";

const { createCommand } = require('commander');
const program = createCommand();

program.command('encrypt <fileName>')
    .description('Encrypt file')
    .action(encryptFile);

program.parse()

yargs(hideBin(process.argv))
    // Use the commands directory to scaffold.
    .commandDir('commands')
    // Enable strict mode.
    .strict()
    // Useful aliases.
    .alias({ h: 'help' })
    .argv;
