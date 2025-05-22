import mysql from 'promise-mysql';
import { config } from 'dotenv';

// Load environment variables from .env file
const connection = mysql.createConnection({
    host: config.host,
    dbName: config.dbName,
    dbUser: config.dbUser,
    dbPassword: config.dbPassword
});

// Connect to the database
const getConnection = () => {
    return connection;
} 

// Export the connection
module.exports = {
    getConnection
}