// For Loops

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for(let i=0; i <= 4; i++) {
  //  console.log(i);
}

// nested loops

// Print the table from 1 to 10;

for(let i = 1000000291; i <= 1000000292
    ; i++) {
   // console.log(` Table of  ${i}`)
    for(j = 1; j <= 10; j++) {
        
     //   console.log(`${i} * ${j} = ${i*j}`)
    }
}

// Break...
for (let a = 1; a <= 10; a++) {   // print the values until 5 is found then jump to the line no. 33
    if (a == 5) {
      //  console.log("found ",a);
        break;
    }
   // console.log(a)
}

// continue

for (let a = 1; a <= 10; a++) {   //Continues the values after 5 is found then again print the another values.
    if (a == 5) {
       // console.log("found ",a);
        continue;
    }
    // console.log(a)
}


let myArr= ["ironman", "superman","thor","hulk","spiderman"]
for(let a=0; a < myArr.length; a++) {
  let arrval=  (myArr[a])
//   console.log(arrval)
}


// While loops 

let i = 0;
while(i<=4) {
  //  console.log(`value of index is ${i}` );
    i++;
}

let ar = ["aman", "akash", "amit", "rohan", "rohit"]
    let a=0;
while (a < ar.length) {
   // console.log(` ${a} the value of array is  ${ar[a]}`);
    a++;
}

// do-while loops...

let score = 1;

do {
    //console.log(score);
    score++;
} while (score<10);

let myarray = ["ironman", "superman","thor","hulk","spiderman"]
let is = 0
do{
    // console.log(myarray[is]);
    is++;
}while(is < myarray.length)

 // Writing table from 1 to 10 using while loop...  nested loop;

    let am =1;
    while(am <= 10) {
       // console.log(`table of ${am}`)
        let an = 1; 
        while(an <=10){
          //  console.log(`${am} * ${an} = ${am * an}`)
            an++;
        }
        
        am++
    }

    // for of loops  arraty specific loop...

    let names = ["ironman", "superman","thor","hulk","spiderman"];
 
    for(let i of names) {
        console.log(i);
    }

    let greetings = "HelloWorld!";
    for(let o of greetings) {
        console.log(o);
    }

    // maps

//     const map = new Map();
//     map.set("IN", "India");
//     map.set("USA" , "America");
//     map.set("USSR" , "Russia");
//     map.set("FR", "France");

//     console.log(map)
//     for (let [key, value] of map) {
//         console.log(`${key} => ${value} `);
//     }

    const map2 =  new Map();
    map2.set("india" , "rupees")
    map2.set("America", "dollar")
    map2.set("dubai" , "derahm")
    map2.set("china" , 'Yuvan')
console.log(map2);
   for(let map of map2) {
    console.log(map)
   }

   let myvar = new Map();
   myvar.set("india" , "rupees")
   myvar.set("America", "dollar")
   myvar.set("dubai" , "derahm")
   myvar.set("china" , 'Yuvan')
  //  console.log(myvar)

   for(let [values,keys] of myvar) {
    // console.log(values,keys)
  }

 
// let country = new Map();      // set is known for unique value...
// country.set("India",1);
// country.set("America" , 2);
// country.set("japan",3);
// country.set("Africa",4);
// console.log(country)

// for(let [key , value ] of country){
//   // console.log( `the name of the country is ${countries.keys()} and the hirarchy is ${countries.values()}`)
//   // console.log(key, ":>" ,value);
// }

// for (let [key , value] in country) {
//   // console.log(key , value);
// } 

let product = {       // In object the for of will not work...
 name : " Xiaomi",
 price : 23000,
 isDiscount : true
}

for(let obje in product) {
  // console.log(obje,product[obje]);
}

const student = {
  name : "Adarsh",
  class : "bsc CS",
  isPass : true
}
console.log(student);
for(let data in student) {
  // console.log(`key of student is ${data} and value is ${student[data]}`)  // to print the keys and values of object
}

let array1 = [ "aman", "adarsh", "abhiram", "akhilesh", "bandna", "poonam"]  // using for in loop in array...

for(let names in array1){
  // console.log(array1[names]);
}
let country = new Map();      // set is known for unique value...
country.set("India",1);
country.set("America" , 2);
country.set("japan",3);
country.set("Africa",4);
// console.log(country)
for(let val in country) {
  // console.log(val)
}

// *********** For Each loop ************

const namesA = [ "aman", "adarsh", "abhiram", "akhilesh", "bandna", "poonam"]
namesA.forEach(  function (item ) {

  // console.log(item);

})

namesA.forEach(  (item) => {    // for each function using for each loop (arrow function)...
  // console.log(item)
})

function printMe (item,index,namesA) {  // we can print the array by using the external function by passing its parameter on the for each loop...

console.log(index,item,namesA);
}
namesA.forEach(printMe)

// Multiple objects on single array...

const college =[
  {
    name : "RGPV",
    course : "MSC CS",
    fee : 28000
  },
  {
    name : "MAkhanlal Chaturvedi",
    course : "MSC",
    fee : 54000
  },
   {
    name :"Ramakrishna college",
    course : "MSC ",
    fee : 34000
   }
]
console.log(college);