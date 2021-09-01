// Number 1
let salesPercentage;
let salesAmount;

function computeSalesCommission(salaried, salesAmount){
    if (salaried) {
        if (salesAmount < 300){
            salesPercentage = 0;
        } else if (salesAmount >= 300 && salesAmount < 500){
            salesPercentage = 1/100;
        }
        else {
            salesPercentage = 2/100;
        }
    }
    else if (!salaried) {
        if (salesAmount >= 300 && salesAmount < 500){
            salesPercentage = 2/100;
        }
        else if (salesAmount > 500) {
            salesPercentage = 3/100;
        }
    }
    let salesCommission = salesAmount * salesPercentage;
    return salesCommission;
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 70: ", computeSalesCommission(true, 3500));
console.log("expect 105: ", computeSalesCommission(false, 3500));

// Number 2
function compoundInterest(initialAmount, rate, numberOfYears){
    let balance = initialAmount * (Math.pow((1 + (rate/12)), (12 * numberOfYears)));
    return balance;
}
console.log("expect 110.47", compoundInterest(100, 0.1, 1));
console.log("expect 16470.09", compoundInterest(10000, 0.05, 10));

// Number 3

function calcDownpayment(cost){
    let deposit;
    let percentage;
    let lowerLimit;
    
    if (cost >= 0 && cost < 50000){
        deposit = 0;
        percentage = 5/100;
        lowerLimit = 0;
    }
    else if (cost >= 50000 && cost < 100000){
        deposit = 2500;
        percentage = 10/100;
        lowerLimit = 50000;
    }
    else if (cost >= 100000 && cost < 200000){
        deposit = 7500;
        percentage = 15/100;
        lowerLimit = 100000;
    }
    else {
        deposit = 5000;
        percentage = 10/100;
        lowerLimit = 200000;
    }
    
    let downPayment = deposit + (percentage * (cost - lowerLimit));
    return downPayment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 10000: ", calcDownpayment(250000));


// Number 4

//sumDigits Output 

function sumDigits(num){
    let sum = 0;
    do{
        sum += (num % 10);
        num = Math.floor(num/10);
    } while (num > 0)
    return sum;
}
console.log(sumDigits(102));

// //multDigits Output
console.log(multDigits(23));

function multDigits(num){
    let result = 1;
    do{
        result *= num % 10;
        num = Math.floor(num/10);
    } while (num > 0);
    return result;
}


// Number 5
let tempInCelsius;

function  convertFahrenheit(tempInFahrenheit){
    tempInCelsius = (parseFloat(tempInFahrenheit) - 32) * (5/9);
    return tempInCelsius;
}

console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));

// Number 6
let distance;
function calcDistance(x1, y1, x2, y2){
   distance = (Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2))))
   return distance;
}

console.log("expect 5 : ", calcDistance (0, 0, 5, 5));
