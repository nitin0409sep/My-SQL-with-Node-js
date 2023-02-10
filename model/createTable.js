const connection = require('../db/conn');

/* Create Table in database --: We dont write values keyword in query here */
var sql = "Create table student (id int not null unique auto_increment, name varchar(45), email varchar(45), mobile varchar(45))";

module.exports.createTable = (req, res) => {

    connection.query(sql, (err, result) => {
        if (err)
            res.redirect('/');

        console.log("Table Created Successfully");
    })

    res.redirect('/');
}