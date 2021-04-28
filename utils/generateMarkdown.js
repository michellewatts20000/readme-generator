// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


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
