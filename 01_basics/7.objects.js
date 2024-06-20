// 1. Singleton 

// Object Laterals

// Methods to define objects

// Object.create {

// }

// const mySym = Symbol("key1")

const product = {
    name : "Aman",
    "email": "dwivediaman084@gmail.com",
    isLoggedin : false,
    mobile : 9589920012,
    isPass : true,
    lastLoginDate : ["Monday","Tuesday","Wednesday","Thursday"],
    "mySum": "Aman",
    greeting : function greet () {
            console.log(`Hello ${this.name} , Welcome!!, Your phone number is ${this.mobile}`)  // defined the function as the key...
    }
  
     }
     

//      console.log(Object.keys(product))
//      console.log(Object.values(product))

// console.log(product.name) // access the value of key;
// console.log(product["mobile"]); // another way to access the value of key;
// console.log(product.email) // 
// console.log(typeof mySym) 
// console.log(product.greeting())

// product.email = "dabhiram0@gmail.com";
// console.log(product["email"]);

// Object.freeze(product.email);  // freeze the email ,means the value cannot be changed after freezing

// product.email = "daman@gmail.com";

// console.log(product.email);


// Putting object into object  ,,,, nested objects

// let productw = {
//     name : "xiaomi",
//     producerCompany  : {
//         parentCompany : {
//             name : "redmi"
//         }
//     }
// }
// console.log(productw.producerCompany?.parentCompany.name) // accessing the value of nested objects



// merging the objects   *** Obj.assign *** to merge the objecs;

//  let myObj1 = {
//     1 : "a", 2 :"b"
//  }
// let myObj2 = {
//     3 : "c", 4 : "d"
// }
// let myOhbj3 = {
//     5 : "e" , 6 : "f"
// }
// // let obj4 = myObj1 + myObj2 +myOhbj3;

// // let obj4 =  Object.assign({}, myObj1,myObj2,myOhbj3);  // (target , source)

// let obj4 = {...myObj1, ...myObj2, ...myOhbj3}  // spread operator on object
// console.log(obj4);
    
// let myDevice  = {
//         name : "aman",
//         price : 14999,
//         isOnPrice : true,
//         isOnWarranty : true,
//         RAM : 6,
//         ROM : 128,
// }
// console.log(Object.keys(myDevice))

// *************** DESTRUCTURING **********

let course = {
        courseName : "Js In Hindi",
        price :  999,
        courseInstructor : "Hitesh Choudhary"
}
console.log(course.courseInstructor);  // Hitesh Choudhary

const {courseInstructor :instructor} = course;  // Destructuring the objects
console.log(instructor)

const {price : p} = course;
console.log(p);


//  ******************** API s *******************

// // {
//         "name" : "Aman",
//         "coursename" : "Learning JavaScript",
//         "price" :  FormDataEvent
// // }

// url https:// random user me api...l