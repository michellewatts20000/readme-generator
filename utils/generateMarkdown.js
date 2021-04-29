// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(answers) {
  const licenseList = {
    "Apache": {
      name: "Apache",
      src: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0",
    },
    "MIT": {
      name: "MIT",
      src: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT",
    }
  
  };
  
  const keyToUse = "src";
  const result = licenseList[keyToUse];
  console.log(result);
 
  console.log(answers.license);
}


const generateMarkdown = (answers) =>
  `# ${answers.title}

  ## License

  [![License](https://img.shields.io/badge/license-${answers.license}-green)]()

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ![screenshot](${answers.screenshot})
  ![screenshot](${answers.screenshot2})

  ## How to Contribute
  ${answers.contribute}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}

  ## Questions
  [Github: ${answers.github}](https://github.com/${answers.github})
  [Email: ${answers.email}](mailto:${answers.email})

`;

module.exports = generateMarkdown;