// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license==="Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license==="Open Database License (ODbL)"){
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// the actual link 
function renderLicenseLink(license) {
  if (license==="MIT License"){
    return ""
  }
  if (license==="Mozilla Public License 2.0"){
    return ""
  }
  if (license==="Open Database License (ODbL)"){
    return "https://opendatacommons.org/licenses/odbl/"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// short summary of license that you pick 
function renderLicenseSection(license) {
  if (license==="MIT License"){
    return ""
  }
  if (license===""){
    return ""
  }
  if (license==="Open Database License (ODbL)"){
    return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
${renderLicenseBadge(answers.projectLicense)}
## Description
${answers.projectDescription}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.projectInstallation}
## Usage
${answers.projectUsage}
## Credits
${answers.projectCredits}
## License
${answers.projectLicense}
${renderLicenseLink(answers.projectLicense)}
${renderLicenseSection(answers.projectLicense)}
`;
}

module.exports = generateMarkdown;
