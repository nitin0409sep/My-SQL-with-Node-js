const connection = require('../db/conn');

module.exports.updateData = (req, res) => {
    const query = 'Update student set name = "xyz" where id = 1';
    connection.query(query, (err, result) => {
        if (err)
            throw err;

        res.send("Upated Successfully");
    })
}