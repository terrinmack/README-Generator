function generateMarkdownREAD(data) {
    return `

    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents 

    - [Installation](#instalaltion)
    - [Usage](#usage)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contacts

    - My [Github Profile](https://github.com/${data.github})
    - Have more questions for me? Contact me at [my email](mailto:${data.email}).

    `;
}