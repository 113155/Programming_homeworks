"use strict";
module.exports = {double, times100, myMap };

// Number 1

function double(number){
    let doub = number * 2;
    return doub; 
}
// console.log(double(3));

// Number 2
function times100(number){
    let tim100 = number * 100;
    return tim100; 
}
// console.log(times100(3));

// Number 3

function myMap(testArray,func){
    let newArr = [];
    testArray.forEach(function(element){
        newArr.push(func(element))
    })   
    return newArr;
}
// console.log(myMap([-10, 0, 10, 20],times100));
// console.log(myMap([-10, 0, 10, 20],double));


// Number 4


