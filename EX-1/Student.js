import fs from "fs";
import { promises as fsp } from "fs";

const filePath = "./hello.txt";
// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);

// Convert the read and write into async versions

(async () => {
    try {
        await fsp.writeFile(filePath, "Hello, Node.js beginner!");
        const contentAsync = await fsp.readFile(filePath, "utf8");
        console.log("File content (async):", contentAsync);
    } catch (error) {
        console.error("Error with async file operations:", error);
    }
})();