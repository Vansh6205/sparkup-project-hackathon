const express = require('express');
const app = express();  
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8000;

// Morgan log the requests
app.use(morgan('tiny'));

// Connect to the database
connectDB();

// Parse request body
app.use(bodyparser.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req, res) => {
    res.render('signup');
    // res.render('index');  
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

// // Load routes
// const userRoutes = require('../cyber_app/server/rotues');
// app.use('/', userRoutes);