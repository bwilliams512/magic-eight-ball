/*
This is a Magic Eight Ball project, built using control flow in JavaScript.

The user will be able to input a question, then the program will output a random fortune.
*/

// Define variable that allows user to enter her name in between quotation marks
const userName = '';

// Create a ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable to get user question
const userQuestion = 'Will my favorite team win the game this weekend?';

console.log(`The user asked: ${userQuestion}`);

// Generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Create a control flow
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
 }

// Print the Magic Eight Ball's answer
console.log(`The eight ball answered: ${eightBall}`);
