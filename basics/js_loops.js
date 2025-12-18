// Q21. Print numbers from 1 to 100 using a loop.

const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(100)


// Q22. Calculate total sum of array values using a loop.

let priceOfItemsInCart = [1, 2, 3, 4, 5, 6, 7, 8];

const totalCartValue = (arr) => {
    let total = 0;
    for (oneItemPrice of arr) {
        total += oneItemPrice;
    }
    return total;
}
totalCartValue(priceOfItemsInCart);

// Q23. Print multiplication table of any number.

const printTable = (n) => {
    for (let i = 1; i <= 10; i++) {
        let result = i * n
        console.log(`${n} * ${i} = ${n * i}`)
    }
}
printTable(5)

// Q24. Reverse a string using a loop.

let username = "ali";
function usernameReverse(username) {
    let arr = username.split("");
    let reverseUsername = arr.reverse().join("");
    console.log(reverseUsername)
}

usernameReverse(username);

// Q25. Stop a loop when a specific value is found.

function findFive() {
    for (let i = 1; i < 100; i++) {
        if (i == 5) {
            return;
        }
        console.log(i);
    }
}
findFive()

