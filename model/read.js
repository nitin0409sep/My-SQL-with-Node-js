const connection = require('../db/conn');

module.exports.readData = (req, res) => {

    var query = "Select * from student";

    connection.query(query, (err, result) => {
        if (err)
            throw err;

        res.json(result);
    });
}