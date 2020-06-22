// 1. Write a function that displays current date & time in your
// browser.

// function showDate() {
//   var date = new Date();
//   document.write(date);
// }
// showDate();

// _________________________________________________________________________________________________

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name

// function greet() {
//   var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");
//   alert("Hello " + firstName + " " + lastName);
// }
// greet();

// _________________________________________________________________________________________________


// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// function sum() {
//   var firstNumber = prompt("Enter first number");
//   var secondNumber = prompt("Enter second number");
//   var sum = firstNumber + secondNumber;
//   return sum;
// }
// sum();

// _________________________________________________________________________________________________

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculate(num1, num2, op) {
//   console.log(num1, num2, op)
//   switch (op) {
//     case "+":
//       console.log("Falled in switch")
//       return (num1 + num2);
//     case "-":
//       return (num1 - num2);
//     case "*":
//       return (num1 * num2);
//     case "/":
//       return (num1 / num2);
//     default:
//       return "Invalid Input";
//   }
// }
// var number1 = +prompt("Enter First number");
// var number2 = +prompt("Enter Second number");
// var operator = prompt("Enter the operator (valid inputs are : +, -, *, /)");
// var result = calculate(number1, number2, operator);
// document.write(result);

// _________________________________________________________________________________________________

// 5. Write a function that squares its argument.

// function square(num) {
//   return num ** 2;
// }
// document.write("Num: 5<br>Square: " + square(5));

// _________________________________________________________________________________________________

// 6. Write a function that computes factorial of a number.

// function fact(num) {
//   var factorial = 1;
//   for (var i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
// document.write("Num: 5", "<br>", "Factorial: ", fact(5));

// _________________________________________________________________________________________________

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

// function count() {
//   var start = +prompt("Enter the start number");
//   var end = +prompt("Enter the end number");
//   document.write("Start number: " + start + "<br>End number: " + end + "<br>")
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// count();

// _________________________________________________________________________________________________

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//   function square(num) {
//     return num ** 2;
//   }

//   var hypotenuse2 = square(base) + square(perpendicular);
//   var hypotenuse = Math.sqrt(hypotenuse2);
//   return hypotenuse;
// }

// var baseInput = +prompt("Enter the base of right angled triangle");
// var perpendicularInput = +prompt("Enter the perpendiculat of the right andled triangle");
// document.write("Base: " + baseInput + "<br>Perpendicular: " + perpendicularInput + "<br>" + calculateHypotenuse(baseInput, perpendicularInput));

// _________________________________________________________________________________________________

// 9. Write a function that calculates the area of a rectangle.

// A = width * height

// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width, height) {
//   var area = width * height;
//   document.write("Width: " + width + "<br>Height: " + height + "<br>Area: " + area + "<br><br>");
// }
// var w = 10;
// var h = 4;
// area(5, 6);
// area(w, h);

// _________________________________________________________________________________________________

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// function palindrome(word) {
//   var reversedWord = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//   }

//   if (word === reversedWord) {
//     document.write("The word is a palindrome");
//   } else {
//     document.write("The word is not a palindrome");
//   }
// }
// palindrome("madam");

// **************************************************************************

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(string) {
//   var stringArray = string.split(" ");
//   var transformedArray = [];
//   for (var i = 0; i < stringArray.length; i++) {
//     transformedArray[i] = stringArray[i][0].toUpperCase();
//     console.log(transformedArray[i])
//     transformedArray[i] = transformedArray[i] + stringArray[i].slice(1)
//   }
//   return transformedArray;
// }
// console.log(titleCase("this is a sentence"));

// _________________________________________________________________________________________________

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longest(string) {
//   var stringArray = string.split(" ");
//   var longestWord = stringArray[0];
//   for (var i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length > longestWord.length) {
//       longestWord = stringArray[i]
//     }
//   }
//   return longestWord;
// }
// alert(longest("Web Development Tutorial"))

// _________________________________________________________________________________________________

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

// function countOccurence(string, letter) {
//   var occurrences = 0
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       occurrences += 1;
//     }
//   }
//   return occurrences;
// }
// alert(countOccurence("JSResourceS.com", "o"));

// _________________________________________________________________________________________________

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(r) {
//   var circumference = 2 * (22 / 7) * r;
//   document.write("The circumference is " + circumference + "<br>");
// }
// function calcArea(r) {
//   var area = ((22 / 7) * (r ** 2));
//   document.write("The area is " + area);
// }
// calcCircumference(5);
// calcArea(5)

// _________________________________________________________________________________________________