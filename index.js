const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
// Middleware
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventsDB')
     .then(() => console.log('Connected to MongoDB'))
     .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Routes
const eventRoutes = require('./routes');
app.use('/api', eventRoutes);
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
