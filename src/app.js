import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes imports
import userRoutes from './routes/user.routes.js';

const app = express();

// Settings
app.set('port', 3312);

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log requests to the console
app.use(express.json()); // Parse JSON requests

//Routes
app.use('/api/users', userRoutes); // User routes

export default app;