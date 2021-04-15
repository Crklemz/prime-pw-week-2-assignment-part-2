// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it's value to a string 'Dane'
// We create an conditional statement checking if the variable is Mary.
// If the variable name equals Mary, then the the console will show "Hi, Mary!", otherwise it will show "How do you do?"
//We console log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We create a variable named 'secret' but do not assign a value
//We create a variable named 'code' and assign the value of 123
//We create a conditional saying if 'code' equals 123, then assign variable 'secret' a value of 'super' and the varable 'code' is changed to code * 2. if code does not equal 123, then nothing will happen.
//We create a conditional saying if 'code' is greater than 250, then the variable 'secret' has a value of 'duper'
//We will console log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create 3 variables 'isStudent' (boolean), 'age' (number), and 'zip' (number) and assign them the values 'true', '34', and '55407' respectively
//We create a compound conditional 'if, else if, else if, else' statement checking if 'isStudent' is true AND if 'zip' is greater than 80000. If so, we will console log 'You're a student on the West Coast!'
//otherwise we will check if 'isStudent' is false OR 'age' is less than 30. If either of those are true, then we will console log 'What are your hobbies?'
//otherwise we will check if 'isStudent' equals true, if so, we will console log 'Welcome to Prime!'
//otherwise, if all are false, we will console log 'How about the weather?'
//We will ultimately console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - variables colorOne and colorTwo are set to the wrong values. They were flip flopped.
// Should be let colorOne = 'blue' and let colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - block of code to run is missing colorTwo.
// should be if (mix === true) {
//  colorOne = 'purple';
//  colorTwo = 'purple';
//}
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - time is supposed to be a variable but it was made a constant. change cont to let.
const time = 4;

FIX - the compound conditional shows OR instead of AND. Change to - if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {   // FIX - the console logs are switched. as it is written, 'no entry' will show in the console
  console.log('no entry');
} else {
  console.log('enter');
}
*/
