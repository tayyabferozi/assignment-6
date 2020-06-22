// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a positive number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

// _________________________________________________________________________________________________

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a negative number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

// _________________________________________________________________________________________________

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter a number");
// var absolute = Math.abs(number);
// document.write("The absolute value of " + number + " is " + absolute);

// _________________________________________________________________________________________________

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);

// _________________________________________________________________________________________________

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var tossValue = Math.floor(Math.random() * 2) + 1;
// document.write(tossValue, "<br>");
// if (tossValue === 1) {
//   document.write("Random coin value: Tails");
// }
// else if (tossValue === 2) {
//   document.write("Random coin value: Heads");
// }

// _________________________________________________________________________________________________

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

// _________________________________________________________________________________________________

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var age = prompt("Enter Your age: ");
var parsedAge = parseFloat(age);
document.write("The weight of user is " + parsedAge + " kilograms");

// _________________________________________________________________________________________________

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber)
// var userInput = +prompt("Guess the number");
// if (userInput === secretNumber) {
//   document.write("Congratulations!");
// } else {
//   document.write("Try Again!");
// }

// _________________________________________________________________________________________________
