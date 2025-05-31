const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://raghu-notes-1.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

// Redirect root URL '/' to your frontend website
app.get('/', (req, res) => {
  res.redirect('https://raghu-notes-1.onrender.com');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err));
