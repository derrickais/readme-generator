// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const checkIfEmpty = value => {
    if (value) {
        return true;
    } else {
        console.log("\n\nAnswer cannot be empty\n");
    }
}

// Creates an array of questions for user input
const promptUsers = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please include a description of your project',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you run your project?',
            validate: checkIfEmpty
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does your project have',
            choices: ['MIT', 'Apache', 'IBM', 'Boost', 'None']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the contributors (if multiple separate with commas)',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test your project?',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github?',
            validate: checkIfEmpty
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact email?',
            validate: checkIfEmpty
        },
    
    ]);
}

    
// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if(err) throw new Error(err);

        console.log("File Created!")
    });
}

// Creates a function to initialize app
function init() {
    promptUsers()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(fileInfo => {
        return writeToFile('./dist/README.md', fileInfo);
    })
    .catch(err => {
        console.log(err);
    })
    
}

// Function call to initialize app
init();
