import envloader from "./envloader.js";

async function main(){
    await envloader("./.env.example");

    console.log(process.env.DB_HOST);
    console.log(process.env.DB_NAME);
    console.log(process.env.DB_USER);
}

main();