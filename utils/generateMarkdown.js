// Licenses in an array
const licenseList = [{
    name: "Apache",
    src: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "MIT",
    src: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://creativecommons.org/licenses/by-nc/4.0",
  },
  {
    name: "Creative Commons",
    src: "https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "GNU",
    src: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    description: "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.",
  },
  {
    name: "ISC",
    src: "https://img.shields.io/badge/License-ISC-blue.svg",
    link: "https://opensource.org/licenses/ISC",
  },
  {
    name: "Mozilla",
    src: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "Open",
    src: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
    link: "https://opendatacommons.org/licenses/by",
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

function renderLicenseDescription(answers) {
  const licenseLink = licenseList.find(item => item.name === answers)
  return licenseLink.description
}

const generateMarkdown = (answers) =>

  `# ${answers.title}

  <a href="${renderLicenseLink(answers.license)}">
  <img src="${renderLicenseSrc(answers.license)}"></a>

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${answers.screenshot === "" ? 'markdown-code-for-image-without-url' : `![screenshot](${answers.screenshot})`}

  ## Contribute
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## License

  <a href="${renderLicenseLink(answers.license)}">
<img src="${renderLicenseSrc(answers.license)}"></a>

${renderLicenseDescription(answers.license)}


  ## Questions
  [Github: ${answers.github}](https://github.com/${answers.github})
  <br>
  [Email: ${answers.email}](mailto:${answers.email})
`;

module.exports = generateMarkdown;