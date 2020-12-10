const inquirer = require("inquirer");
var connection = require("./config/connection");
// const { start } = require("repl");
const cTable = require('console.table');

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

// //function for ADD Department 
function addDepartment (){
  inquirer.prompt([
    {
      name: "departmentID",
      type: "input",
      message: "What department is the employee in?",
      choice: ["Sales", "Legal", "Engineering", "Finance"]
    },
  ]).then((answer) => {
    if (answer.departmentId === "Sales") {
      console.log("sales selected");
      start();
    } else if (answer.departmentId === "Legal"){
      console.log("legal selected");
      start();
    } else if (answer.departmentId === "Engineering") {
      console.log("engineering selected");
      start();
    } else (answer.departmentId === "Finance")
      console.log("finance selected");
      start();
  })
}
//   ]).then((answer) => {
//     connection.query(
//       "INSERT INTO department SET ?",
//       {
//         name: answer.addDepartment,
//       },
//       (error) => {
//         if (error) throw error;
//         console.log("Department Saved and Added");

//         start();
//       }
//     );
//   });
// }
function start () {
  inquirer.prompt ([
    {
    name: "name",
    type: "list",
    message: "Hi, What would you like to do?",
    choices: ["Add Team Member", "View all Departments", "Update Department", "Delete Employee", "Return Back"],
    }
  ]).then((answer) => {
    if (answer.name === "Add Team Member"){
      addEmployee();
    } else if (answer.name === "View all Departments") {
      viewDepartments();
    } else if (answer.name === "Update Department"){
      updateFunction();
    } else if (answer.name === "Delete Employee") {
      deleteFunction();
    } else if (answer.name === "Return back") {
      returnBackFunction ();
    } else (answer.name === "name" )
      // connection.end();
    }
  );
}

// //FUNCTION FOR add EMPLOYEE
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Department ID if known, if not skip. ",
      name: "answerId",
    },
    {
      type: "input",
      message: "What is name of employee first name?",
      name: "answerFirstName",
    },
    {
      type: "input",
      message: "What is name of employee last name?",
      name: "answerLastName",
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
      name: "answerSalary",
    },
    {
      type: "input",
      message: "What's the employee's managers name?",
      name: "answerManager",
    },
  ]).then((answer) => {
    console.log(answer);
    console.log("add employee function clicked");
    console.log("add employee answers saved");
    
    start();
  });
}

// //FUNCTION VIEW DEPARTMENT
function viewDepartments() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Department ID if known, if not skip. ",
      name: "answerDepartmentId",
    },
    {
      type: "list",
      message: "What is the Department?",
      name: "answerDepartment",
      choices: ["Sales", "Finance", "Lawyer", "Legal", "Engineer"],
    },
    {
      type: "list",
      message: "What is the title",
      name: "answerDepartmentTitle",
      choices: ["Sales Lead", "Sales Person", "Lawyer", "Accountant", "Software Engineer"],
    },
  ]).then((answer) => {
    console.log(answer);
    console.log("view departments function clicked");
    console.log("view department answers saved");
    // connection.query("SELECT * FROM department")
    
    start();
  });
}

//FUNCTION TO UPDATE THE DEPARTMENT 
function updateFunction() {
  inquirer.prompt([
    {
      type: "list",
      message: "What is the Department you would like to update?",
      name: "answerDepartment",
      choices: ["id", "First Name", "Last Name", "title", "department", "salary", "manager"],
    },
  ]).then((answer) => {
    //create function to bring to the inputted 
    console.log(answer);
    console.log("update function FOR THE DEPARTMENT clicked");
    console.log("update function answers saved");
    // connection.query("SELECT * FROM department")
    
    start();
  });
}

//FUNCTION FOR THE DELETE 
function deleteFunction() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to delete?",
      name: "answerDeleteDepartment",
      choices: ["id", "First Name", "Last Name", "title", "department", "salary", "manager"],
    },
  ]).then((answer) => {
    //create function to show the directory to delete
    console.log(answer);
    console.log("delete function was clicked");
    console.log("delete function answers saved");
    // connection.query("SELECT * FROM department")
    
    start();
  });
}