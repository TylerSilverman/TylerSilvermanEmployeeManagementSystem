const inquirer = require("inquirer");
var connection = require("./config/connection");
const cTable = require('console.table');
const dotenv = require('dotenv');
require("dotenv").config();

// const teamMember = [];

//THIS IS FOR THE ENV AND ENV example tabs
const result = dotenv.config()
if (result.error) {
  throw result.error
}
 
//THIS console log the file .env from above. 
// console.log(result.parsed)

//CREATED THE TABLE TO SHOW INSIDE OF THE CONSOLE LOG
const table = cTable.getTable([
  {
    id: 1,
    first_name: "first1",
    last_name: "last1",
    title: "Sales Lead ",
    department: "Sales",
    salary: 100000,
    manager_id: "Manager Name",
  },
]);

start();

// //function for ADD Department 
function addDepartment (answer){
  inquirer.prompt ([
    {
      type: "input",
      message: "What would you like to update",
      name: "addDepartment",
    }
  ]).then(function(answer) {
    console.table(answer.id, answer.first_name, answer.last_name, answer.answerTitle, answer.answerDepartment, answer.salary, answer.manager_id)
    connection.query(
      "INSERT INTO department SET ?",
      {
        id: answer.id,
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id
      },
      (err) => {
        if (err) throw err;
        console.log("Department Added" + answer[0].id + answer[0].first_name + answer[0].last_name + answer[0].answerTitle + answer[0].role_id + answer[0].manager_id);
      start();
      }
    )
  });
}
function start () {
  inquirer.prompt ([
    {
    name: "name",
    type: "list",
    message: "Hi, What would you like to do?",
    choices: ["Add Team Member", "Add Department", "Add Role", "View all Departments", "Update Department", "Delete Employee", "Show Directory"],
    }
  ]).then((answer) => {
    if (answer.name === "Add Team Member"){
      addEmployee();
    } else if (answer.name === "View all Departments") {
      viewDepartments();
    } else if (answer.name === "Add Role"){
      addRoleFunction();
    } else if (answer.name === "Update Department"){
      updateFunction();
    } else if (answer.name === "Delete Employee") {
      deleteFunction();
    } else if (answer.name === "Add Department") {
      addDepartment();
    } else if (answer.name === "Show Directory"){
      generate();
     connection.end();
    } else (answer.name === "name" )
    }
  );
}

function addRoleFunction (answer){
  inquirer.prompt ([
    {
      type: "input",
      message: "What would you like to update",
      name: "role_id",
    }
  ]).then(function(answer) {
    console.table(answer.role_id)
    connection.query(
      "VIEW FROM department SET ?",
      {
        role_id: answer.role_id,
      },
      (err) => {
        if (err) throw err;
        console.table("Role Added" +  answer[0].role_id);
      start();
      }
    )
  });
}

// //FUNCTION FOR add EMPLOYEE
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Department ID if known, if not skip. ",
      name: "id",
      validate: function(value){
        if(isNaN(value) === false){
          return true;
        }
        return false;
      }
    },
    {
      type: "input",
      message: "What is name of employee first name?",
      name: "first_name",
    },
    {
      type: "input",
      message: "What is name of employee last name?",
      name: "last_name",
    },
    {
      type: "list",
      message: "What is the title",
      name: "answerTitle",
      choices: ["Sales Lead", "Sales Person", "Lawyer", "Accountant", "Software Engineer"],
    },
    {
      type: "list",
      message: "What is the Department?",
      name: "answerDepartment",
      choices: ["Sales", "Finance", "Lawyer", "Legal", "Engineer"],
    },
    {
      type: "input",
      message: "What is the salary?",
      name: "salary",
    },
    {
      type: "input",
      message: "What's the employee's managers name?",
      name: "manager_id",
    },
  ]).then(function(answer) {
    console.table(answer.id, answer.first_name, answer.last_name, answer.answerTitle, answer.answerDepartment, answer.salary, answer.manager_id)
    connection.query(
      "INSERT INTO departments SET ?",
      {
        id: answer.id,
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id
      },
      (err) => {
        if (err) throw err;
        console.table("Employee Add" + answer[0].id + answer[0].first_name + answer[0].answerLast_name + answer[0].role_id + answer[0].manager_id);
      start();
      });
    });
}

// //FUNCTION VIEW DEPARTMENT
function viewDepartments() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Department ID if known, if not skip. ",
      name: "role_id",
    },
    {
      type: "list",
      message: "What is the Department?",
      name: "answerDepartment",
      choices: ["Sales", "Finance", "Lawyer", "Legal", "Engineer"],
    },
  ]).then(function(answer) {
    console.table(answer.id, answer.answerDepartment)
    connection.query(
      "SELECT * FROM  departments SET ?",
      {
        id: answer.id,
        department: answer.answerDepartment
      },
      (err) => {
        if (err) throw err;
        console.table("Employee Add" + answer[0].id + answer[0].answerDepartment);
      start();
      }
    )
  });
}

//FUNCTION TO UPDATE THE DEPARTMENT 
function updateFunction() {
  inquirer.prompt([
    {
      type: "list",
      message: "What is the Department you would like to update?",
      name: "answerUpdateDepartment",
      choices: ["id", "First Name", "Last Name", "title", "department", "salary", "manager"],
    },
  ]).then (function(answer) {
    console.table(answer.answerUpdateDepartment)
    connection.query(
      "SELECT FROM employee SET ?",
      {
        id: answer.answerUpdateDepartment,
      },
      (err) => {
        if (err) throw err;
        console.table("Employee Add" + answer[0].id + answer[0].first_name + answer[0].answerLast_name + answer[0].role_id + answer[0].manager_id);
      start();
      }
    )
  });
}

//FUNCTION FOR THE DELETE 
function deleteFunction() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Employee's Name",
      name: "answerName"
    },
    {
      type: "list",
      message: "What would you like to delete?",
      name: "answerDeleteDepartment",
      choices: ["id", "First Name", "Last Name", "title", "department", "salary", "manager"],
    },
  ]).then(function(answer) {
    console.table(answer.answerfirst_name, answer.answerDeleteDepartment)
    connection.query(
      "VIEW departments SET ?",
      {
        answer: answer.first_name,
        answer: answerDeleteDepartment,
      },
      (err) => {
        if (err) throw err;
        console.table("Employee Deleted" + answer[0].answer.first_name + answer[0].answerDeleteDepartment);
      start();
      }
    )
  });
}

//FUNCTION FOR THE GENERATE/SHOW DIRECOTOY 
function generate (){
    console.table(table)
    connection.end
}

