const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your text for the installation section."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your text for the usage section."
    },
    {
        type: "input",
        name: "imgAlt",
        message: "What is the alt text for the image you would like to add? "
    },
    {
        type: "input",
        name: "imgUrl",
        message: "What is the path of the image you would like to add? "
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter your text for the contributing section."
    },
    {
        type: "input",
        name: "test",
        message: "Enter your text for the test section."
    },
    {
        type: "list",
        name: "license",
        message: "Which license will you use for your project?",
        choices: [
            { name: "Apache" },
            { name: "BSD" },
            { name: "CC" },
            { name: "ELP" },
            { name: "GNU" },
            { name: "IBM" },
            { name: "MIT" },
            { name: "MPL" },
            { name: "Zlib" }
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter an email to use as a contact."
    },
])
    .then((response) => {

        fs.writeFile('generatedREADME.md', generateMarkdown(response),
            (err) =>
                err ? console.log(err) : console.log('README Generated!'));

    });









