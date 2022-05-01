// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){

  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

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
  return `
# ${data.title}

_liscense_

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
