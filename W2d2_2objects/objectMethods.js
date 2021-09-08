"use strict";
let prompt = require("prompt-sync")();
// module.exports = {Accumulator, calculator};

// Number 1
let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        let mult = (this.a * this.b);
        return mult;
    },
    read() {
        this.a  = +prompt("Enter first value:  " );
        this.b  = +prompt("Enter second value:  " );
       
    }
   
  };
calculator.read();
console.log(( calculator.sum() ));
console.log(( calculator.mul() ));


// Number 2

function Accumulator (startingValue){
    this.value = startingValue;

    this.read = function(){
        let newNumber = +prompt("New number:  ");

        this.value += newNumber;
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
