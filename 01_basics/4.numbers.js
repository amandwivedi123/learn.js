// ********* NUMBERS *********

let balance = 2353.12;

console.log(balance);e

 let toCon = balance.toString(); // converted string into number provides new number
 console.log(toCon.length); 
console.log(typeof toCon); 

console.log(balance.toFixed(2)) // .toFixed works only with numbers.

console.log(balance.toPrecision(5))  // precise value 

let localVal = 100000000;
console.log(localVal.toLocaleString("en-IN"))


// ********* Math ******

// Absolute  value   converts (-) into plus

let  num = -34.6;
console.log(Math.abs(num))
console.log(Math.round(num)) //  gives the round figure of value

console.log("Minimum value on 2,3,5,4,6,7 is", Math.min(2,3,5,4,6,7)) // returns the minimum value of numbers

console.log( "Maximum value of 4,5,6,8,9,34 is", Math.max(4,5,6,8,9,34));

//***** Random *********** */

console.log(Math.random())          // to get the random values // provides the value between 0 to 1 ..ew have to multiply the values according to requirement.

let max = 20;  // to define the range, the value should be more than 10 and less than 20;
let min = 10; 


console.log(Math.floor(Math.random()*20+1))   
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get the value from 10 to 20;

// +1 is for avoiding the 0;


let aMax = 40 ;
let aMin = 20 ;

console.log(Math.floor(Math.random() * (aMax - aMin +1)) + aMin)
 