// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Write a description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List the contributors to the project.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Provide any tests for the project.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license for the project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(err) : console.log( `README.md has been generated!`);
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const data = generateMarkdown(response);
        writeToFile('README.md', data);
        });
}

// Function call to initialize app
init();