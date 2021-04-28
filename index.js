const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
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
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to give your project?',
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
    },
    // {
    //   type: 'input',
    //   name: 'installation',
    //   message: 'What are the steps required to install your project?',
    // },
    // {
    //   type: 'input',
    //   name: 'usage',
    //   message: 'How does someone use your app?',
    // },
    // {
    //   type: 'input',
    //   name: 'screenshot',
    //   message: 'If you have a url to a screenshot of your app, paste it here:',
    // },
    // {
    //   type: 'input',
    //   name: 'screenshot2',
    //   message: 'If you have a url to a screenshot of your app, paste it here:',
    // },
    // {
    //   type: 'input',
    //   name: 'contribution',
    //   message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here:',
    // },
    // {
    //   type: 'input',
    //   name: 'tests',
    //   message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here:',
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'What is your GitHub username?',
    // },
    // {
    //   type: 'input',
    //   name: 'email',
    //   message: 'What is your email address?',
    // },
  ]);
};



// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote a README.md'))
    .catch((err) => console.error(err));
};

init();
