

 // ******************* Conditional Statements...

 // 1. (if);

 let day = "monday" ;
 if (day = "monday") {
    console.log(`It is ${day}`)
 } 

//  //2 if-else 

 let color;
 let mode = "white";
 if(mode == "dark") {
   color = "black";

 } else {
   color = "whiteish";
 }
 console.log(color)

 // else-if 

 let marks =100;
 let result;
 if (marks > 0 && marks <= 33) {
  result = "Need more practice";
 } else if (marks > 33 && marks <= 50) {
  result = "Average";
 } else if (marks > 50 && marks <= 80) {
  result = "good";
 }else if (marks > 80 && marks <= 100) {
  result = " best";
 } else {
  console.log(undefined)
 }
 console.log(`You are ${result}`)

 // **************** Short Hand Notation,****************

 let balance = 400;
 if(balance => 500) {
   console.log(`Your Balance is more than ${500}`)
  }else {
  console.log(`Your balance is less than ${500}`)
  }  


// ************* Truethi Value & Falsi Values **************

const email = "";
if(email) {
  console.log("Got Email");
} else {
  console.log("Email not found");
}

// Falsi Values : false , 0 , -0, Bigint (0n), "" , null ,undefined, NaN..

// Truthi Values : "false" , "true", [] , "0", {}, function(){}, 

// checking email..
if (email.length === 0){
  console.log("Array is empty")
} 
// checking Objects 
let emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
  console.log("Object is empty")
}

// Nullish coalesing operator      To get the actual value if null or undefiined values are is present...

let val1;

// val1 = 5 ?? 10;
// val1 = undefined ?? 20;
val1 = null ?? 90;
console.log(val1);


//***********Terniary Operator **/

let priceProduct = 100;
 priceProduct <= 99 ? console.log("price is less than 100") : console.log("price is greater than 100");

