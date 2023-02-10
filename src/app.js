// Express
const express = require('express');

// App
const app = express();

// Routes
const routes = require('../routes/routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB 
require('../db/conn');

// Path Module
const path = require('path');

// Views Path
const viewsPath = path.join(__dirname, '../views');

// Set Template Engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Routes
app.use(routes);

// Listen
app.listen('80', () => {
    console.log("Server has started successfully.");
})

