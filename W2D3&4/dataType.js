"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {ucFirst, getMaxSubSum, truncate , camelize, checkSpam, extractCurrencyValue}; 

let prompt = require("prompt-sync")();

/* Sum numbers from the visitor*/

let a = +prompt("Enter the first number:  ");
let b = +prompt("Enter the second number:  ");
console.log(a + b);

// Repeat until the input is a number

// /*Do this in the Plunker sandbox OR implement it in VSCode and node. In the node
// implementation your readNumber function should take an array of strings as input and
// return the first element of the array that is a regular number in a string. E.g., ‘123’,
// ’12.3’ are ok, ‘123abc’ is not ok. Write a Mocha test that tests against the array [‘abc’,
// ‘123a’, ‘ab123’, ‘123.3’, ‘123’]*/

/**
 * 
 * @param {Object} arr 
 * @returns 
 */
function readNumber(arr) {
    let result = "";
    for (let num of arr){
        if (isFinite(num)){
            return result += num;
        }
    }
}
// console.log(`Number is: ${readNumber(['abc','123a', 'ab123', '123.3', '123']) }`);
// console.log(typeof readNumber(['abc','123a', 'ab123', '123.3', '123']));



/*A random number from min to max*/
/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function random(min, max){
    return min + Math.random() * (max - min);
}
// console.log(random(1,5));

// /* A random integer from min to max*/
/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function randomInteger(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

  }

// console.log(( randomInteger(1, 3) ));


// // Strings
// // Uppercase the first character
/**
 * 
 * @param {String} str 
 * @returns 
 */
function ucFirst(str) {
    let uppCase = (str.charAt(0).toUpperCase()) + (str.slice(1));
    return uppCase;
  }
// console.log(ucFirst("john")); 

// Check for spam
/**
 * 
 * @param {String} str 
 * @returns Boolean
 */
function checkSpam(str) {
    let lowercaseStr = str.toUpperCase();
    return lowercaseStr.includes("VIAGRA") || lowercaseStr.includes("XXX");
 }


// Truncate the text
/**
 * 
 * @param {String} str 
 * @param {Number} maxlength 
 * @returns 
 */
function truncate(str, maxlength) {
    let ellipsisCha = "…";
    if (str.length >= maxlength){
        return str.slice(0,(maxlength-1)) + ellipsisCha;

    }
    return str;
}
// console.log(truncate("Hey, how are you today?", 10));


// Extract the money
/**
 * 
 * @param {string} str 
 * @returns number
 */
function extractCurrencyValue(str) {
    return +str.slice(1);
}
// console.log(extractCurrencyValue("$120"));


// Arrays
/**
 * 
 * @returns number
 */
function sumInput(){
    let array = [];
    while (true){
        let inputVal = prompt("Enter value: ");
        if(inputVal === "" || inputVal === null || !isFinite(inputVal)) break;

        array.push(+inputVal);
    }

    let sum = 0;
    for (let num of array){
        sum += num;
    }
    return sum;
}
// console.log(sumInput());

// A maximal subarray

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));


/**
 * 
 * @param {string} str 
 * @returns string without dashes
 */
function camelize(str) {
    let array = str.split("-");
    return array.reduce(function(finalStr, current, index){
        if(index==0)
        return current;
        return finalStr + ucFirst(current);
    }, "");
    }

console.log(camelize("background-color"));

// Filter range
/**
 * 
 * @param {Object} arr 
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered ); 
  console.log( arr );



// Filter range "in place"
/**
 * 
 * @param {Object} arr 
 * @param {Number} a 
 * @param {Number} b 
 */
  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); 
  console.log( arr ); 


// Sort in decreasing order

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
// console.log( arr );


// Copy and sort array
function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
//   console.log( sorted );
//   console.log( arr );

// Create an extendable calculator
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
// console.log(calc.calculate("3 + 7"));


// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item => item.name);
// console.log( names ); 

// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
// console.log( usersMapped[0].id ); 
// console.log( usersMapped[0].fullName );


// Sort users by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
//  console.log(arr[0].name); // John
//  console.log(arr[1].name); // Mary
//  console.log(arr[2].name); // Pete

// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
//   console.log(arr);


// Get average age
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [ john, pete, mary ];
//   console.log( getAverageAge(arr) );

// Filter unique array members
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  console.log( unique(strings) );

  
// Create keyed object from array
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }


