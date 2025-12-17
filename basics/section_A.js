// Q1. Print "Application Initialized" in the console when the page loads

console.log('Application Initialized');


// Q2. Display the current date and time in an alert box.

const dateAndTimeNow = new Date;
alert(dateAndTimeNow.toLocaleString())

// Q3. Print the browser name and version in the console.

console.log(navigator.userAgent);

// Q4. Change the web page title to "JS Exam Started" using JavaScript.

document.title = "JS Exam Started";

// Q5. Display a message on the page confirming JavaScript is running.

if (document.title == "JS Exam Started") {
    alert("JavaScript is running");
}