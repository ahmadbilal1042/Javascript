// Checks Password Length is greater 8 or greater.


const checkPassWord = () => {
    let checkAgain = true;
    while (checkAgain) {
        let password = prompt("Enter a valid Password");
        if (password.length > 7) {
            alert("Valid Password")
        } else {
            alert("invalid password")
        }
        checkAgain = confirm("Do you want to check again?")
    }
}
checkPassWord();