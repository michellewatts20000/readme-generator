// Licenses in an array
const licenseList = [{
    name: "Apache",
    src: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
    description: "Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.",
  },
  {
    name: "MIT",
    src: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
    description: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.",
  },
  {
    name: "Creative Commons",
    src: "https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg",
    link: "https://creativecommons.org/licenses/by-nc/4.0",
    description: "You are free to share, copy and redistribute the material in any medium or format. You are also free to adapt, remix, transform and build upon the material.",
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
    description: "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.",
  },
  {
    name: "Mozilla",
    src: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
    description: "Each Contributor hereby grants you a world-wide, royalty-free, non-exclusive license.",
  },
  {
    name: "Open",
    src: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
    link: "https://opendatacommons.org/licenses/by/1-0/",
    description: "The Open Data Commons Attribution License is a license agreement intended to allow users to freely share, modify, and use this Database subject only to the attribution requirements set out in Section 4.",
  }

];


// get the license link from the above array
function renderLicenseLink(answers) {
  const licenseLink = licenseList.find(item => item.name === answers)
  return licenseLink.link
}

// get the license src from the above array
function renderLicenseSrc(answers) {
  const licenseLink = licenseList.find(item => item.name === answers)
  return licenseLink.src
}

// get the license description from the above array
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
  ${answers.tests === "" ? '' : `- [Tests](#tests)`}
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${answers.screenshot === "" ? '' : `## Screenshot ![screenshot](${answers.screenshot})`}

  ## Contribute
  ${answers.contribution}

  ${answers.tests === "" ? '' : `## Tests ${answers.tests}`}

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