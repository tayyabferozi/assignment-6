// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);

// _________________________________________________________________________________________________

// 2. Write a program that alerts the current month in words. 
// For example December.

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var month = new Date().getMonth();
// document.write("Current Month: " + monthNames[month]);

// _________________________________________________________________________________________________

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = new Date().getDay();
// var dayName = days[day];
// document.write("Today is " + dayName);

// _________________________________________________________________________________________________

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//   document.write("It's Fun day")
// }

// _________________________________________________________________________________________________

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var date = new Date().getDate();
// if (date < 16) {
//   document.write("First fifteen days of the month");
// }
// else if (date < 32) {
//   document.write("Last fifteen days of the month");
// }

// _________________________________________________________________________________________________

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var elapsedMiliSeconds = Date.now();
// var currentDate = new Date(Date.now());
// var specificDate = new Date(1970, 0, 1);
// document.write("Current Date: ", currentDate, "<br>");
// document.write("Elapsed miliseconds since January 1, 1970: ", elapsedMiliSeconds, "<br>");
// document.write("Elapsed minutes since January 1, 1970: ", elapsedMiliSeconds / 6400);

// _________________________________________________________________________________________________

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var hours = new Date().getHours();
// if (hours <= 12) {
//   document.write("It's AM");
// } else {
//   document.write("It's PM")
// }

// _________________________________________________________________________________________________

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate, "<br>");

// _________________________________________________________________________________________________

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanDateDays = new Date(2015, 5, 1);
// var currentDate = new Date();
// var numberOfDays = Math.ceil((currentDate - ramadanDateDays) / 8.64e7);
// document.write(numberOfDays + " have passed sinse 1st Ramadan, 2015");

// _________________________________________________________________________________________________

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date();
// var referenceDateSeconds = referenceDate.getTime() / 1000;
// var specificDate = new Date(2015, 0, 1);
// console.log(referenceDateSeconds)
// var specificDateSeconds = specificDate.getTime() / 1000;
// console.log(specificDateSeconds)
// var secondsPassed = referenceDateSeconds - specificDateSeconds;
// document.write("On reference date " + referenceDate + ",<br>" + secondsPassed.toFixed(0) + " seconds have passed since " + specificDate);

// _________________________________________________________________________________________________

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date();
// var hours = currentDate.getHours();
// var hourAdded = currentDate.setHours(currentDate.getHours() + 1);
// var hourAhead = new Date(hourAdded);
// document.write(hourAhead);

// _________________________________________________________________________________________________

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// var yearBack = new Date();
// yearBack.setFullYear(currentDate.getFullYear() - 100);
// document.write("Current date: " + currentDate + "<br>100 years back it was " + yearBack);

// _________________________________________________________________________________________________

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var userInput = +prompt("Enter your age");
// var currentDate = new Date();
// var currentDateYear = currentDate.getFullYear();
// var userBirthYear = currentDateYear - userInput;
// document.write("Your age is ", userInput, "<br> Your birth year is ", userBirthYear);

// _________________________________________________________________________________________________

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var customerName = prompt("Enter your name");
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"]
// var currentMonth = new Date().getMonth();
// currentMonth = monthNames[currentMonth];
// var units = 410;
// var rate = 16;
// var subCharge = 350;
// var amountPayable = units * rate;
// var amountPayableAfterDate = amountPayable + subCharge;
// document.write("<h1>Customer Name</h1>", "<br>");
// document.write("Customer Name: <strong>" + customerName, "</strong><br>");
// document.write("Month: <strong>" + currentMonth, "</strong><br>");
// document.write("Number of units: <strong>" + units, "</strong><br>");
// document.write("Charges per unit: <strong>" + rate, "</strong><br>");
// document.write("Net Amount Payable (within Due Date): <strong>" + amountPayable, "</strong><br>");
// document.write("Late payment subcharge: <strong>" + subCharge, "</strong><br>");
// document.write("Gross Amount Payable (after Due Date): <strong>" + amountPayableAfterDate, "</strong><br>");

// _________________________________________________________________________________________________
