const inquirer = require('inquirer');
// // File Systems requirement
// const fs = require('fs');
// // generagePage code import
// const generatePage = require('./src/page-template');

// // Data fill in for page being created
// const pageHTML = generatePage(name, github);
// // html file creator - (filename,datagoingin,callback)
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;
// // if no error occurs
//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptProject()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
});
// 9.3.5 at the bottom