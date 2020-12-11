var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : 3306,
    user     : "root",
    password : "bootcampTS954",
    database : 'employeeManagementSystem_db'
  });


connection.connect(() => {
    console.log("connected as ID " + connection.threadId);
});

module.exports = connection;