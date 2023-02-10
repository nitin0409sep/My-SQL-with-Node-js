// Express
const express = require('express');

// Routes
const route = express.Router();

// Create Table
const createTable = require('../model/createTable');

// Insert Data
const insert = require('../model/insert');

// Read Data
const read = require('../model/read');

// Update Data
const update = require('../model/update');

// Delete Data
const deletes = require('../model/delete');

// Home Page
route.get('/', (req, res) => {
    res.render('index');
})

// Create Table
route.get('/createTable', createTable.createTable);

// Insert Data into Tables
route.post('/insertData', insert.insertData);

// Read Data From Tables
route.get('/readData', read.readData);

// Update Data From Tables
route.get('/updateData', update.updateData);

// Delete Data From Tables
route.get('/deleteData', deletes.deleteData);


// Export Route
module.exports = route;