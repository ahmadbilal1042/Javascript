// Checks Password Length is greater 8 or greater.

let password = prompt("Enter a valid Password");
const checkPassWord = (password) => {

    if (password.length > 7) {
        alert("Valid Password")
    } else {
        alert("invalid password")
    }
    confirm("Do you wanna try again?");
    checkPassWord();
    return;
}