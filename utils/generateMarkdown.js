// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    // DO SOMETHING
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `## TITLE${response.title}
          ## DESCRIPTION${response.description}
          ## INSTALLATION${response.installation}
          ## USAGE${response.usage}
          ## LICENSE${response.license}
          ## CONTRIBUTING${response.license}
          ## TESTS${response.tests}
          ## QUESTIONS${response.questions}
          ${renderLicenseBadge(response.license)}

`;
}

module.exports = generateMarkdown;
