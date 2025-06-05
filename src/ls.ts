import * as fs from "fs";
import { DirModel } from "./model/dir-model";
import { dataPath } from "./constant/param";
export function ls(): void {
  try {
    const directories: DirModel[] = JSON.parse(
      fs.readFileSync(dataPath, "utf-8")
    );
    directories.forEach((dir) => {
      console.log(`Name: ${dir.name}, Path: ${dir.path}`);
    });
  } catch (error: any) {
    console.error(
      "Error occurred while reading the directories data:",
      error.message
    );
  }
}
