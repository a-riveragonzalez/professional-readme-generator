// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "projectTitle", 
        message: "Type you title here",
    }, 
    {
        type: "input", 
        name: "projectDescription", 
        message: "Provide a short description explaining the what, why, and how of your project",
    },
    {
        type: "input", 
        name: "projectInstallation", 
        message: "What are the steps required to install your project? ",
    }, 
    {
        type: "input", 
        name: "projectUsage", 
        message: "Provide instructions and examples for use",
    }, 
    {
        type: "input", 
        name: "projectCredits", 
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    }, 
    {
        type: "list", 
        name: "projectLicense", 
        message: "Choose your License: ",
        choices: ["MIT License", "GNU GPL v2", "Apache 2.0 License", "none"], //add more later
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((answers)=>{
        // console.log(answers);
        const markdownOutput = generateMarkdown(answers);
        console.log(markdownOutput)
        fs.writeFile("README.md", markdownOutput, (err)=>{
            if (err){
                console.log("error")
            } else {
                console.log("README Generated")
            }
        })
    })
}

// Function call to initialize app
init();
