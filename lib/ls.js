"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = void 0;
var fs = require("fs");
function ls() {
    try {
        var directories = JSON.parse(fs.readFileSync("./data/dir.json", "utf-8"));
        directories.forEach(function (dir) {
            console.log("Name: ".concat(dir.name, ", Path: ").concat(dir.path));
        });
    }
    catch (error) {
        console.error("Error occurred while reading the directories data:", error.message);
    }
}
exports.ls = ls;
