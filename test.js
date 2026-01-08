import envloader from "./envloader.js";

envloader("./.env.example");

console.log(process.env.DB_HOST);