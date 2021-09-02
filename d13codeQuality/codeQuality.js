module.exports={isVowel, computeSalesCommission, calcDownpayment, convertFahrenheit, calcDistance};

// Number 1
/**
 * 
 * @param {*} vowel 
 * @returns 
 */
function isVowel(vowel){

    if ( vowel === 'a' || vowel === 'e' || vowel === 'i' ||vowel === 'o' ||vowel === 'u'){
        return true;
    }
    else return false;
}

/**
 * 
 * @param {Boolean} salaried 
 * @param {Number} salesAmount 
 * @returns
 */


// Number 2

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


// Number 3

// Number 4(a)
/**
 * 
 * @param {Number} cost 
 * @returns 
 */

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




// Number 4(b)
/**
 * 
 * @param {Number} tempInFahrenheit 
 * @returns 
 */

function  convertFahrenheit(tempInFahrenheit){
    let tempInCelsius;
    tempInCelsius = (parseFloat(tempInFahrenheit) - 32) * (5/9);
    return tempInCelsius;
}


// Number 4(c)
/**
 * 
 * @param {Number} x1 
 * @param {Number} y1 
 * @param {Number} x2 
 * @param {Number} y2 
 * @returns 
 */

function calcDistance(x1, y1, x2, y2){
    let distance;
   distance = (Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2))))
   return distance;
}
