import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    dbName: process.env.DB_NAME || "",
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
}