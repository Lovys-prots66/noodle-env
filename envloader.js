import fs from "node:fs"
import readline from "node:readline"

function envloader(path = "./.env"){

    // get env content
    const envContent = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: envContent,
        crlfDelay : Infinity
    });

    let variables = {};

    rl.on("line", (line) => {
        const kv = line.split("=", 2);
    
        if(kv[0] && kv[1]){
            variables[kv[0]] = kv[1];
        }
        
    });

    rl.on("close", () => {
        process.env = {...process.env, ...variables};
    })

}

export default envloader;