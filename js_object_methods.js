// Task 1: Create a JavaScript object named student with properties name, age, and course. Display each property separately using dot notation and store the result in a variable.

const student = {
    name: "Ahmad",
    age: 23,
    course: "Maths"
}

const displayStudentDetails = (obj) => {
    let studentName = obj.name;
    let studentAge = obj.age;
    let studentCourse = obj.course;
    document.getElementById("student1").innerHTML = ` ${studentName} \n ${studentAge}\n ${studentCourse}`;
}

displayStudentDetails(student);

// Task 2: Using the same student object, display all values using a for..in loop. Explain why bracket notation is required inside the loop.


const studentAllDetails = (student) => {
    let details = "";
    for (let x in student) {
        details += `${student[x]}\n`;
    }
    document.getElementById("student2").innerText = details;
}
studentAllDetails(student);

// In this case it is a refrence, if we use dot notation it will try to find the property name for that like if we say student.x then it will find propert of x name within the student object.

// Task 3: Convert the student object values into an array using Object.values(). Then convert that array into a readable string and display it.

let studentArray = Object.values(student);
document.getElementById("student3").innerText = studentArray;

// Task 4: Use Object.entries() on an object containing at least three key-value pairs. Loop through it and display both keys and values in the format: key : value.

const displayEntries = (obj) => {
    let text = "";
    for (let [key, value] of Object.entries(obj)) {
        text += `${key} : ${value}<br>`
    }
    document.getElementById("student4").innerHTML = text;
}
displayEntries(student);

// Task 5: Convert a JavaScript object into a JSON string using JSON.stringify(). Display the output and explain the difference between the original object and the stringified result.

let newJSON = JSON.stringify(student);
document.getElementById("student5").innerHTML = newJSON;

// JSON format is used for mostly fetching data using API's and understandable at global standards