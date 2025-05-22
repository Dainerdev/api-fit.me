import mysql from 'promise-mysql';
<<<<<<< HEAD
import config from '../config';
=======
import { config } from 'dotenv';
>>>>>>> fa91f379fda4ca33d609b828d0dc157559579bb5

// Load environment variables from .env file
const connection = mysql.createConnection({
    host: config.host,
<<<<<<< HEAD
    database: config.database,
    user: config.user,
    password: config.password
=======
    dbName: config.dbName,
    dbUser: config.dbUser,
    dbPassword: config.dbPassword
>>>>>>> fa91f379fda4ca33d609b828d0dc157559579bb5
});

// Connect to the database
const getConnection = () => {
    return connection;
} 

// Export the connection
module.exports = {
    getConnection
}