import { dataPath } from "./constant/param";
import { DirModel } from "./model/dir-model";

export function add(name: string, path: string): void {
  const fs = require("fs");

  try {
    let directories: DirModel[] = [];
    if (fs.existsSync(dataPath)) {
      directories = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    }

    const exists = directories.some((dir) => dir.name === name);
    if (exists) {
      // if directory with the same name exists, replace the path
      directories = directories.map((dir) =>
        dir.name === name ? { ...dir, path } : dir
      );
      fs.writeFileSync(dataPath, JSON.stringify(directories, null, 2));
      console.log(`Directory "${name}" updated successfully.`);
      return;
    }

    // add new directory
    directories.push({ name, path });
    fs.writeFileSync(dataPath, JSON.stringify(directories, null, 2));
    console.log(`Directory "${name}" added successfully.`);
    return;
  } catch (error: any) {
    console.error("Error occurred while adding the directory:", error.message);
  }
}
