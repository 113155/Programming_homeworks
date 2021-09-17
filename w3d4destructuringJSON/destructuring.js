// Destructuring and Array methods homework

// Destructuring assignment
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false


// The maximal salary
/* Create the function topSalary(salaries) that returns the name of the top-paid
person.
If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs. */
let salaries = {
    "John": 100,
    "Jack": 300,
    "Pete": 300,
    "Mary": 250,
};
function topSalaries(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for( let [name, salary] of Object.entries(salaries)){
        if (maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log(topSalaries(salaries));

// JSON

// Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
  };

let user1 = JSON.stringify(user);
console.log(user1);
let user2 = JSON.parse(user1);
console.log(user2);

// Part 2: Array method practice

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}];

// map
// - double numbers
function doubleNumbers(){
    return numArray.map(item => 2 * item);
}
console.log(doubleNumbers());

// - double age
function doubleAge(){
    return peopleArray.map(person => person.age * 2);
}
console.log(doubleAge());

// filter
// - filter all even numbers
function getEvenNumbers(){
    return numArray.filter(num => num%2===0);
}
console.log(getEvenNumbers());

// - filter all age > 10
function filterAge(){
    return peopleArray.filter(people => people.age > 10);
}
console.log(filterAge());

// - find even, include even
function findEven(){
    return numArray.find(item => item%2===0);
}
console.log(findEven());

// - find age > 10, include age > 10
function findAge(){
    return peopleArray.find(people => people.age > 10);
}
console.log(findAge());

// Reduce
// - find sum of numbers
function sumNumbers(){
    return numArray.reduce((sum, current) => {return sum + current}, 0)
}
console.log(sumNumbers());

// - find average of numbers
function average(){
    return numArray.reduce((sum,current) => {return sum + current},0)/numArray.length;
}
console.log(average());

// - find max of numbers
function findMaxNumber(){
    return numArray.reduce((item,current) => Math.max(item,current), 0);
}
console.log(findMaxNumber());

//  - find max for ages
function findMaxAge(){
    let arr = peopleArray.map(person => person.age);
    return arr.reduce((item,current) => Math.max(item , current), 0);
}
console.log(findMaxAge());


//  - use a chain of map filter reduce to find the average age of people with even
//  number ages
function averageEven(){
    let arr1 = peopleArray.map(item1 => item1.age).filter(item2 => item2%2===0);
    let arr2 = arr1.reduce((sum, current) => sum + current, 0)/arr1.length;
    return arr2;
}
console.log(averageEven());


// - use a chain of map filter reduce to find the average age of people with odd 
// number ages
function averageOdd(){
    let arr1 = peopleArray.map(item1 => item1.age).filter(item2 => item2%2!==0);
    let arr2 = arr1.reduce((sum, current) => sum + current, 0)/arr1.length;
    return arr2;
}
console.log(averageOdd());
