// ********************* FUNCTONS ********************

// function printMyName () {
//     console.log("a");        basics syntax of function...
//     console.log("m");
//     console.log("a");
//     console.log("n");
//     console.log("d");

// }
// printMyName()        function Call...

function sumTwoNum (num1,num2) {
   // console.log(num1+num2)   // Does not retutrn the value but only console it...

   return num1+num2;   // returns the actual result...
}
let result = sumTwoNum(23,32);
console.log(result);


function loginUser (str) {
    if(str != undefined){
        return (`Hello ${str} you have been logged in successfully`)  // if username is undefined then the console will be run...
    } else {
            console.log(`Please enter the username`)
    }
   
}
 console.log(loginUser("Aman"))


 function shoppingCard (...num1) {  // ... Rest operator used to print all the items,..
    
   return num1
  
 }
 console.log(shoppingCard(56,23,32))

 // Passing objects into functions..

 let product = {
    name : "Xiaomi Redmi note 10",
    prices : 14999,
    launchingDate : 2023
 }

 function accessObj (anyObj) {
    return(`The name of product is ${anyObj.name} , price  is ${anyObj.price} and launching date of the product is ${anyObj.launchingDate}`);
 }
 console.log(accessObj({name : "Aman",  price : 13000,
 }))

 // Accessing array  with function 

 let myarr1 = [12,32,35,55,65,34,23,43];

 function accessArr (...getArr) {
   return getArr[2], getArr[1], getArr[0];
 }
 console.log(accessArr(myarr1))


 // ******************* SCOPE IN JAVASCRIPT *******************
{
 let a = 10;
const b = 23 ;
var c = 30;
     d = 50;
}

//  console.table(a);  // will not be printed...
//  console.table(b);  // Will not be printed...
 console.table(c);  // will be printed ...
 console.log(d); // will be printednnnnnnnnnn



  /// ****************** IIFE Immediately Invoked Function Expressions..( function ).**************

  //  The global scope creates  the problem sometimes ,, to prevent from the bollution of global scope the IIFE is used...


(function chai () {                    // Named IIFI : the iifi function in which name is defined..
console.log("DB CONNECTED")
}) () ;

(function chaiAurCode () {
   console.log("Database Connected")
}) ();


// iifi with arrow function..
((name) => {                           //  Unnamed iifi : the iifi function in which the name is not defined...
   console.log(`Hello ${name}`)
}) ("Aman");

// sum of two numbers using iifi fun..

((num1,num2) => {
   console.log(num1 + num2) ;
}) (12,34);                      // the semi colon is must after defining an iifi function...