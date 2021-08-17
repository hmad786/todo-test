// require for express server
const express = require('express');

// using express
const app = express();

// importing the DataBase
const db = require('./db/mongoose');

// importng the Schema For tasks

const taskRouter = require('./routers/task');

// using static files
app.use(express.static("./views"));
// to use encrypted data
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(taskRouter);
module.exports = app;