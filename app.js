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
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));