  "use strict" ; //  Treat all JS code as newer version,
 
 // *************** DATATYPES *************

 // 1. Primitive Datatypes - a. string, b. number, c. boolean, 4. null, 5. undefined, 6. symbol, 7.BigInt
 // 2. Non-Primitive Datatypes -  Object, Array, Function
// Typeof()

// Javascript is dynamically typed language 

// **** CONVERSION **********

// let score = (true);
// console.log(typeof score);
// console.log(score);

// let inNum = (score);
// console.log(inNum);
// console.log( typeof inNum);

// "33" = 33;
// 33abc =  NaN;
// true = 1, false = 0;

// let isLoggedIn =  "SMsn";

// let inBoolean = Boolean(isLoggedIn);
// console.log(inBoolean);

// "" = false;
// "aman" = true

// **************** OPERATIONS **************

// let value = 13;

// let negVal = -value;
// console.log(negVal);

// let str1 = "hello";
// let str2 = "World";
// let str3 = str1+str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1+2+"2"); // add two numbers 1+2=3 and return 2
// console.log("2"+2+4)  // return string 224
// console.log(+true) // output = 1;
// console.log(+"") // return 0
// num1 = num2 = num3 = num4 = 2+2; // writing this type of confusing code makes no sence...
// console.log(num1)

// console.log(2 > "1")
// console.log(null > 0)
// console.log(null >= 0);



// *************** MEMORY ***********************

// types of memory : 1.Stack memory -- used in primitive datatypes.
                //   2. Heap memory -- used in non-primitive datatypes.

  //  stack memory returns copy value
  let name = "aman";
  let name2 = name;
  name2 = "atul"
  console.log(name)
  console.log(name2)
  // heap returns the original value refrence;
   const myObj = {
    name : "aman",
    upi : "aman@ybl"
   }

   myObj.name = "Adarsh"
   console.log(myObj)