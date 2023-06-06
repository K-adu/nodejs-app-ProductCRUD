const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/helloworld', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

mongoose.connection.on('open', () => {
  console.log('Database connection established');
});
