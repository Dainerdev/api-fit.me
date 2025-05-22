import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes imports

const app = express();

// Settings
app.set('port', 3312);

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log requests to the console
app.use(express.json()); // Parse JSON requests

//Routes


export default app;