// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title for your work.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description about your project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license(s) are associated with this project?',
        choices: ['MIT','The Unlicense','GNU GPLv3','Apache License 2.0','Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be used to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be used to run test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'details',
        message: 'What does the user need to know about the repository?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repository?'
    }
];

// TODO: Create a function to initialize app
function init() {
    // utilizes inquirer.prompt to return a promise
    // the first argument is an array of question objects
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();
