// Q6. Store a user’s name, age, and login status in variables and display them.

let name = "Ali", age = 23, loginStatus = true;


document.getElementById("box1").innerHTML = name;
document.getElementById("box2").innerHTML = age;
if (loginStatus) {
    document.getElementById("box3").innerHTML = "Loggedin";

}

// Q7. Declare a constant tax rate using const and attempt to change its value.

const taxRate = 10;
// taxRate = 20;  // Error Cant Change const
// console.log(taxRate) //Uncaught TypeError: Assignment to constant variable. (Throws Error)

// Q8. Store a cart total in a variable, update the value, and display the result.

let item1Price = 100;
let item2Price = 200;
let cart = item1Price + item2Price;
console.log(cart)
cart *= 2
console.log(cart)

// Q9. Swap the values of two variables without using a third variable.

let a = 1;
let b = 2;
let z = a;
b = z;
console.log("1st", b)
b = 2;
z = b;
a = z;
console.log("2nd", a)


// Q10. Show the difference between var and let scope with an example.


// Scope eaxample for var

var a = 2;
console.log("First", a)
{
    var a = 6;
    console.log("Inside Scope", a)
}
console.log("Outside Scope", a)


// Scope example for let

let a = 2;
console.log("First", a)
{
    let a = 6;
    console.log("Inside Scope", a)
}
console.log("Outside Scope", a)

// Scope example for const

const a = 2;
console.log("First", a)
{
    const a = 6;
    console.log("Inside Scope", a)
}
console.log("Outside Scope", a)