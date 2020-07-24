var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_trackerdb"
});

connection.connect();

module.exports = connection