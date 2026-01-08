import fs from "node:fs"
import readline from "node:readline"

function envloader(path = "./.env"){

    // get env content
    const envContent = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: envContent,
        crlfDelay : Infinity
    });

    let lines = [];

    rl.on("line", (line) => {
        const kv = line.split("=");
    
        if(kv[0] && kv[1]){
            console.log(kv);
        }

    });

    // get keys and values

}

export default envloader;