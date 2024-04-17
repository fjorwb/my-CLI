#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const init_1 = __importDefault(require("./commands/init"));
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command(init_1.default)
    .demandCommand()
    .help()
    .parse();
// .argv
//# sourceMappingURL=index.js.map