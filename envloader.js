import fs from "node:fs"
import readline from "node:readline"

function envloader(path = "./.env"){

    // get env content
    const envContent = fs.createReadStream(path);

    return new Promise((resolve) => {
        // set up readline
        const rl = readline.createInterface({
            input: envContent,
            crlfDelay : Infinity
        });

        // get variables
        let variables = {};

        rl.on("line", (line) => {
            // exclude comments and invalid variables
            if(line.includes("=") && !line.startsWith("#")){
                
                const kv = line.split("=", 2);
                
                if(kv[0] && kv[1]){
                    variables[kv[0].trim()] = kv[1].trim();
                }

            }            
        });

        rl.on("close", () => {
            process.env = {...process.env, ...variables};
            resolve();
        })

    });
}

export default envloader;
