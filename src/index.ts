#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import init from './commands/init'

yargs(hideBin(process.argv))
  .command(init) 
  .demandCommand()
  .help()
  .parse()
  // .argv