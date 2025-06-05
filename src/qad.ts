import { Command } from "commander";
import * as figlet from "figlet";
import * as fs from "fs";
import { ls } from "./ls";
import { dataPath, defaultDataPath } from "./constant/param";
import { add } from "./add";

//! Check the default json file as DB
if (!fs.existsSync(dataPath)) {
  console.log("Creating default json file...");
  fs.copyFileSync(`${__dirname}${defaultDataPath}`, dataPath);
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
    "-a, --add [name]",
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

if (options.add) {
  const name = options.ad;
  if (typeof name === "string" && name.trim() !== "") {
    add(name, process.cwd());
  } else {
    console.error("Please provide a valid directory name to add.");
  }
}
