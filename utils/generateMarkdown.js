// function to generate markdown for README
function generateMarkdown(response) {
  // let description = '';
  // switch (response.liscense) {
  //     case 'MIT':
  //         description = 'MIT LICSCENSE JARGON'
  //         break;
  //     case 'GNU':
  //         description = 'MIT LICSCENSE JARGON'
  //         break;
  // }
  return `![License Badge](https://img.shields.io/badge/license-${response.liscense}-brightgreen)

#${response.title} 

##Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

(#description)
${response.description}

(#installation)
${response.installation}

(#usage)
${response.usage}

![${response.imgAlt}](${response.imgUrl})

(#credits)
${response.contributing}

(#tests)
${response.test}

(#license)
This project is licensed with ${response.liscense}.

(#questions)
Follow me on [Github](https://github.com/${response.github}).

To contact me, send an email to ${response.email} with your name and inquiry.`

    ;
}

module.exports = generateMarkdown;
