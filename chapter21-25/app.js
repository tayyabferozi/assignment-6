// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// document.write("Hello " + fullName + "<br>");

// _________________________________________________________________________________________________

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var favouriteModel = prompt("Enter your favourite mobile phone model name");
// var length = favouriteModel.length;
// document.write("My favourite phone is " + favouriteModel + "<br>");
// document.write("Length of string " + length + "<br>");

// _________________________________________________________________________________________________

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index + "<br>");

// _________________________________________________________________________________________________

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var string = "Hello World";
// var lastIndex = string.lastIndexOf("l");
// document.write("String: " + string + "<br>");
// document.write("Last index of 'l': " + lastIndex + "<br>");

// _________________________________________________________________________________________________

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var letterAt3rdIndex = word[3];
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + letterAt3rdIndex + "<br>");

// _________________________________________________________________________________________________

// 6. Repeat Q1 using string concat() method

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// document.write("Hello " + fullName + "<br>");

// _________________________________________________________________________________________________

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var toReplace = "Islam";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br>");
// document.write("After replacement: " + replacedWord + "<br>");

// _________________________________________________________________________________________________

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var string = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedString = string.split("and").join("&")
// document.write("Message: " + string + "<br>");
// document.write("Message after replacement: " + replacedString + "<br>");

// _________________________________________________________________________________________________

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var string = "472";
// var number = +string;
// document.write("Value: ", string, "<br>");
// document.write("Type ", typeof (string), "<br>");
// document.write("Value: ", number, "<br>");
// document.write("Type: ", typeof (number), "<br>");

// _________________________________________________________________________________________________

// 10. Write a program that takes user input.Convert and
// show the input in capital letters.

// var userInput = prompt("Enter a string to convert to uppercase");
// var upperCase = userInput.toUpperCase();
// document.write("User input: ", userInput, "<br>");
// document.write("Upper case: ", upperCase, "<br>");

// _________________________________________________________________________________________________

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var userInput = prompt("Enter a string to convert to title case");
// var titleCase = userInput[0].toUpperCase() + userInput.slice(1);
// document.write("User input: ", userInput, "<br>");
// document.write("Title Case: ", titleCase);

// _________________________________________________________________________________________________

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var string = num.toString().replace(".", "");
// document.write("Numeber: ", num, "<br>");
// document.write("String: ", string, "<br>");

// _________________________________________________________________________________________________

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

// var userName = prompt("Enter a username");
// for (var i = 0; i < userName.length; i++) {
//   var currentLetter = userName[i]
//   if (
//     currentLetter.charCodeAt(0) === 33 ||
//     currentLetter.charCodeAt(0) === 44 ||
//     currentLetter.charCodeAt(0) === 46 ||
//     currentLetter.charCodeAt(0) === 64
//   ) {
//     alert("Please enter a valid username");
//   }
// }

// _________________________________________________________________________________________________

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchInput = prompt("Welcome to the ABC Bakery. What do you want to order sir/ma'am?");
// var searchInputLowerCase = searchInput.toLowerCase();
// var index = a.indexOf(searchInputLowerCase);
// if (index > 0) {
//   document.write(searchInput + " is <strong>available</strong> at index " + index + " in our bakery");
// } else {
//   document.write("We are sorry. " + searchInput + " is <strong>not available</strong> in our bakery");
// }

// _________________________________________________________________________________________________

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter your password");
// var containsAlphabet = false;
// var containsNumber = false;
// var validLength = false;
// var notStartsWithNumber = false;
// var currentLetterASCII;

// if (password.length >= 6) {
//   validLength = true;
// }
// if (!(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)) {
//   notStartsWithNumber = true;
// }
// for (var i = 0; i < password.length; i++) {
//   currentLetterASCII = password[i].charCodeAt(0);
//   console.log(currentLetterASCII)
//   if ((currentLetterASCII >= 48) && (currentLetterASCII <= 57)) {
//     containsNumber = true;
//   }
//   if (((currentLetterASCII >= 65) && (currentLetterASCII <= 90)) || ((currentLetterASCII >= 97) && (currentLetterASCII <= 122))) {
//     containsAlphabet = true;
//   }
// }
// if ((!containsAlphabet || !containsNumber || !validLength || !notStartsWithNumber)) {
//   document.write("<h1>Password Invalid</h1>")
// }
// if (!(containsAlphabet)) {
//   document.write("Your password must contain at-least one alphabet", "<br>");
// }
// if (!(containsNumber)) {
//   document.write("Your password must contain at-least one number", "<br>");
// }
// if (!(validLength)) {
//   document.write("Your password must be at-least 6 characters long", "<br>");
// }
// if (!(notStartsWithNumber)) {
//   document.write("Your password can't not start with a number", "<br>");
// }


// _________________________________________________________________________________________________

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var uniArray = university.split("");
// for (var i = 0; i < uniArray.length; i++) {
//   document.write(uniArray[i], "<br>");
// }

// _________________________________________________________________________________________________

// 17. Write a program to display the last character of a user 
// input.

// var userInput = prompt("Enter your input");
// document.write("User Input: ", userInput, "<br>", "Last character of input: ", userInput[userInput.length - 1], "<br>");

// _________________________________________________________________________________________________

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var string = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// var strArray = string.split(" ");
// console.log(strArray)
// for (var i = 0; i < string.length; i++) {
//   console.log(strArray[i])
//   if (strArray[i] === "the") {
//     count++;
//   }
// }

// document.write("Text: ", string, "<br>");
// document.write("There are ", count, " occourence(s) of the word 'the'");

// _________________________________________________________________________________________________