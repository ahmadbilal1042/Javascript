// Problem 1: Factorial Calculator
// Write a function factorial(n) that returns the factorial of a given number n .

const factorial = (n) => {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    console.log(total)
}
factorial(10);

// Problem 2: Reverse a String
// Write a function reverseString(str) that returns the reversed version of the input string.

let str = "Ahmad";

function reversStr(str) {
    let newStr = str.split("").reverse().join("");
    console.log(newStr)
}
reversStr(str)

// Problem 3: Prime Checker
// Write a function isPrime(num) that returns true if num is a prime number, otherwise false .

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};

// Problem 4: Count Vowels
// Write a function countVowels(str) that counts and returns the number of vowels in a string.

function countVowels(str) {
    let vowelCount = 0;
    let arr = Array.from(str.toLowerCase());
    for (vowel of arr) {
        if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
            vowelCount++;
        }
    }
    return vowelCount;
}

// Second method

function checkAEIOU(strr) {
    let newstr = strr.toLocaleLowerCase().split("").filter(e => e == "a" || e == "e" || e == "i" || e == "o" || e == "u").join("")
    return newstr.length;
}
let sentence1 = "JavaScript is easy to learn";
console.log(checkAEIOU(sentence1));

// Problem 5: Largest Number in Array
// Write a function largestNumber(arr) that returns the largest number in an array

function largestNumber(arr) {
    let max = 0;
    for (n of arr) {
        if (n > max) {
            max = n;
        }
    }
    return max;
};

// Alternate Method

console.log(Math.max(...arr));

// Problem 6: Remove Duplicates
// Write a function removeDuplicates(arr) that removes duplicate elements from an array and
// returns the new array.

let fruits = ["apple", "banana", "apple"];

function removeDuplicates(arr) {
    let newArr = [];
    for (e of arr) {
        if (!newArr.includes(e)) {
            newArr.push(e)
        }
    }
    return newArr;
}
// removeDuplicates(fruits)

// Alternate method

let uniqueElementArray = [...new Set(fruits)]
console.log(uniqueElementArray)

// Problem 7: Currency Formatter
// Write a function formatCurrency(amount) that returns a string formatted as currency, e.g.,
// $1,234.00 .

let amount = 1234;
function formatCurrency(amount) {

    let stringAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
    return stringAmount;
}
formatCurrency(amount);

// Problem 8: Password Validator
// Write a function validatePassword(password) that checks if a password: - Has at least 8 characters
// - Contains at least one uppercase letter
// 1
// - Contains at least one number
// Return "Valid" if all conditions are met, otherwise "Invalid" .
let password = "Root999@";
function validatePassword(password) {
    if (password.length < 8) {
        return "Invalid Password! Lentgh Issue"
    }
    if (!password.match(/[A-Z]/)) {
        return "Invalid Password! No capital case"
    }
    if (!password.match(/[0-9]/)) {
        return "Invalid Password! No Digit"
    }
    return "Valid Password"
}

// Problem 9: Shopping Cart Total with Discount
// Given an array of cart items with name, price, and quantity, write a function
//  cartTotal(cart) that calculates the total price after applying a 10 % discount



const cartItems = [
    { name: "Vitamin C Serum", price: 2499, quantity: 1 },
    { name: "Anti-Acne Face Wash", price: 1299, quantity: 2 },
    { name: "Hydrating Moisturizer", price: 1999, quantity: 1 },
    { name: "Sunscreen SPF 50", price: 1599, quantity: 3 },
    { name: "Night Repair Cream", price: 2799, quantity: 1 }
];
const cartTotal = (items) => {
    let totalPrice = 0;
    let discount = 0.9;
    for (let i = 0; i < items.length; i++) {
        totalPrice += (items[i].price * items[i].quantity);
    }
    return ((totalPrice * discount).toFixed(2));
}
cartTotal(cartItems)

// Problem 10: Fibonacci Sequence
// Write a function fibonacci(n) that returns an array containing the first n numbers in the Fibonacci
// sequence

let n = 15;

const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        let e = (Number(fib[i - 1]) + Number(fib[i - 2]));
        if (e == n) {
            return;
        }
        fib.push(e)
    };
    return fib;
}
fibonacci(n)