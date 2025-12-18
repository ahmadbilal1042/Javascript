const { use } = require("react");

console.log("Code Mode On");

// Q26. Capitalize the first letter of a user’s name.

let username = "ahmad";

let capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalizeWord(username))

// Q27. Validate email by checking @ and .

let email = "ahmad@gmail.com";
let isMailValid = (mail) => {
    if (mail.includes("@") && mail.includes(".")) {
        console.log("Valid Mail")
    } else {
        console.log("Invalid Mail")
    }
}
isMailValid(email)

// Q28. Count total characters in a string.

let str = "Hello World";
console.log(str.length)

// Q29. Remove extra spaces from a sentence.

let intro = "   My name is Ahmad Bilal.   "
console.log(intro.trim());

// Q30. Extract the last part (slug) from a URL.

function lastWord(url) {
    let lastWord = url.split("-").pop();
    console.log(lastWord)
}
lastWord(document.URL)

