// Licenses in an array
const licenseList = [{
    name: "Apache",
    src: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "MIT",
    src: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
  }

];

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseLink(answers) {
  const licenseLink = licenseList.find(item => item.name === answers)
  return licenseLink.link
}


function renderLicenseSrc(answers) {
  const licenseLink = licenseList.find(item => item.name === answers)
  return licenseLink.src
}

const generateMarkdown = (answers) =>

  `# ${answers.title}

  ## License
  [![License](${renderLicenseSrc(answers.license)})]()
  

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

  ${answers.screenshot === "" ? 'markdown-code-for-image-without-url' : `![screenshot](${answers.screenshot})`}

  ## How to Contribute
  ${answers.contribute}

  ## Tests
  ${answers.tests}

  ## License
![License](${renderLicenseSrc(answers.license)})
${renderLicenseLink(answers.license)}

[Details of the license: (${renderLicenseLink(answers.license)})


  ## Questions
  [Github: ${answers.github}](https://github.com/${answers.github})
  [Email: ${answers.email}](mailto:${answers.email})
`;

module.exports = generateMarkdown;





