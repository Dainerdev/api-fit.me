import mysql from 'promise-mysql';
import config from '../config';

// Load environment variables from .env file
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

// Connect to the database
const getConnection = () => {
    return connection;
} 

// Export the connection
module.exports = {
    getConnection
}