// required const's
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

// coding library const's
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array
const employeeArray = [];

// first prompt
const startingPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Manager's Id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's Id number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Manager's office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        },
      },
    ])
    .then(function (data) {
      const managerName = data.managerName;
      const managerId = data.managerId;
      const managerEmail = data.managerEmail;
      const managerOffice = data.managerOffice;
      const employeeMember = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOffice
      );
      employeeArray.push(employeeMember);
      // test code
      console.log(employeeArray);
      // go to selection option
      selectOption();
    });
};

// Prompt for Engineer
const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer's Id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Id number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's GitHub username?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username!");
            return false;
          }
        },
      },
    ])
    .then(function (data) {
      const engineerName = data.engineerName;
      const engineerId = data.engineerId;
      const engineerEmail = data.engineerEmail;
      const engineerGithub = data.engineerGithub;
      const employeeMember = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      employeeArray.push(employeeMember);
      // test code
      console.log(employeeArray);
      // go to selection option
      selectOption();
    });
};

// Prompt for Intern
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Intern's Id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's Id number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Intern's school?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },
    ])
    .then(function (data) {
      const internName = data.internName;
      const internId = data.internId;
      const internEmail = data.internEmail;
      const internSchool = data.internSchool;
      const employeeMember = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      employeeArray.push(employeeMember);
      // test code
      console.log(employeeArray);
      // go to selection option
      selectOption();
    });
};

const selectOption = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectEmployee",
        message: "Who would you like to add next?",
        choices: ["Engineer", "Intern", "Finish building team (exit prompt)"],
      },
    ])
    .then(({ selectEmployee }) => {
      if (selectEmployee === "Engineer") {
        promptEngineer();
      } else if (selectEmployee === "Intern") {
        promptIntern();
      } else {
        //will be the option to generate page.
      }
    });
};

startingPrompt();
