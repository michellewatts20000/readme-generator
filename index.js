// load dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// run inquirer questions
const promptUser = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is your project`s title?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter a project title.");
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter a description.");
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to give your project?',
      choices: [
        "Apache",
        "Creative Commons",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter an installation step.");
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does someone use your app?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must tell people how to use your app.");
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'If you have a url to a screenshot of your application, paste it here, or hit enter to skip through.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can others contribute to your project?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must let people know how they can collaborate with you.");
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests on your application? (If there are no tests hit enter to skip through.)',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter a GitHub username.");
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter your email address.");
        }
        return true;
      }
    },
  ]);
};



// creates a readme
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => {
      console.log('Successfully wrote a README.md');

    })
    .catch((err) => console.error(err));


};

// runs the init function
init();