import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config({ path: '../../Docker/.env' });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/astral_db';

app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Astral-AI Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});