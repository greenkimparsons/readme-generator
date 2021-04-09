// packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the name of the app?",
    name: "title",
  },
  {
    type: "input",
    message: "How do you use the app?",
    name: "description",
  },
  {
    type: "input",
    message: "How to install the app?",
    name: "installation",
  },
  {
    type: "input",
    message: "How to report issues?",
    name: "usage",
  },
  {
    type: "input",
    message: "How to make contributions",
    name: "contributing",
  },
  {
    type: "input",
    message: "How to make contributions",
    name: "tests",
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    name: "license",
    choices: ["MIT", "Apache", "None"]
  },
  {
    type: "input",
    message: "Enter your Github username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "email",
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README generated successfully!")
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", generateMarkdown({ response }));
  });
}

// function to initialize app
init();
