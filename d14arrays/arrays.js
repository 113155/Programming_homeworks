module.exports = {maxOfThree, sum, multiply,findLongestWord,reverseArray,reverseArrayInPlace, scoreExams};
// Number 1
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    let maxValue = 0;
    if (a > b){
        maxValue = a;
    } else {
        maxValue = b;
    }
    if (c > maxValue){
        maxValue = c;
    } 
    return maxValue;
}


// console.log(maxOfThree(-1,-3,-20));

// Number 2(a)
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */

 function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}

//console.log(sum([1,2,3,4]));

// Number 2(b)

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot *= number;
    }
    return tot;
}
// console.log(multiply([1,2,3,4]));


// Number 3
/**
 * 
 * @param {Array} arr1 of strings
 * @returns longest string
 */
function findLongestWord(arr1){
    let longestLength = 0;
    for (i = 0; i < arr1.length; i++){
        if(arr1[i].length > longestLength){
            longestLength = arr1[i].length;
        }
    }
    return longestLength;

}
//console.log(findLongestWord(['hey', 'hello', 'hey you']));




// Number 4 
/**
 * 
 * @param {Array} array1 of elements
 * @returns new array with elements reversed
 */
// function reverseArray
function reverseArray(array1){
    let array2 = [];
    for (i = 0; i < array1.length; i++){
        array2.unshift(array1[i]); 
    }
    return array2;
}
// console.log(reverseArray(['A', 'B', 'C']));



//function reverseArrayInPlace
/**
 * 
 * @param {Array} arr3 of elements
 * @returns same array with elements reversed
 */
function reverseArrayInPlace(arr3){
    let arr4 = arr3;
    for (i = 0; i <= Math.floor(arr3.length - 1)/2; i++){
        let element = arr3[i];
        arr3[i] = arr4[arr4.length - i - 1];
        arr4[arr4.length - i - 1] = element;
    }
    return arr4;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
// console.log(arrayValue); 




// Number 5
// let correctAnswers = [3,1,2,4];
/**
 * 
 * @param {Array} studentAnswers of numbers
 * @param {Array} correctAnswers of numbers
 * @returns an array of student's score
 */
function scoreExams(studentAnswers, correctAnswers){
    let corr = [];
    for (const answers of studentAnswers){
        let count = 0;
        for(let i = 0; i < answers.length; i++){
                if (answers[i] === correctAnswers[i]) {
                    count += 1;
                }
        } 
        corr.push(count);
    }
    return corr;
}
//console.log(scoreExams([[1,1,2,4], [2,1,2,2], [3,1,3,4]], [3,1,2,4]));

