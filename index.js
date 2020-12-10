const inquirer = require("inquirer");
var connection = require("./config/connection");
// const { start } = require("repl");
const cTable = require('console.table');
const dotenv = require('dotenv')

const teamMember = [];

//THIS IS FOR THE ENV AND ENV example tabs
const result = dotenv.config()
if (result.error) {
  throw result.error
}
 
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
  {
    id: 2,
    first_name: "first2",
    last_name: "last2",
    title: "Sales Person",
    department: "Legal",
    salary: 30000000,
    manager_id: "Manager Name",
  },
  {
    id: 3,
    first_name: "first3",
    last_name: "last3",
    title: "Lawyer",
    department: "Legal",
    salary: 600000,
    manager_id: "Manager Name",
  }, 
]);

start();

// //function for ADD Department 
function addDepartment (){
  inquirer.prompt([
    {
      name: "addDepartment",
      type: "list",
      message: "What department is the employee in?",
      choices: ["Sales", "Legal", "Engineering", "Finance"]
    },
  ]).then((answer) => {
    console.log(answer);
    // connection.query("INSERT INTO department SET ? ", {name: answer.addDepartmentId});
      start();
  })
}
//   ]).then((answer) => {
//     connection.query(
//       "INSERT INTO department SET ?",
//       {
//         name: answer.departmentId,
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
    choices: ["Add Team Member", "Add Department", "View all Departments", "Update Department", "Delete Employee", "Show Directory"],
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
    } else if (answer.name === "Add Department") {
      addDepartment();
    } else if (answer.name === "Show Directory"){
      generate ();
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
      name: "answerRole",
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

    // connection.query("INSERT INTO employee SET ? ", {name: answer.answerId + answer.answerFirstName + answer.answerLastName + answer.answerTitle + answer.answerDeparment + answer.answerRole + answer.answerManager});
    
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
  ]).then((answer) => {
    console.log(answer);
    console.log("view departments function clicked");
    console.log("view department answers saved");

    // connection.query("SELECT * FROM department VIEW ? ", {name: answer.answerDepartment})
    
    start();
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
  ]).then((answer) => {
    //create function to bring to the inputted 
    console.log(answer);
    console.log("update function FOR THE DEPARTMENT clicked");
    console.log("update function answers saved");

    // connection.query("SELECT * FROM department", {name: answer.answerUpdateDepartment})
    
    start();
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
  ]).then((answer) => {
    console.log(answer);
    console.log("delete function was clicked");
    console.log("delete function answers saved");
    //create function to show the directory to delete
    // connection.query("SELECT * FROM department SET ? ", {name: answer.answerName + answer.answerDeleteDepartment})
    
    start();
  });
}

//FUNCTION FOR THE GENERATE/SHOW DIRECOTOY 
function generate (){
  inquirer.prompt ([
    {
      type: "input",
      message: " Viewing the Directory",
      name: "generate",
    }
  ]).then ((answer) => {
    console.log(table + answer)

    // connection.query("VIEW * FROM department VIEW ? ");
  })
}