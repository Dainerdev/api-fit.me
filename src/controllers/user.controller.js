import {getConnection} from '../db/db.config.js';

// Function to get all users
const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const rows = await connection.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const rows = await connection.query('SELECT * FROM users WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to create a new user
const createUser = async (req, res) => {
    const { name, last_name, email, password, birth_date, gender, initial_weight, height, goal, activity_level, note } = req.body;
    try {

        // Validate required fields
        if (!name || !last_name || !email || !password || !birth_date || !gender || !initial_weight || !height || !goal || !activity_level) {
            return res.status(400).json({ message: 'Name, last name, email, password, birth_date, gender, initial_weight, height, goal, and activity_level are required' });
        }

        const connection = await getConnection();
        const user = { name, last_name, email, password, birth_date, gender, initial_weight, height, goal, activity_level, note };
        const result = await connection.query('INSERT INTO users SET ?', user);
        res.status(201).json({ id: result.insertId, ...user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to update a user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password, initial_weight, height, goal, activity_level, note } = req.body;
    try {

        // Validate required fields
        if (!email || !password || !initial_weight || !height || !goal || !activity_level) {
            return res.status(400).json({ message: 'Email, password, initial_weight, height, goal, and activity_level are required' });
        }

        const connection = await getConnection();
        const rows = await connection.query('SELECT * FROM users WHERE id = ?', [id]);

        // Check if user exists
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = { email, password, initial_weight, height, goal, activity_level, note };
        await connection.query('UPDATE users SET ? WHERE id = ?', [user, id]);
        res.status(200).json({ id, ...user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to delete a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const rows = await connection.query('SELECT * FROM users WHERE id = ?', [id]);

        // Check if user exists
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        await connection.query('DELETE FROM users WHERE id = ?', [id]);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Exporting the methods
export const methods = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}