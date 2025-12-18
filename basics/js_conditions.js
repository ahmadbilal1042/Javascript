// Q16. Check age and display "Allowed" or "Not Allowed".

const allowToDrive = () => {
    let age = Number.parseInt(prompt("Enter your age."));
    if (age >= 18) {
        alert("Allowed To Drive");
    } else {
        alert("Not Allowed To Drive");
    }
    let checkAgain = confirm("Do you wanna check another?")
    if (checkAgain) {
        allowToDrive();
    } else {
        return;
    }
}
allowToDrive();

// Q17. Display grade based on marks (A, B, C, Fail).


const checkPassFail = () => {
    let marks = Number.parseInt(prompt("Enter your marks"))
    if (marks < 0) {
        alert("Invalid Marks")
    } else if (marks <= 49) {
        alert("Fail")
    } else if (marks < 60) {
        alert("D")
    } else if (marks < 70) {
        alert("C")
    } else if (marks < 80) {
        alert("B")
    } else if (marks < 90) {
        alert("A")
    } else if (marks < 100) {
        alert("A+")
    } else if (marks == 100) {
        alert("Perfect Score")
    } else if (marks > 100) {
        alert("Enter the marks again.");
        let checkAgain = confirm("Try again")
        if (checkAgain) {
            checkPassFail();
        }
    } else {
        return;
    }
}
checkPassFail()

// Q18. Display login success message if credentials are correct.


let dbUsername = "root", dbPassword = "pass";

function loginAuth() {
    let enteredUsername = prompt("Enter your username");
    let enteredPassword = prompt("Enter your password");
    if (enteredUsername === dbUsername && enteredPassword === dbPassword) {
        alert("Login Successful")
    } else {
        alert("Username or password was incorrect. Please try again.")
        let tryAgain = confirm("Wanna try again?")
        if (tryAgain) {
            loginAuth();
        }
    }
}
loginAuth()

// Q19. Display greeting based on current time (Morning/Evening).



let newDate = new Date;
let hours = newDate.getHours();
let greeting = hours >= 12 ? "Good Evening" : "Good Morning"
alert(greeting)

// Q20.Check balance and allow or deny withdrawal.

let balance = Number.parseInt(prompt("Enter Balance"))

const checkBalance = () => {
    if (balance < 0) {
        alert("Balance in negative")
    } else if (balance == 0) {
        alert("Zero balance, kindly deposit first.")
    } else if (balance < 1000) {
        alert("You cannot withdraw money. Your balance must be thousand to withdraw")
    } else {
        alert("Enter the amount to withdraw")
    }
}
checkBalance();
