
const inquirer = require('inquirer');
const fs = require("fs");

inquirer.prompt([
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
        message: 'Is there anyone you would like to add to your credits?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?',
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
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },  
])

.then((data) => {

    fs.writeFile("SampleREADME.md", generateREADME(data))
});

function generateREADME(data) {
    return `

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
    - Have more questions or feedback? Contact me at [my email](mailto:${data.email})
    
    `
}