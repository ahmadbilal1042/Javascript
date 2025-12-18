console.log("Code Mode on");

// Q31. Convert string "4500" into a number.

let str = "4500";
let strToNumber = Number(str);
console.log(typeof strToNumber);

// Q32. Round a price to two decimal places.

let priceOfItem = 14.832434;
let roundedPrice = priceOfItem.toFixed(2);
console.log(roundedPrice);

// Q33. Generate a random 6-digit OTP

function generateOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        otp += String(randomNumber);
    }
    console.log(otp)

}
generateOTP()

// Q34. Check whether a value is a valid number.

let n = parseInt(prompt("Enter a number"));

if (isNaN(n)) {
console.log("Invalid Number")
} else {
    console.log("Valid Number")
}

// Q35. Handle a calculation that results in NaN.


let marks = parseInt(prompt("Enter a number"));

if (isNaN(marks)) {
alert("No Invalid marks")
} else {
    alert("Calculation is continued")
}