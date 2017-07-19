const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json())
app.use('/db', dbRoutes);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected!');
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose error: ' + err);
});

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
