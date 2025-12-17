// Q11. Calculate sum, difference, multiplication, and division of two numbers.

let num1 = 10;
let num2 = 5;


// Addition

const add = (a, b) => {
    return a + b;
}
let additionResult = add(num1, num2)
document.getElementById("sum").innerHTML = additionResult;

// Substarction
const substract = (a, b) => {
    return a - b;
}
let substractionResult = substract(num1, num2)
document.getElementById("substract").innerHTML = substractionResult;

// Multiply
const multiply = (a, b) => {
    return a * b;
}
let multiplicationResult = multiply(num1, num2)
document.getElementById("multiply").innerHTML = multiplicationResult;
// Division
const divide = (a, b) => {
    if (b == 0) {
        alert("Cannot be divided by zero");
        return;
    }
    return a / b;
}
let dividationResult = divide(num1, num2)
document.getElementById("divide").innerHTML = dividationResult;

// Q12. Check whether a number is even or odd using operators.

let oddOrEvenDisplay = document.getElementById("oddOrEven");

function checkEvenOdd() {
    let number = parseInt(prompt("Enter a valid Number"));
    if (number % 2 == 0) {
        oddOrEvenDisplay.innerHTML = "Even"
    } else {
        oddOrEvenDisplay.innerHTML = "Odd"
    }
}

checkEvenOdd()

// Q13. Compare password and confirm password using strict comparison.

let password = "12345";
let newPassword = prompt("Enter your Password");
let isPasswordCorrect = password === newPassword ? alert("Correct") : alert("Wrong Password");

// Q14. Check if user is premium AND cart value is greater than 5000.


let premiumMembershipLevel = true;
let cartValue = 10000;
let offerValid = (premiumMembershipLevel && cartValue > 5000) ? alert("Offer can be applied") : alert("Offer not available for you");

// Q15. Create a counter using increment and decrement operators.


let counter = 0;

const increaseNumberByOne = () => {
    counter++;
    updateCounter();
}
const decreaseNumberByOne = () => {
    counter--;
    updateCounter();
}
const updateCounter = () => {
    document.getElementById("counter").innerHTML = counter;
}
updateCounter();