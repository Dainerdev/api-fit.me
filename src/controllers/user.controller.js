import {getConnection} from '../db/db.config.js';

// Function to get all users

const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



export const methods = {
    getUsers
}