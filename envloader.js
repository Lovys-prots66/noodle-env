import fs from "node:fs"
import readline from "node:readline"

function envloader(path = "./.env"){

    const envContent = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: envContent,
        crlfDelay : Infinity
    });

    rl.on("line", (line) => {
        console.log(line);
    })
}

export default envloader;