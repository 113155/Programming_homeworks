
// 1. 
let prompt = require('prompt-sync')();
let saleman = prompt('Enter salaried or not salaried: ')
let sales = prompt('Enter sales value: $   ')
let salesPercentage;

if (saleman === 'salaried'){

    if (sales < 300){
        salesPercentage = 0;
    } else if (sales > 300 && sales < 500){
        salesPercentage = 1/100;
    }
    else {
        salesPercentage = 2/100;
    }
}
else if (saleman === 'not salaried'){
    
    if (sales > 300 && sales < 500){
        salesPercentage = 2/100;
    }
    else if (sales > 500) {
        salesPercentage = 3/100;
    }
    
}
let salesCommission = sales * salesPercentage;
console.log(salesCommission);



// 2.
let prompt = require('prompt-sync')();
let age = prompt("Enter age:  ");

while (age < 18){
    age = prompt("Enter age:  ");
}

let age;
do {

    age = prompt("Enter age:  ");
} while (age < 18);

// 3. 
let prompt = require('prompt-sync')();
let initialAmount = prompt("Enter initial amount:  ");
let rate = prompt("Enter Annual Interest Rate:  ");
let numberOfYears = prompt("Enter Number of years:  ");
let balance;

balance = initialAmount * (Math.pow((1 + (rate/(1/12)), ((1/12) * numberOfYears))));
console.log(balance);


// 4. 
for (i = 1; i <= 5; i++){
    let str = '';
    for (j = 1; j <= 5; j++){
        str += j
    }
    
    console.log(str);
}

for (i = 1; i <= 5; i++){
    let str = '';
    for (j = 1; j <= i; j++){
        str += i

    }
    
    console.log(str);
}

for (i = 5; i > 0; i--){
    let str = '';
    for (j = 1; j <= i; j++){
        str += i

    }
    
    console.log(str);
}


// 5. 
let prompt = require('prompt-sync')();
let cost = prompt("Enter Cost of House:$     K");

let deposit;
let percentage;
let lowerLimit;
let downPayment = deposit + (percentage * (cost - lowerLimit));

if (cost >= 0 && cost < 50){
    deposit = 0;
    percentage = 5/100;
    lowerLimit = 0;
}
else if (cost >= 50 && cost < 100){
    deposit = 1000;
    percentage = 10/100;
    lowerLimit = 50;
}
else if (cost >= 100 && cost < 200){
    deposit = 2000;
    percentage = 15/100;
    lowerLimit = 100;
}
else {
    deposit = 5000;
    percentage = 10/100;
    lowerLimit = 200;
}
console.log(downPayment);


// 6. 
let prompt = require('prompt-sync')();
let num = prompt("Enter number:  ");

let sum = 0;
do {
    sum += num % 10;
    num = Math.floor(num/10);
}
while (num > 0)

console.log(sum);