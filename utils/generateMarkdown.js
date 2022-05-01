// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } 
  if (license === 'IBM'){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } 
  if (license === 'Boost'){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } 

  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  if (license === 'Apache'){
    return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  } 
  if (license === 'IBM'){
    return "[IBM](https://opensource.org/licenses/IPL-1.0)"
  } 
  if (license === 'Boost'){
    return "[Boost](https://www.boost.org/LICENSE_1_0.txt)"
  } 
  
  else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != "None"){
    return `

${renderLicenseBadge(license)}
${renderLicenseLink(license)}

    `
  } else {
    return "";
  }
}

function getContributors(contributors) {
  const markdown = contributors.split(',').map(contributor => {
    return `* ${contributor.trim()}\n\n`
  })

  return markdown.join('');
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors

${getContributors(data.contributors)}

## Tests

${data.tests}

## Contact

Any questions, comments, or concern? 

Contact me at: 

[Github](https://github.com/${data.github})

[Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
