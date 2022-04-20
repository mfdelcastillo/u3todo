//////////////////
// Dependencies //
//////////////////
require('dotenv').config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

////////////////
// Connection //
////////////////
require('./config/database.js');
const app = express();
const cors = require('cors');
const toDoController = require('./controllers/toDo');


////////////////
// Middleware //
////////////////
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/toDo', toDoController);


////////////////
// API Routes //
////////////////
// Catch-All Route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

//////////////
// Listener //
//////////////
app.listen(PORT, () => {
    console.log(`back-end eavesdropping on ${PORT}`)
});