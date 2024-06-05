// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    switch (license) {
      case 'MIT':
        badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
      case 'Apache':
        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        break;
      case 'GPL':
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        break;
      default:
        badge = '';
        break;
    }
    return badge;
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let link = '';
    switch (license) {
      case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
      case 'Apache':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GPL':
        link = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      default:
        link = '';
        break;
    }
    return link;
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(!license) {
      return '';
    }
    return `[${license} License](${renderLicenseLink(license)})`;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.projectTitle}
  
  ${renderLicenseBadge(data.license)}
    
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
 If you have any questions about this project, please reach out to me at [Email](${data.emailAddress}),
 You can also find more of my work at my [GitHub](${data.githubUsername})`;
  }
  
  module.exports = generateMarkdown;
  