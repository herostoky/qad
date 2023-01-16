"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export const Greeter = (name: string) => `Hello ${name}`;
var commander_1 = require("commander");
var figlet = require("figlet");
var fs = require("fs");
var ls_1 = require("./ls");
//! Check the default json file as DB
var dataPath = "./data/dir.json";
if (!fs.existsSync(dataPath)) {
    console.log("Creating default json file...");
    fs.copyFileSync("".concat(__dirname, "/data/dir.json"), dataPath);
}
//! Log the package name to the console
console.log(figlet.textSync("QAD Manager"));
//! Creating the CLI program
var program = new commander_1.Command();
program
    .version("v1.0.0") //-- version of the program
    .description("An example CLI for managing Quick Access Directories") //-- Description
    .option("-l, --ls", "List all quick access directories")
    .option("-a, --ad [dir]", "Add current/specific directory to quick access directories")
    .parse(process.argv);
var options = program.opts();
if (options.ls) {
    console.log((0, ls_1.ls)());
}
