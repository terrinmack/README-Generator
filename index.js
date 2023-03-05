const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title for your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the information you would like to include in your README description section.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions for you project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information for your project.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter your project contribution guidelines.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is your project title?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your project title?',
            choices: ['MIT', 'ISC', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your project title?',
        },
    ])






    # ${data.title}
    ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})

    ## Description
        ${data.description}

    ## Table of Contents 

    - [Installation](#instalaltion)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Test](#test)
    - [Contacts](#contacts)

    ## Installation
        ${data.installation}

    ## Usage
        ${data.usage}

    ## Contacts

    - My [Github Profile](https://github.com/${data.github})
    - Have more questions for me? Contact me at [my email](mailto:${data.email}).

