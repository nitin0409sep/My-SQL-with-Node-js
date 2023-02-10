const connection = require('../db/conn');

module.exports.insertData = (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;

    const query = "Insert into student(name, email, mobile) values('" + name + "','" + email + "','" + mobile + "')";

    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }

        res.send("Student inserted successfully" + result);
        console.log(result);
    })
}   