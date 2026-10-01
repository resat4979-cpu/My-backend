import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoutes from './routes/bookRoutes'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('BookStore API is running');
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Mongodb connected")
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });