// this is a comment

// this was used before 2015
var oldUse;
oldUse = "Try not to use it!";

console.log("old Use: " + oldUse);

/* ways to run JS files:
1. in the terminal. it could be the system terminal or VS terminal. to run the code we should be standing in the folder of the file and write in the terminal:
    node fileName.js
     
2. in VS code, with Run without Debugging

3. in the browser. but to be able to do that, we need an html file. after linking the script to the html, we use the developer tools and go to the console to see our console.logs.
*/

// we use this one from 2015:
let newVariable = "I can change in time";

const myValueWillNotChange = "You are stuck with me!";

console.log("newVariable: " + newVariable);
console.log("myValueWillNotChange: " + myValueWillNotChange);

console.log("Data Types");

// Booleans:
const myBoolean = false;

console.log("myBoolean: " + myBoolean);

// Strings;
const myString = "Is this a string? 129";

console.log("myString: " + myString);

// Numbers:
const myNumber = 123;

console.log("myNumber: " + myNumber);

// BigInt
const myBigInt = 3000n;
console.log("myBigInt: " + myBigInt);

// null
const myNull = null;
console.log("myNull: " + myNull);

// Array
const myArray = ["Element 1", 2, "Element 3", false, 5];
console.log("myArray: " + myArray);

// objects
const myObject = {
  cohortName: "Coriander",
  amountStudents: 16,
  academy: "Spiced",
  knowsJs: true,
};
console.log("myObject: ", myObject);
