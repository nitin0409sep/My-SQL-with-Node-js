const connection = require('../db/conn');


module.exports.deleteData = (req, res) => {

    const query = 'Delete from student where id = 2';

    connection.query(query, (err, result) => {

        if (err)
            throw err;

        res.send("Deleted Successfully" + result);
    })
}