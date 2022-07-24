// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
## Project Description
${data.description}

## Table of Contents
* [Installation Instructions](#installation)
* [Licenses](#license)
* [Testing](#testing)
* [Project Details](#details)
* [Contributing](#contibute)
* [Contact Information](#contact)

## Installation
To use this project, you must download the following dependencies:
* ${data.dependencies}

## Licenses
The following licenses are associated with this project.
* ${data.license}

## Testing
To run the test for this project use ${data.testing}.

## Project Details
${data.details}

## How to Contribute
${data.contribute}

## Contact Information
For more information feel free to view my [GitHub](https://github.com/${data.github}) or contact me via email at ${data.email}.
  `;
};

module.exports = generateMarkdown;
