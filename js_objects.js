// JavaScript Objects - Real Life Usage Test Cases


// Question 1 – Employee Records 
// A company stores employee information in an object. Each employee has name , id , department , and salary properties. 
// Task: Create an object for an employee named “Ali” with ID 101 , department IT , and salary 50000 . Then, write a method getDetails() that returns the employee’s name and department as a string.

const employee = {
    name: "Ali",
    id: "101",
    department: "IT",
    salary: "50000"
};

function getDetails(person) {
    return `${person.name} with userid ${person.id} works in ${person.department} and has ${person.salary}`
}

getDetails(employee)

// Question 2 – Shopping Cart 
// A shopping cart object stores products. Each product has productName , price , and quantity properties. 
// Task: Create a cart object for a product “Laptop”, price 1200 , quantity 2 . Write a method totalPrice() that calculates the total price of the product in the cart.

const product = {
    name: "Laptop",
    price: 1200,
    quantity: 2
}

function totalPrice(item) {
    return `You have ordered ${item.quantity} ${item.name} and the total is ${item.price * item.quantity}`
}

totalPrice(product)

// Question 3 – Student Grades 
// A student object stores a student’s name , rollNumber , and grades (an array of numbers). 
// Task: Create a student object with name “Sara”, roll number 12 , and grades [80, 75, 90] . Write a method averageGrade() to calculate the student’s average grade.

const student = {
    name: "Sara",
    roll_number: 12,
    grades: [80, 75, 90]
}

function averageGrade(person) {
    let averageMarks;
    let totalMarks = 0;
    for (let i = 0; i < person.grades.length; i++) {
        totalMarks += person.grades[i];
    }
    averageMarks = totalMarks / person.grades.length;
    return Math.round(averageMarks);
}

averageGrade(student)

// Question 4 – Bank Account 
// A bank account object has properties accountNumber , accountHolder , and balance . 
// Task: Create an account object for “Ahmed” with account number 555123 and balance 10000 . Write methods deposit(amount) and withdraw(amount) to update the balance. Make sure withdraw doesn’t allow the balance to go negative.

const ahmad = {
    accountNumber: 555123,
    balance: 10000
}

function deposit(customer, amount) {
    customer.balance += amount;
    return `Your new balance is ${customer.balance}`
}
function withdraw(customer, amount) {
    customer.balance -= amount;
    return `Your remaining balance is now ${customer.balance}`
}

deposit(ahmad, 1000);
withdraw(ahmad, 2000)

// Question 5 – Library Book 
// A library book object contains title , author , year , and available (boolean) properties. 
// Task: Create a book object for “JavaScript Basics” by “John Doe”, published in 2022 , and set available to true . Write a method borrowBook() that changes available to false , and returnBook() that changes it back to true .

const book = {
    title: "JS Basics",
    author: "John",
    year: 2022,
    availability: true
}

function borrowBook(book) {
    book.availability = false;
    return book;
}
function returnBook(book) {
    book.availability = true;
    return book;
}


// Create a student object that includes firstName, lastName, age, grades (array), a nested contact object with email and phone, and a nationality property with default value "Pakistani". Access and print the student’s full name using both dot and bracket notation, then add a new property city and delete the age property. Finally, access the student’s phone number from the nested contact object and calculate the average of the grades array to display it. This single task combines property access, adding/deleting properties, nested objects, and working with arrays inside objects.

const studentObj = {
    firstName: "Ahmad",
    lastName: "Bilal",
    age: 23,
    grades: [23, 23, 23],
    contact: {
        email: "ahmad@gmail.com",
        phone: +923056728919
    },
    nationality: "Pakistan"
}

console.log(`Name is ${studentObj.firstName} ${studentObj.lastName}.`)
console.log(`Name is ${studentObj["firstName"]} ${studentObj["lastName"]}.`);
studentObj.city = "Lahore";
delete studentObj.age;
console.log(studentObj);
function averageNumber(student) {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
        sum += student.grades[i]
    }
    return sum / student.grades.length;
}

console.log(averageNumber(studentObj))


studentObj.fullName()


// Create a user object with properties firstName, lastName, and email. Add a method getFullName() that returns the full name using this, and another method getUpperCaseName() that returns the full name in uppercase using a JavaScript string method. Then, access and print the result of both methods by calling them with parentheses, and also log what happens when you access one of the methods without parentheses.

const user = {
    firstName: "Ali",
    lastName: "Haider",
    email: "ali@gmail.com",
}

user.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
user.getUpperCaseName = function () {
    let name = `${this.firstName} ${this.lastName}`
    return name.toUpperCase();
}

console.log(user.getFullName())
console.log(user.getFullName)
console.log(user.getUpperCaseName())
console.log(user.getUpperCaseName)

// Problem 1 – Display Object Properties Manually

// Create a person object with properties name, age, and city. Display all property values in a single string by accessing each property individually (not using loops or built-in object methods).


const user1 = {
    name: "Ali",
    age: 23,
    city: "Lahore"
}
console.log(`${user1.name} ${user1.age} ${user1.city}`)

// Problem 2 – Display Object Using Loop

// Create a student object with properties name, rollNumber, and grade. Use a for...in loop to collect and display all property values in one string. Make sure you access properties correctly using bracket notation.


const student1 = {
    name: "Ali",
    rollNumber: 23,
    grade: "A"
}
for (let value in student1) {
    let text = student1[value];
    console.log(text)
}


// Problem 3 – Display Object Using Built-in Methods
// Create a product object with properties title, price, and category.
// Convert the object values into an array using Object.values() and display them as a string.
// Convert the entire object into a JSON string using JSON.stringify() and display the result.

const product1 = {
    title: "title",
    price: 2000,
    category: "Jin"
}
let objArray = Object.values(product1)
console.log(objArray.toString());

