const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Arrow function => essentially creating function without the keyword 'function'

// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);
  
//   printProfileData(profileDataArgs);


// const variable examples
// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');
// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };
// personObj.age = 100;
// personObj.occupation = 'Developer';
// console.log(animalArray)
// console.log(personObj)



// 9.1.6
// Notice the lack of parentheses around the 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
  // this ..
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i])
  }
console.log('===================')

// is the same as this ...
profileDataArr.forEach(profileItem => console.log(profileItem));
};
// above 'profileItem' is declared within the .forEach()
printProfileData(profileDataArgs);
