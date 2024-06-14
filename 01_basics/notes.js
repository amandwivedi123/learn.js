// Loops and Strings

// FOR Loops
// To print Natural Numbers From 1 to 10 Using For Loop. 

// let n = 10;
// for(let i=1 ; i<= n; i++) {
//     console.log(`${i} is a Natural Number`)
//}

// To print Hello World For 5 Times Using For Loop.

// for(let i=1; i<=5; i++){
//     console.log("Hello World")
// }

// To Calculate The Sum of First 10 Natural Numbers.

// let sum = 0;
// for(let i=1; i<=10; i++) {
//     sum = sum + i;
//     console.log("Sum =",sum);
// }

// Infinite Loop .8
/* for(let a=0; a>=0; a++){
    console.log(a); Infinite loop ,(We Should never run Infinite Loop On System)
}*/




// While Loops 
 // To print the Number from 1 to 5 using While loop.
 
// let a=1;
// while(a <= 5 ) {
//     console.log( "a =" ,a);
//     a++;
// }

// let product = 0;
// let b = 0;
// while(b <=2 ) {
// product = product+b;
//     console.log(product);
//     b++;
// }

// // Do While Loops 

// let num = 1;
// do{
//     console.log("num =",num);
//     num++;
// }while(num <= 5);

// // For-Off Loops.

// let idx =0;
// let str = "Aman Dwivedi";
// for (let i of str) {
//     idx++;
// }
// console.log(`Aman Dwivedi= ${idx}`);


// let name = "vaishali pandey";

// let size=0;

// for ( let i of name ){
//     size++;
// }

// console.log(size);

// // For-in Loop.

// let student={
//     name : "Aman Dwivedi",
//     class : "MSC.(CS)",
//     age :20,
//     isPass :true
// }
// console.log(student);


// let id = 0;
// for(let key in student) {
//     console.log ( id,key ,"=", student[key])
//     id++
// }
// print all the even numbers from 1 to 100 ;

// for( let numb=0; numb <= 100; numb++){
//     if (numb%2 === 0) {
//         console.log(numb)
//     }
// }
// let userNumber = 34;
// let gameNumber = prompt("Enter the game number");

// while(gameNumber != userNumber) {
//     gameNumber = prompt("You entered wrong number, Guess Again");
// }
// console.log("Congratulations, You entered the right number!");
      


// let userNum = 10;
// let gameNum = prompt("Enter the Number");

// while( gameNum != userNum) {
//     gameNum = prompt("You Entered the wrong number, Guess again");
    
// }
// console.log("Congratulations,You Entered the Right Number");

/* SUMMARY 

Loops = FOR , While, DO-While, For-Of , For-In(For Object), Infinite Loops; */

// STRINGS IN JAVASCRIPT 
// let str= "Aman Dwivedi";
// let str2 = "Apna College"
// console.log(str);
// console.log(str2.length);

// // Tamplate Laterals
// // String InterPolation

// // String Methods
// // 1.toUpperCase.
// let splStr = "Aman Dwivedi";
// let newsplStr = splStr.toUpperCase();
// console.log(newsplStr);

// // toLowerCase.

// let splStr2 = "ApnaCollege";
// let newsplStr2 = splStr2.toLowerCase();

// console.log(newsplStr2);

// // Trim (Remove White Spaces)

// let trimStr = "               Aman Dwivedi    ";
// let trimStr2 = trimStr.trim();
// console.log(trimStr2)

// // Slice (Returns Part Of String)

// let spclstr = " & I Love JAvaScript";
// console.log(spclstr.slice(0,11));

// // Concat (Adding multiple strings);

// let concatStr = trimStr2.concat(spclstr);
// console.log(concatStr)

// // Replace 

// let repStr = "HelloWorldeeeeeee";
// console.log( repStr.replaceAll("e","o"));

// // charAt ( Find the charecter)


// let CharStr = "SindhuHrSecSchool";
// console.log(CharStr.charAt(4));


// // Practice Question
// let userNam = prompt("Enter Your FullName (Without Space) :");
// console.log(`@${userNam}${userNam.length}`);

// Array On javascript (Collection of Information).

// let name = ["Aman","shikha","Pravaan","Ritesh","Abhinay"];
// console.log(name);

// let marks =[23,34,43,12,43];
// console.log(marks);

// Array Indices ',

// In javaScript strings are Immutable(Cannot Change).
// Array are Mutable (Can be change)

// let superHeroes = ["Hulk","Spiderman","Superman","IronMan"];
// superHeroes [2] = "Batman";
// console.log(superHeroes);

// Loops on array

// let superHeroess = ["Hulk","Spiderman","Superman","IronMan"];

// For Loops

// for(let i=0; i<superHeroess.length; i++) {
//     console.log(superHeroess[i])
// }

// For of Loops
// for(let i of superHeroess) {
//     console.log(i);
// }

// let city = ["Satna","Rewa","Jabalpur","Banglore","Bhopal","Indore"];
// for(let name of city ){
//     console.log(name.toUpperCase());
// }

// Practice Question

// let marks =[85, 97, 44, 37, 76, 60 ] ;
// let sum = 0;

// for(let i of marks){
//  sum = sum += i;

// }
// avg = sum / marks.length;
// console.log(avg)

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let avg of marks){
//     sum = sum += avg;
// }
// avg = sum / marks.length;
// console.log(`Average marks of class = ${avg}`);

// Practice Question 2.

//  let price = [250, 645, 300, 900, 50];
//  let i = 0;
//  for ( let val of price) {
//     console.log(`${i} value of items before offer = ${val}`);
//     let offer = val / 10;
//      count = price[i] - offer;
//     console.log(` The value of Items after Offer = ${count}`);
//     i++;
//  }

// for(let i=0; i < price.length; i++) {
//    let offer=  price[i] / 10;
//     price[i] -= offer;
// }
// console.log(price);



// Array Methods

// Push (Add anything on End);

// let names = ["Akash","Aman","Arpit","Amit","Ajay"] 
// let age = [23,43,33,32,23];
// names.push(age);
// console.log(names);

// pop (Cut from end and Return)

// let num = [32,34,35,76,43,76,23];


// num.pop();
// console.log(num);

// toString (Convert Array into String)


//let num = [32,34,35,76,43,76,23];
// console.log(num.toString());


// Concat (to joint multiple arrays)
// let nems = ["Akash","Aman","Arpit","Amit","Ajay"]
// let nums =  [32,34,35,76,43,76,23];

// console.log(nems.concat(nums));
// console.log(nems.toString(),nums.toString());

// Unshift Method.(Add something on Start)

// let nems = ["Akash","Aman","Arpit","Amit","Ajay"]
// nems.unshift("23","242");
// console.log(nems);

// Shift (To delete Something From Start);

// let nems = ["Akash","Aman","Arpit","Amit","Ajay"]
// nems.shift();
// console.log(nems , "Deleted Value = Akash");



// Slice (Cut particular part of Array) Immutable;

// let superHeros = ["Spideraman", "Superman","Ironman","Antman","Batman"];

// console.log(superHeros.slice(3,5));

// Splice (Change Original Array) (add,remove,replace);
// let suparHeross = ["Spideraman", "Superman","Ironman","Antman","Batman","AquaMan","Thor"];
// suparHeross.splice(3,2,"Aman")
// console.log(suparHeross);

// Practice Queation

// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies.slice(1));

// companies.splice(2,1,"ola");
// console.log(companies);

// companies.push("amazon");
// console.log(companies) ;

// Functions on Javascript

// These are the block of code which performs specific task and can be invoced whenever we want. (Redundancy = Repeatibility)

// function myFunction () {
//     console.log("AmanDwivedi")
//     console.log("Akash")
// }
// myFunction();
// myFunction();

// function sum(a,b) {
//     console.log(a + b);
// }
// sum(4398542,3454544);

// function newFun(a,b) {// parameter
    
//  console.log(a+b)
// }
// newFun(3223,3543543) // Arguement

// function newSum (a,b){
//     s = a + b;
//     console.log("before return")
//     return s;
// }
// let a = newSum(3242,4323);
// console.log(a)

// function mul(x,y) {
//   return(x*y);
  
// }

// function divi ( a,z){
//     return(a/z)
// }
// let c = divi(323,5);
// console.log(c);

//Arrow Functions

// const arrowSum = (s,d) => {
//     return s+d;
// }
// let f = arrowSum(3223 , 2432);
// console.log(f)
 

// Practice Question

// function countvowel(str) {
// let string ;

// for(let i of string){
//     string == "a","e","i","o","u";
// }
// i++;
// }

// countvowel(console.log(i)

// function countVowel (str) {
//     let count = 0;
//     for(let char of str){
//         if (char === "a"|| char ==="e"||char==="i"||char==="o"|| char ==="u"){
//         console.log(char)}
//     }
// }

// function counCons(str) {
//     let count = 0;
//     for(let counting of str) {
//         if(counting == 'a'|| counting == "e" || counting == "i" || counting == "o" || counting == "u") {
//             console.log(counting)
//         }
// }
// }
// counCons("kfjodijfodjfodfjfknjfodnfoifdif[dpfidfdifmdfidaaaaauueee")

// function countEven(num) {
//     let count = 0;
//     for(let value of num ) {
//         if (value%2 === 0) {
//             console.log(value , "is  a even number")
//         }
        
//     }
//     return count;
// }
// countEven([23,34,54,67,87,34,987,22,44,6,]);


// Operators and conditional statement

// Operators in JS

// 1. Arithmatic Operators. (+,-,*,%);
// 2. Modulus % . (provides reminader)
// 3. Exponentiation ** (provides square): needs 2 operants (a+b)
// 4. Increment (++)
// 5. Decrement (--) needs only 1 operant eg: a=1; a++ = a+1;
// 6. Assignment operators (+=, -=, *=, %=,) 
// 7. Comparison Operators (==  Equal to,=== Equal to Type ,!= not equal to,!== not equal to type) need 2 operants.

// let q = 4;
// let r = 5;
// let cond1 = q<r;
// let cond2 = r===5;
// console.log(cond1 && cond2);


// 8. Logical Operators (Logical AND && , Logical OR || , Logical NOT !)

//CONDITIONAL STATEMENTS

// if-else

// let age = 12;

// if(age >= 18) {
//     console.log("You can Vote");
// }
// if (age < 18) {
//     console.log("You can't Vote")
// }

// let mode = "dark";
// let color ;

// if(mode === "dark") {
//    color = "black";
// }
// if (mode === "light") {
//     color ="white"
// }
// console.log(color);

// let mode = "li";
// let color;

// if(mode === "light"){
//     color = "white";
// } else {
//     color = "black";
// }
// console.log(color);

// let num = 34;
// if(num % 2 === 0){
//     console.log( num,"is even");
// }else {
//     console.log(num , "is odd");
// }

// function even (num)  {
// if (num%2 === 0) {
//     console.log(num, "is even")
// } else if (num%2 !== 0) {
//     console.log(num,"is odd")
// }else {
//     console.log("nothing")
// }
// }

// function stage (age) {
//     if (age > 1 && age <= 18 ) {
//         console.log("children");
//     } else if (age > 18 && age <=50) {
//         console.log("Adult");
//     } else if (age > 50 && age <= 100) {
//         console.log("senior");
//     } else {
//         console.log("not applicable")
//     }
// }
//  stage(50);

// function LifeStage (age) {
//  if (age > 1 && age <= 18) {
//     console.log("Junior");
//  } else if(age > 18 && age <= 50) {
//     console.log("Senior");
//  } else if(age > 50 && age <= 100) {
//     console.log("Super Senior")
//  } else {
//     console.log("Undefined")
//  }
// }

// LifeStage(43)

// Terniary Operators (Requires Three Operants)

// let age = 12;
// let result = age >= 18 ? "adult": "not adult";
// console.log(result);

// PRACTICE

// let userNum = prompt("Enter a Number");
// if(userNum % 5 === 0 ) {
//     console.log(userNum,"is a multiple of 5")
// } else {
//     console.log("Number is not the multiple of" ,userNum)
// }

// let marks =10;
// let grade;
// if (marks > 0 && marks <= 49) {
//     grade = "E";
// } else if (marks > 49 && marks <= 59) {
//     grade = "D";
// } else if (marks > 59 && marks <= 69){
//     grade = "C";
// } else if (marks > 69 && marks <= 89) {
//     grade = "B";
// } else if(marks > 89 && marks <= 100) {
//     grade = "A"
// }else {
//    console.log("Udefined")
// }
// console.log("According to your Marks Your grade is ", grade);

// let a = 7;
// let b = 8;
// let c = 6;
// let d = 5;
// let biggestNo ;

// if(d > a && d > b && d > c) {
// console.log("biggest number is", d);
// } else if(c > a && c > b && c > d ){
// console.log("BiggestNo is ",c);
// }else if(b > a && b > c && b > d ){
//     console.log("BiggestNo is ",b);
// }else if(a > b && a > c && a > d ){
//     console.log("BiggestNo is ",a);
// }


// for (let i = 0; i <= 100 ; i++) {
// if(i%3 === 0 && i%5 === 0) {
//     console.log(i,"FIZZBUZZ");
// }else if (i%3 === 0 ) {
//     console.log(i,"FIZZ");
// }else if(i%5 === 0) {
//     console.log(i,"BUZZ")
// }
// }
// let sum =0;
// for (let i = 0; i< 1000; i++) {
//     if(i%3 === 0 || i%5 === 0){
//         sum = sum + i;
//     }

// }
// console.log(sum);

// function DetermineNum (num) {
// if(num <= 0 ){
//     console.log(num,"is negative");
// } else (console.log(num,"is positive"));
// }
// DetermineNum(-4332);

// function CheckEvenOdd (num) {
//     if (num%2 === 0) {
//         console.log(num, "is even");
//     }else {
//         console.log(num,"is odd");
//     }
// }

// CheckEvenOdd(4242343433);

// let a = 14;
// let b = 13; 
// if(a > b){
//     console.log(`in ${a} and ${b} ,${a} is greater`);
// } else {console.log(`in ${a} and ${b} ,${b} is greater`);}

// let age = 59;
// let Ticketprice;
// if (age > 1 && age < 12) {
//     Ticketprice = "₹5";
// }else if(age > 12 && age < 18){
//     Ticketprice ="₹10";
// }else if(age > 18 && age < 60) {
//     Ticketprice = "₹20"
// }
// console.log("Your age is", age ,"so", "You'll have to pay" ,  Ticketprice) ;

// let days = 366;
//  let year;
// if(days === 365) {
//     year = "Normal Year"
// }else if(days === 366) {
//     year ="Leapyear"
// }
// console.log(year)

// function IsLeapYear(year) {
// if (year % 4=== 0 && year % 40 != 0 || year % 400 === 0){
//     console.log(year ,"is a leap year");
// } else console.log(year,"is not the leap year")
// }
// IsLeapYear(2024);

// let price = 56;
// let discount ;
// if( price >= 100 ) {
//     discount = 20;
// } else if(price >= 50 && price < 100) {
//     discount = 10;
// } else {
//     discount = 0;
// }

//  console.log(`according to the purchasing price your discount is ${discount}%`);
//  var currenttime = Date();
//  var currenthour = currenttime.Hour();
//  var greeting;
 
//  if (currenthour < 12) {
//     greeting = "Good Morning";
//  } else if (currenthour < 18) {
//     console.log("Good Afternooon")
//  } else {
//     console.log("Good Evening")
//  }

// let weight = 30;
// let height = 1.75;
// let BMI = weight / (height*height);
// let cetagory ;
// if(weight < 18.5 ) {
//     cetagory = "underweight";
// } else if (weight < 24.5 ){
//     cetagory = "medium";
// }else if (weight < 30.5){
//     cetagory = "normal"
// }
// console.log(cetagory)
 
// for (let i = 1; i< 10 ; i++){
//     for(let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10 ; k++) {
//             let power = Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3);
//             let plus = i * 100 + j * 10 + k ;

//             if(power === plus) {
//                 console.log(power)
//             }
//         }
//     }
// }

// function ArmStrong(){
//     for (let i=1; i < 10; i++) {
//         for(let j=0; j<10; j++){ // Nested Loop
//              for(k=0; k<10; k++){
                

//                 let power = Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3);
//                 let plus = i*100 + j*10 + k;

//                 if(power === plus) {

//                     console.log(plus)
//                 }
//              }
//         }
//     }
// }



// let len = 10;
// for (let i=0; i<=len ; i++) {
//     console.log(`inner loop ${i}`)
//     for(let j=1; j<=10; j++){
     
//        console.log(`${i} * ${j} = ${i * j}`);
//     }
// } 
 
// for(let i = 1; i<=45; i++) {
//     if(i%3 === 0 && i%5 ===0) {
//         console.log(i,"FIZZBUZZ");
//     }else if(i%3 == 0) {
//         console.log(i,"FIZZ");
//     }else if ( i%5 == 0) {
//         console.log(i,"BUZZ")
//     }
// }
//  let thisIsAnArray =["element1","element2","element3","element4"] 
// // for(arr of thisIsAnArray){
// //     console.log(arr)
// // }

// let number = [1,13,22,123,49];
// let sum = 0 ;
// let average;
// for(let i = 0; i <number.length; i++)
// sum = number[i]+ sum;
// average = sum / number.length;
// console.log(`The sum of number ${number} == ${sum}`)
// console.log(`The Average of ${number} = ${average}`);


// for (let i = 50; i >= 20 ; i--) {
//     if(i%3 === 0){
//     console.log(i)
// }
// }
// let idx =1;
// let strVar = "LaunchCode";
// let arrVar = ["LC101","Blue",42];

// for(let i = 0; i < arrVar.length; i++) {
//     console.log(arrVar[i]);
// }

// for(let i =0; i < strVar.length; i++){
//     console.log (idx,strVar[i])
//     idx++
// }

// let arr =[2,3,13,18,-5,-10,11,0,104] ;
// let even=[], odd=[];
// for (val of arr) {
//     if(val%2 === 0) {
//         even =('even',even.concat(val))
//     }else {
//         odd=("odd",odd.concat(val))
//     }
// }
// console.log("even =",even)
// console.log("odd=",odd)

// let str = 0;
// while(str <= 23) {
//     console.log(str);
//     str++
// }

// let UserInput = prompt("Enter the Fuel Level (Should be more than 500 , and less than 2000" )
// let fuelLevel = Number(UserInput);

// if(UserInput >= 500 && UserInput < 2000) {
//     let i =  500;
//     while(i<2000) {
//         console.log("fuel")
//         i++
//     }   
// } else {
//     console.log("Invalid entry : please enter the fuel levelmore than 500 , and less than 2000 ")
// }

// printing the table from 90 to 100;
// for(let i=90; i<=100; i++) {  
    
//     for(let j =1; j <=10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// let product = {
//     name : "Aman",
//     class : "Msc.CS",
//     isPass : true,
//     number : 9589920012,
// }
// for (let i in product) {
//     console.log("key =",i,"value =", product[i])
// }

// print 1-100 even numbers using do while loops
// let i = 0;
// do{
//     if(i%2 === 0){

//         console.log(i);
//     }
// i++
// } while(i <= 100);


// let gameNum =  45;
// let userNum = prompt("Guess the number");
// userNum = Number(userNum);
// while(gameNum != userNum){
//   userNum =  prompt("You entered the wrong number, Guess again!");
// }
// console.log (gameNum, "is Correct gameNumber");

// let {0 : a } = [12,23,4,5,65,45];
// console.log(a);

// function abc() {
//     console.log("hii")
// }
// const value = new abc();// constructor function..
// console.log(value);

//Array 
 // index  = 0, 2, 3, 4, 5, 6, 7
// let array =[23,43,24,64,53,65,34,];
// console.log(array[5]); // print particular index of array.
// console.log(array); //convert the value of array at any index.
// array[3]= 4;       // Mutable can be changed.

// let superHeros =["Spiderman","Hulk","Thor","Superman","Ironman"];
// let i = 0;
// for(let idx of superHeros) { // Print all elements of Array.
//     console.log([i],idx.toUpperCase());
//     i++;
// }

// let marks1 = [85,97,44,37,76,60];
// let sum = 0;
// for(let value of marks1) {
//     sum = sum  + value;
//     average = sum / marks1.length;
// }
// console.log(`The sum of ${marks1} is ${sum} and it's average is ${average}`);

// let marks = [85,97,44,37,76,60];
// sum = 0;
// for(let i=0; i < marks.length; i++) {
// sum =marks[i] + sum;
// average = sum / marks.length;
// }
// console.log(average);


// let items = [250,645,300,900,50];
// let i = 0;
// for ( let val of items)  {
//     let offer = val / 10;

//     items[i] = items[i] - offer;
    
//     i++;
// }
// console.log(items);

// let item = [250,645,300,900,50];
// for (let i=0; i < item.length; i++) {

//     console.log(`${i} before offer the price of items are ${item[i]}`)
//     let offer = item[i]  / 10;
//     item[i] = item[i] - offer;
//     console.log(` ===>    after offer price of items are ${item[i]}` );
// }
// let items = [250,645,300,900,50];
// let items2 = [21,43,54,34,56,65,23,65];
// items.concat(items2); // if ew perform push array function after any array then it consider the second array as a array value;
// console.log(items)

//   
// console.log(items.toString( ))

// let arr1 = [1,2,3,4,[2,3,4,5,],6, [12,54,23,43]]; // if there is any array inside any array then we use this type of array (arr.flat(--depth));
// console.log(arr1.flat());


// console.log(Array.isArray(["newArr"]) )// to ask if the element is array or not.)

// console.log(Array.from("AmanDwi")); // to convert any string into array;

// let arr1 =434;
// let arr2 =344;
// let arr3 = 332;
// console.log(Array.of(arr1,arr2,arr3))




// let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"] 
//    let company = companies.shift() // remove the first element.
// console.log(companies);
// companies.splice(2,1,"Ola")
// console.log(companies) // remove element from 2nd index and added ola in  place of removed element;
//  let company = companies.push("Amazon"); // Added Amazon at the end
// console.log(companies.indexOf(5));
//  let newArr = companies.join  ();
//  console.log(newArr)
// console.log(companies.includes("Uber")); // to find weather any string or number is present on array or not.  


// let aman =  Array("Aman","Ashish","Amit");
// console.log(aman);


// let newSplitArr = splitArr.split();
// console.log(newSplitArr[0])
// console.log(newSplitArr.length)


// let Arr = ["Aman","Akhilesh","Abhiram","Umang"]; // To find the index of particular element on array- arr.indexOf("element;")
// splitArr[3] =  "Adarsh"
// console.log(Arr.indexOf("Akhilesh"));

// let arr1 = ["aman","akshay","aditya","amar"]; // to ask question if the element is present on array or not; (returns the value on true and false)
// console.log(arr1.includes("aditya"));

// let arr1 = ["aman","akshay","aditya","amar"];
// console.log(arr1.join())  // arr.join ==> returns the elements in form of string;
 

// _____________________Functions In javascript___________

// function countVowel (str) {
//     count = 0;
//     for(let val of str) {
//         if( val == "a" || val == "e" || val=="i" || val =="o" || val == "u")
//             {
//         count++;
//     }
//     } 
//     console.log(count)
// }
// countVowel("eweeee");

// const countVow = (string) => {
//     let count = 0;
//  for (let value of string) {
//      if(value === "a" || value === "e" || value === "i" || value === "o" || value === "u");
//    count++;
//  }console.log(`in  number of vowels =${count}`)
//  }
// countVow ("AmanDwivedi")

// function CalcSum (a,b) { // The function which is used on another Function as an parameter calld as "CALLBACK";
//     console.log(a + b)}
// CalcSum (24,43)

// let arr1 = [23,43,12,43,54];
// arr1.forEach (function calculateSum(ab){
//  console.log(ab)
// });

// --------------For Each Loops in array.------------------

// Higher order function is a function which takes another functions as a parameter;
 // or returns another function ;

// let arr = [23,43,23,12,45,65]; 
// square =0;
// arr.forEach(function countSquare(arr) { // arr is callback.
//     square = arr ** 2;
//     console.log("square of",arr , "is" ,square);
// })



//  &&&&-------- Array Methods;-------------&&&&




// 1. Map : it is similar to forEach but it returns new array after operation;

//  let array = [34,54,56];
//  array.map((num) => {
//     console.log(num );
//  })

// 2. Filter : 

// let evenArr =[2,3,4,5,6,7,8,9,12,34,45];

// let EvenArray =evenArr.filter((even => {
//     return even > 5;
// }))
/// console.log(EvenArray);

// let Arr =[2,3,4,5,6,7,8,9];
// let Arr_m = Arr.reduce((res,curr) => {
//     return(res + curr)
// })
// console.log(Arr_m);

// const lArray = [12,43,65,76,42,76,34,24,65];
// let arrosm =lArray.reduce((res,curr) => {
//     return res < curr ? res : curr;
// })
// console.log(arrosm);

// let StuArr = [43,56,76,98,76,99,90,87,96,78,];

// let ToprArr = StuArr.filter((topNum) => {
//     return topNum > 80;
// })
// console.log(ToprArr);

// function funAdd (a,b) {  // Parameters
//   return(a + b)
// }
// let fun = funAdd(12,32) // Arguement..
// console.log(fun);

// Rule Of Function : The function does not performs any operation after the "return";


// function CalcValue ( ... value) { // (...) spread operators
//     console.log(value);
// }
// CalcValue(12,56,87,12,13);

// let user = {
// name : "Aman",
// phone :9589920012
// }
// function userDet (anyobj) {
//     console.log(`Useraname is ${anyobj.name} and phone number is ${anyobj.phone}`)
// }
// userDet(user);

// function handleObject (object) {
// console.log(`the name of product is ${object.name} and price is ${object.price}`)
// }

// handleObject( {
//     name : "MI 9",
//     price : 12999
// })



// addNum(23);
// function addNum (num) {
//   console.log(num + 4);
// }
// if ew return any number after the function then it will be excuted and if the number is returned before function with any variabale it will give error;


//  addTwo(23) ;  // Error because value returned before initialisation over a variable.
//  let two = function addTwo (add) {
//      console.log( add + 2);
// }
// _______________________________Reverse____________________

// function ReverseNum (num) {
//     num=  num + "";
//     return num.split("").reverse().join("");
     
// }
// console.log(ReverseNum (232434))


// function checkPlaindrome (string){
//  for (let i=0 ; i < string; i++) {
//     if(i[0] === i[8] && i[1] === val[7]){
//         console.log(checkPlaindrome , "is plaindrome")
//     } else {
//         console.log("value is not plaindrome")
//     }
//  }
// } checkPlaindrome("adfgftda"); 


 // console.log("AmanDwivedi".toUpperCase());

//  let arr = ["Satna","Rewa","Jabalpur","Panna","maihar"];
 
//  arr.forEach( function Caladd (idx,val,arr) {
    
//   console.log(idx, val, arr); 
//  })


// ___________ There are three values are present on forEach function  val,idx,arr____________.

// let value = [11,21,12,22,13,14];
// value.forEach (function CalcSum (square) {
//    square = square ** 2;
//    console.log(square)
// });

// let value = [11,21,12,22,13,14];
//  function calcVal (mul)  {
//     mul = mul * 4;
//     console.log(mul)
// }
// value.forEach(calcVal) // we can pass the function on arr.forEach(--function--)
// let value = [11,21,12,22,13,14];
// value.map((num) =>{
//     console.log(num);
// })

// let value = [11,21,12,22,13,14];
// let evenaval = value.filter((a) => {
//     return a%2 === 0;
// })
// console.log("old array =", value)
// console.log("even array =",evenaval);

// let value = [23,43,23,12,22,45,56]
// let sum = 0;
// let valSum = value.reduce((res,curr)=> {
//      return res > curr ? res : curr; 
   
// })
// console.log(valSum);


// let n = prompt ("Enter a value");
// let arr = []
// for (let i=1; i <=n ; i++ ) {
//   arr[i-1] = i;
// }
// console.log(arr);


// let sum = arr.reduce((pre,curr) => {
//     return pre + curr;
// })
// console.log("sum=",sum);

// let product = arr.reduce((pre,curr) => {
//     return pre * curr;
// });
// console.log("product = ",product)

// function intro (str= "Akash",val = "engineer",age ) {
//     console.log("Hello i am " , str);
//     console.log("i am ",val);
//     console.log("my age is ", age);
// }

// intro("aman","web-developer",12)

// intro ("amit", "software engineer",25)

//  function ad (a,b) {
//     return a+b;
//  } 
// let a = ad(2,3);
// console.log(a);

// function logInMessage (userLogin) {
//     return `${userLogin} has loged in successfully`
// }
// let Login =logInMessage("Aman");
// console.log(Login)


// function addItems ( ... val1) {
//     return val1
// }

// let cardAdd = addItems(32,32,54);
// console.log(cardAdd)

// const user = {
//     name : "Aman",
//     class : "MSC CS",
//     isPass : true,
//     cgpa : 8.9
// }
// function handleObject (anyUser) {
//  console.log(`username is${anyUser.name} class is ${anyUser.class} is passed ${anyUser.isPass} and cgpa is ${anyUser.cgpa}`)
// }
// handleObject(user)

// let product = {  //putting object into a function a parameter.
//     name : "Xiaomi",
//     Type : "Phone",
//     price : 14999.
// }
//   function manageObject (myObj) {
//  console.log(`namr of product is ${myObj.name} type is ${myObj.Type} and price od${myObj.price}`);

//  }
// manageObject(product)

// let array =[23,54,98,46,76];

// function manageArray(arr) {
//     console.log(arr)
// }
// manageArray (array)

// let earphone ={
//     name : "oneplus bullet ",
//     price : 3000,
// }
//   function manObj (obj){
//    console.log(obj)
// }
// manObj({name :  "realme",
//     price :14999,
//     class :232
// })

// let arr =[34,65,87,65,96];
// function manArr (arrr){
//     console.log(arrr)
// }
// manArr([43,68,454,76  ])

// let user = {
//     username : "Aman",
//     price : 999,
//     greeting : function  () {
//         console.log(this.username ,", Welcome.to the website")
//     } 
// }
// user.greeting()


// let product = {
//     name : "xiaomi",
//     greeting: function (){
//         console.log(this.name,"is the name of the product")
//     },
//     price  : 12999

// }
// product.name = "moto"
// product.price = 14999
// product.greeting()
// console.log(product)


// let product = "XIAOMI";
// product.toUpperCase;
// let price;
// if(product === "MOTO"){
//     price = 12999;
// } else if ( product === "XIAOMI" ){
//     price = 14999;
// }else {
//     price : undefined;
// }
// console.log(price) 

// let car = {
//     name : "Aman",
//     price : 120000,
//     greeting : function () {
//         console.log(` Hello ${car.name} thankyou for choosing Tata Nexon at price ${car.price}` )
//     }
// }
// car.name="Akhilesh",
// car.price = 1350000
// car.greeting()

// ------------------------------THIS---------------------------------

 // Refers the current context...


// let BuyerName = {
//     name : "Aman",
//     price : 12999,
//     welcome : function () {
//         console.log(`Hello ${this.name} ThankYou for shoppping our RedmiTV+ on  ${this.price}`)
//         console.log(this)
//     }
// }

// console.log(this)
// BuyerName.welcome()
// BuyerName.name="Shikha";
// BuyerName.price = 13338;
// BuyerName.welcome()

// function chai () {      // we cannot use this method on any function , we can use this only with onjects,
//     let usernamee = "Aman"
//     console.log(this.usernamee)
// }
   
// chai()

// let chai =() => {
//     console.log(this)
// }

// chai()

// --------------------------ARROW FUNCTION (= () =>) ------------------------

const sum = (num1 , num2) => {
    return num1 + num2;
}
console.log(sum(32,23))   // Basic Syntax of function    (---Explixit Return---)

const mul =(num1 , num2) => (num1 * num2)   // ---------Implicite Return---------
console.log(mul(12,21));

// In this type of function we don't need to return the value ,, we just have to put the return value on parenthesis (value + value), it will automatically return the value. 

// Return Object 

// 

// -------------------------------IIFE Invoked Function Expression ------------------
//  Syntax (function name (param) {
//     return 
// }) () 

// (function aman () { // ----By simple function....  Named IIFE
//     console.log( "aman")
// }) (); // -- Semi colon is iportant
 
//   (() => {      // On Arrow function
//     console.log("AmanD")
//   }) () 

// ----------------JAVASCRIPt EXCUTiON CONTEXT --------------------------------

   