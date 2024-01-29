import path from "path";
import {writeFile} from "fs/promises";

const create = async () => {
    const dir = path.resolve("./src/fs/files/fresh.txt");
    try {
        await writeFile(dir, "I am fresh and young", {
            flag: "wx",
        })
    } catch (e) {
        throw new Error("FS operation failed")
    }
};
await create();