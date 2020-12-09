var mysql = require("mysql");
const inquirer = require("inquirer");
var connection = require("./config/connection");
// const { start } = require("repl");
const cTable = require('console.table');

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     port     : 3306,
//     user     : 'root',
//     password : 'bootcampTS954',
//     database : 'employeeManagementSystem_db'
//   });
 
//   connection.query('SELECT 1 + 1 AS solution', function (error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
   
//   connection.end();
//   connection.connect(() => {
//       console.log("connected as ID " + connection.threadId);
//       start();
//   });

//CREATED THE TABLE TO SHOW INSIDE OF THE CONSOLE LOG
const table = cTable.getTable([
  {
    id: 1,
    first_name: "first",
    last_name: "last",
    role_id: 1,
    manager_id: "managerPete",
    title: "salesperson",
    salary: 100000,
  }, 
]);

start();

function start () {
  inquirer.prompt ([
    {
    name: "action",
    type: "list",
    message: "Hi, What would you like to do?",
    choices: ["Add Department", "Add Role", "Add Employee", "View all Departments", "Update Department", "Delete Employee", "Return Back"],
    }
  ]).then(function (answer){
    console.log("You Chose " + answer.action);
    switch (answer.name) {
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "View all Departments":
        viewDepartments();
        break;
      case "Update Department":
        updateFunction();
        break;
      case "Delete Employee":
        deleteFunction();
        break;
      case "Return Back":
        console.log("information saved");
        connection.end();
      break;
    }
  });
}

// //function for ADD Department 
function addDepartment (){
  inquirer.prompt ([
    {
      name: "addDepartment",
      type: "input",
      message: "What is the deparment name?"
    }
  ]).then((answer) => {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: answer.addDepartment,
      },
      (error) => {
        if (error) throw error;
        console.log("Department Saved and Added");

        start();
      }
    );
  });
}
