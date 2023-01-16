// export const Greeter = (name: string) => `Hello ${name}`;
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
  .version("v1.0.0") //-- version of the program
  .description("An example CLI for managing Quick Access Directories") //-- Description
  .option("-l, --ls", "List all quick access directories")
  .option(
    "-a, --ad [dir]",
    "Add current/specific directory to quick access directories"
  )
  .parse(process.argv);

const options = program.opts();

if (options.ls) {
  console.log(ls());
}
