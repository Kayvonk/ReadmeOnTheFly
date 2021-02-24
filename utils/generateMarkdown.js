// function to generate markdown for README
function generateMarkdown(response) {
  let description = '';
  switch (response.license) {
    case 'Apache':
      description = 'Apache'
      break;
    case 'BSD':
      description = 'Berkeley Source Distribution (BSD)'
      break;
    case 'CC':
      description = 'Creative Commons (CC)'
      break;
    case 'ELP':
      description = 'Eclipse Public License (EPL)'
      break;
    case 'GNU':
      description = 'General Public License (GNU)'
      break;
    case 'IPL':
      description = 'IBM Public License (IPL)'
      break;
    case 'MIT':
      description = 'MIT'
      break;
    case 'MPL':
      description = 'Mozilla Public License (MPL)'
      break;
    case 'Zlib':
      description = 'zlib/libpng License (Zlib)'
      break;
  }

  return `![License Badge](https://img.shields.io/badge/license-${response.license}-brightgreen)

# ${response.title} 

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

![${response.imgAlt}](${response.imgUrl})

## Credits
${response.contributing}

## Tests
${response.tests}

## License
This project is licensed with ${description}.

## Questions
Follow me on [Github](https://github.com/${response.github}).

To contact me, send an email to ${response.email} with your name and inquiry.`

    ;
}

module.exports = generateMarkdown;
