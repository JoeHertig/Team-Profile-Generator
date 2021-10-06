// required const's
const profileDataArgs = process.argv.slice(2, process.argv.length);
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

// coding library const's
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// first prompt
const startingPrompt = () => {
  return inquirer.prompt([
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
  ]);
};

// Prompt for Engineer
const promptEngineer = () => {
  return inquirer.prompt([
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
  ]);
};

// Prompt for Intern
const promptIntern = () => {
  return inquirer.prompt([
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
  ]);
};

startingPrompt();
