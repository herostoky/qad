"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = void 0;
var fs = require("fs");
function ls() {
    //   try {
    //   return JSON.parse(fs.readFileSync("../data/dir.json", "utf-8"));
    console.log(JSON.parse(fs.readFileSync("../data/dir.json", "utf-8")));
    console.log(JSON.parse(fs.readFileSync("./data/dir.json", "utf-8")));
    console.log(JSON.parse(fs.readFileSync("/data/dir.json", "utf-8")));
    console.log(JSON.parse(fs.readFileSync("data/dir.json", "utf-8")));
    //   } catch (error) {
    //     console.error("Error occurred while reading the directories data!");
    //     return "";
    //   }
}
exports.ls = ls;
