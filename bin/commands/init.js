"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// the builder function can be used to define additional
// command line arguments for our command
function builder(yargs) {
    return yargs.option('name', {
        // alias: 'n',
        string: true
    });
}
// the handler function will be called when our command is executed
// it will receive the command line arguments parsed by yargs
function handler(args) {
    console.log(chalk_1.default.green('Hello, ') + args.name + '!!!');
}
// name and description for our command module
const init = {
    command: 'init',
    describe: 'Init command',
    builder,
    handler
};
exports.default = init;
//# sourceMappingURL=init.js.map