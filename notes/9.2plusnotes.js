// for use of file system
// const fs = require('fs');
// // this returns an array based on command line input, the slice() will cut off the first 2 items in the array
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // variables that extract data at a certain index point in the array
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// // example of above using assignment destructuring, in command line arguments must be entered in order below
// const [name, github] = profileDataArgs;

// const generatePage = (userName, githubName) => {
//   return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };  
// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;
//   console.log('Portfolio Complete homie! Check out index.html to see the ouput')
// });
