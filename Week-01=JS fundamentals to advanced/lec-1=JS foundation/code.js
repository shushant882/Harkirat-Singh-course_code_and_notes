// var a = 1;
// a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 9;
// // c = 7;
// console.log(c);

// let firstName = "Sarthak";
// let age = 19;
// let isMarried = false;

// console.log("My name is " + firstName + " and my age is " + age);

// if (isMarried) {
//     console.log(firstName + "is married");
// }
// else {
//     console.log(firstName + "not married")
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Program-0 Print sum of all numbers from 1 to n using for, while, do-while loops

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Using a for loop
// var totalSum = (n) => {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     console.log(ans);
// }

// // Using a while loop
// var totalSum2 = function (n) {
//     let ans = 0;
//     let i = 1;
//     while (i <= n) {
//         ans += i;
//         i++;
//     }
//     console.log(ans);
// }

// // Using a do-while loop
// var totalSum3 = (n) => {
//     let ans = 0;
//     let i = 1;
//     do {
//         ans += i;
//         i++;
//     } while (i <= n);
//     console.log(ans);
// }

// // Using a for...in loop (not recommended for arrays or similar structures)
// var totalSum4 = (n) => {
//     let ans = 0;
//     for (let i in Array.from({ length: n }, (_, index) => index + 1)) {
//         ans += parseInt(i) + 1;
//     }
//     console.log(ans);
// }

// // Using a for...of loop (recommended for arrays and iterable objects)
// var totalSum5 = (n) => {
//     let ans = 0;
//     for (let value of Array.from({ length: n }, (_, index) => index + 1)) {
//         ans += value;
//     }
//     console.log(ans);
// }

// // Using Array.reduce()
// var totalSum6 = (n) => {
//     let ans = Array.from({ length: n }, (_, index) => index + 1).reduce((sum, value) => sum + value, 0);
//     console.log(ans);
// }

// rl.question('Enter a number: ', (answer) => {
//     let n = parseInt(answer);
//     totalSum(n);
//     totalSum2(n);
//     totalSum3(n);
//     totalSum4(n);
//     totalSum5(n);
//     totalSum6(n);
//     rl.close();
// });


// Program-1 Write a program that greets a person given their first and last name

// const greet = function(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// greet("Sarthak", 'Sachdev');

// Program-2 Write a program that greets a person based on their gender.

// const greet = (gender)=>{
//     if(gender === "male")
//     {
//         console.log("Hello male person");
//     }
//     else
//     {
//         console.log("Hello female person");
//     }
// }

// greet("male");

// Program-3 Write a program that counts from 0-1000 and prints all of these numbers.

// for(let i = 0; i <= 1000; i++)
// {
//     console.log(i);
// }

// Program-4 Write a program that prints all even numbers in an array.

// const value  = [1,2,3,41,51,6,71,81,9,10];
// for(let i in value)
// {
//     if(value[i] % 2 === 0)
//     {
//         console.log(value[i]);
//     }
// }

// Program-5 Write a program that can print the biggest number in an array.

// let largest = Number.MIN_SAFE_INTEGER;
// const arr = [19,24,33,34,5,16,72,86,98];
// for(i in arr)
// {
//     if(arr[i]>largest)
//     {
//         largest = arr[i];
//     }
// }

// console.log(largest);

// Program-6 Write a program that prints all the male people's first name given a complex object.

// const complexObject = {
//     states: {
//         Haryana: { Chandigarh: { males: { firstName: ["Raghu", "Surya", "Shailendra"] } } },
//         Punjab: { Moga: { males: { firstName: ["Jassi", "Raunak"] } } },
//         Rajasthan: {
//             Udaipur: { males: { firstName: ["Saket", "Saurabh"] } },
//             Pratapgarh: { males: { firstName: ["Abhinav"] } }
//         },
//         Karnataka: {
//             Bangalore: { males: { firstName: ["Harkirat"] } },
//             Bengaluru: { males: { firstName: ["Akshat", "Sidhant"] } }
//         }
//     }
// };

// function printMaleFirstNames(complexObject) {
//     for (const state in complexObject.states) {
//         const stateObj = complexObject.states[state];
//         for (const city in stateObj) {
//             const cityObj = stateObj[city];
//             if (cityObj.males && cityObj.males.firstName) {
//                 const maleNames = cityObj.males.firstName;
//                 console.log(`Male names in ${city}, ${state}: ${maleNames.join(", ")}`);
//             }
//         }
//     }
// }

// // Calling the function with the provided complex object
// printMaleFirstNames(complexObject);  

// Program-7 Write a program that reverses all the elements of an array

// const reverse = function(str) {
//     let finalstr = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         finalstr.push(str[i]);
//     }
//     return finalstr.join('');
// }

// const arr = ["Harkirat", "Singh", "javascript", "course"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(reverse(arr[i]));
// }

// we can also use these methods to reverse the string:-

/*
const reverse = function(str) {
    return Array.from(str).reverse().join('');
};

const reverse = function(str) {
    return str.split('').reverse().join('');
};

lastly we can also do that by initializing an empty string and adding characters to it
*/

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const personArray = ["Sarthak", "Harkirat", "Sanjay"];

// const arraySize = personArray.length;

// console.log(personArray[0] + " is best friend of " + personArray[1]);

// personArray.push("Abhay");
// personArray.push("Saurabh");

// console.log(personArray[3]);
// console.log(arraySize);

// const UpdatedArraySize = personArray.length;

// console.log(UpdatedArraySize);
// As updating the previous arraySize will throw error but adding removing changing values of const array doesn't give error

// const allUsers = [
//     {
//         firstName: "Sarthak",
//         lastName: "Sachdev",
//         metadata: [
//             {
//                 age: 21, // here metadata is an array of objects and not an object in itself but an array
//             },
//         ],
//         gender: "male",
//     },
//     {
//         firstName: "Harkirat",
//         lastName: "Singh",
//         gender: "female",
//     },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i]["gender"] == "male") {
//         console.log(`${allUsers[i]["firstName"]} is male`);

//         // Check if metadata exists before accessing age property
//         if (allUsers[i]["metadata"] && allUsers[i]["metadata"][0]["age"] !== undefined) {
//             console.log(allUsers[i]["firstName"] + " is male and " + allUsers[i]["metadata"][0]["age"] +" is his age");
//         } else {
//             console.log(`${allUsers[i]["firstName"]} is male, but age is not available`);
//         }
//     }
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Q1 Write a function that finds sum of 2 numbers

// const sum = function(a,b)
// {
//     return a + b;
// }

// console.log(sum(2,4));

// Q2 Write a function that takes this sum and prints it in passive tense

// function sum(num1, num2, fnToCall)
// {
//     return num1 + num2;
// }

// function displayResult(result)
// {
//     console.log("Result of sum is: " + result);
// }

// function displayResultInPassive(data)
// {
//     console.log("Sum's result is: " + data);
// }

// // If we are only allowed to call one function after this and we don't know which function user will call that is why we add callbacks(fnToCall) in our function to do this:-

// const ans = sum(1,2,displayResultInPassive);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// let sum = 0;

// for (let i = 0; i < 1000000000; i++) {
    //     sum += i;
// }

// console.log(sum); // bounty question

// first way of calling functions

// var bro1 = function(a,b){
    //     return a + b;
    // }
    
    // console.log(bro1(2,5));
    
    // second way of calling functions
    
    // var bro2 = (a,b) =>{
        //     return a + b;
        // }

        // third way

// var bro3 = new Function('a', 'b', 'return a + b');

// fourth way

// var obj = {
    //     bro4: function(a, b) {
        //         return a + b;
//     }
// };

// console.log((String)(bro1(4,6)) + " " + (String)(bro2(7,4)) + " " + (String)(bro3(3,6)) + " " + (String)(obj(obj.bro4(8, 9)))); // or you can also call bro4 using obj["bro4"](8,9)

// var bro3 = new Function('a', 'b', `
// This is a more complex function
//     var result = a * b;
//     if (result > 10) {
//         return 'High';
//     } else {
    //         return 'Low';
    //     }
// `);

// // Example of calling the function
// console.log(bro3(4, 3)); // Output: 'Low'
// console.log(bro3(5, 3)); // Output: 'High'

// function calculation(a, b, arithmaticFunction) {
    //     const ans = arithmaticFunction(a, b)
//     return ans;
// }

// function sum(a,b){
    //     return a + b;
// }

// function sub(a,b){
    //     return a - b;
    // }
    
    // function mul(a,b,c){ 
        //     return a*b*c;
        // } // This function has been added to explain that this is not use-case of callbacks as we should know number of arguments and thus we will have to call mul function separately
        
        // const value = calculation(1,2,sum);
        // console.log(value);
        
// Some examples of callbacks are setTimeout function and setInterval function where we pass them a function and a time arguments and the function is run after that amount of time in setTimeout function and after every x interval of time till we stop the function in case of set Interval function

// ALERT!!!! Callback is not recursion, recursion is function calling itself but in case of callbacks we can call any function not specifically the same function(it might cause an error if we call the same function as it might go into an infinite loop of callbacks)


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Q1 Create a counter in Javascript(counts down from 30 to 0)

// for(let i = 30; i >= 0; i--)
// {
//     setTimeout(() => console.log(i), 1000*(30-i));
// }

// Q2 Create a terminal clock (HH:MM:SS)

const readline = require('readline');

function startClock(hours, minutes, seconds) {
    // Validate input
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        console.log("Invalid input. Please enter valid numbers for hours, minutes, and seconds.");
        return;
    }

    // Calculate total seconds from user input
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Function to format time with leading zeros
    function formatTime(value) {
        return value < 10 ? '0' + value : value;
    }

    // Function to update and display the clock
    function updateClock() {
        const currentHours = Math.floor(totalSeconds / 3600) % 24; // Handle rollover
        const currentMinutes = Math.floor((totalSeconds % 3600) / 60);
        const currentSeconds = totalSeconds % 60;

        // Print the formatted time
        process.stdout.write(`\r${formatTime(currentHours)}:${formatTime(currentMinutes)}:${formatTime(currentSeconds)}`);

        // Update total seconds and set the next update after 1 second
        totalSeconds++;
        setTimeout(updateClock, 1000);
    }

    // Start the clock
    updateClock();
}

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input for hours, minutes, and seconds
rl.question("Enter hours: ", (hours) => {
    rl.question("Enter minutes: ", (minutes) => {
        rl.question("Enter seconds: ", (seconds) => {
            // Start the clock with user input
            startClock(parseInt(hours), parseInt(minutes), parseInt(seconds));
            rl.close();
        });
    });
});

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// function findNestedEntry(obj, key) {
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             if (prop === key) {
//                 return obj[prop]; // Found the key, return its value
//             } else if (typeof obj[prop] === 'object') {
//                 const result = findNestedEntry(obj[prop], key);
//                 if (result !== undefined) {
//                     return result; // Found the key in a nested object, return its value
//                 }
//             }
//         }
//     }
//     // Key not found
//     return undefined;
// }

// we can use programs like these to find entries in nested complex objects using recursion and loops for each level