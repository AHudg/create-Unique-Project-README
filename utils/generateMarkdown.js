function renderLicenseBadge(license) {
  if (license.length === 0) {
    return '';
  } else {
    switch(license.toString()) {
      case 'MIT':
        return `![GitHub](https://img.shields.io/badge/License-MIT-informational)`;
      case 'The Unlicense':
        return `![GitHub](https://img.shields.io/badge/License-The%20Unlicense-red)`;
      case 'GNU GPLv3':
        return `![GitHub](https://img.shields.io/badge/License-GNU%20GPLv3-yellow)`;
      case 'Apache License 2.0':
        return `![GitHub](https://img.shields.io/badge/License-Apache%20License%202.0-blueviolet)`;
      case 'Mozilla Public License 2.0':
        return `![GitHub](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-brightgreen)`;
    };
  };
};

function renderLicenseSection(license) {
if (license.length === 0) {
  return `## Licenses
  This project is not associated with any licenses.`
} else {
  return `## Licenses
This project is associated with the ${license} license.
  `;
};
};

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Project Description
  ${data.description}

  </br>

  ---
  ## Table of Contents
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Contact Information](#contact)

  ---

  </br>

  ## Installation
  To use this project, you must download the following dependencies:
  <div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
  ${data.dependencies} 
  </div>

  </br>

  ## Usage
  ${data.details}

  </br>

  ${renderLicenseSection((data.license))}

  </br>

  ## Contributing
  ${data.contribute}

  </br>

  ## Testing
  To run the test for this project use:
  <div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
  ${data.testing}
  </div>

  </br>

  ## Contact
  For more information feel free to view my [GitHub](https://github.com/${data.github}) or contact me via email at ${data.email}.
  `;
};

module.exports = generateMarkdown;
