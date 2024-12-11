const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');

// Connect to MongoDB
(async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/mydb_test');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the app if DB connection fails
  }
})();

// Define the schema
const listSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Text is required'], // Validation: field is required
    trim: true,                          // Remove surrounding spaces
  },
});

// Create the model associated with the "elements" collection
const List = mongoose.model('elements', listSchema);

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Endpoint to create a new list item
app.post('/list', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text field is required' });
    }

    const doc = await List.create({ text });
    res.status(201).json({ id: doc._id }); // Respond with the document ID
  } catch (error) {
    console.error('Error creating list item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;