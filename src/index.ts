import { Command } from "commander";
import * as figlet from "figlet";
import * as fs from "fs";
import { ls } from "./ls";

//! Check the default json file as DB
const dataPath = "./data/dir.json";
if (!fs.existsSync(dataPath)) {
  console.log("Creating default json file...");
  fs.copyFileSync(`${__dirname}/data/dir.json`, dataPath);
}

//! Log the package name to the console
console.log(figlet.textSync("QAD Manager"));

//! Creating the CLI program
const program = new Command();
program
  .version("v1.0.0")
  .description("An example CLI for managing Quick Access Directories")
  .option("-l, --ls", "List all quick access directories")
  .option(
    "-a, --ad [dir]",
    "Add current/specific directory to quick access directories"
  )
  .option(
    "-r, --rm [dir]",
    "Remove specific directory from quick access directories"
  )
  .helpOption("-h, --help", "Display help for command")
  .parse(process.argv);

const options = program.opts();
// console.log("Options:", options);

if (!options.ls && !options.ad && !options.rm) {
  program.help();
}

if (options.ls) {
  ls();
}
