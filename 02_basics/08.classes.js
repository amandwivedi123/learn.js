// const student = {
//   name : 'Aman',
//   printMarks : 87,
//   nationality:'indian',
//   greeting : function() {
//     console.log('Hello',this.name)
//   }
// }
// console.log(student); // Normal Object

// const employee = {
//   calcTax () {
//     console.log('calc rate is 20%');
//   }
// }

// const salary = {
//   salaries () {
//     salary : 50000
//   },
//     calcTax () {
//       console.log('calc rate is 30%');

//   }
// }
// console.log(salary.__proto__ = employee);

// const car = {
//   price (){
//     price : 40000
//   },
//   price2 (){
//     price : 59999
//   }
// }

// const name = {
//   fortuner(){
//     start : true
//   }
// }

// console.log(car.__proto__ = name); // Prototype

class toyotaCar {
    constructor(brand) {
      console.log("creating new brand");
      this.brand = brand;
    }
    start() {
      console.log("can start");
    }
    stop() {
      console.log("can stop");
    }
  }
  let fortuner = new toyotaCar();
  let lexus = new toyotaCar();
  
  class students {
    constructor(name, panDetails, salary) {
      this.name = name;
      this.panDetails = panDetails;
      this.salary = salary;
    }
  }
  
  let akash = new students("akash", 12322, 40000);
  let aman = new students("abhishek", 343422, 45000);
  let akhilesh = new students("aryan", 34383, 423000);
  console.log(akash);
  console.log(aman);
  console.log(akhilesh);
  
  // Inheritance
  
  class parent {
    hello() {
      console.log("hello");
    }
  }
  class child extends parent {
    welcome() {
      console.log("welcome");
    }
  }
  let obj = new child();
  console.log(obj);
  
  class human {
    constructor(species) {
      // super();
      this.species = species;
    }
    eat() {
      console.log("canEat");
    }
    walk() {
      console.log("canWalk");
    }
    talk() {
      console.log("canTalk");
    }
    coding() {
      console.log("cantWriteCode");
    }
  }
  
  class engineer extends human {
    coding() {
      console.log("canWriteCode");
    }
    programming() {
      console.log("canMakeProgramme");
    }
  }
  
  let amann = new engineer("homosepians");
  console.log(amann);
  
  
  let Data = 'This is the core data of javascript'
  class user{
    constructor(name,email){
       this.name = name;
       this.email = email;
     
    }
   viewData(){
   console.log("view data = ", Data)
   }
  }
  
  class Admin extends user {
    
    constructor(name,email){
      super(name,email)
    }
   editData(){
    console.log("Edited Data=", Data)
   }
  }
  const dataEdit = new Admin('aman','dwivediaman084@gmail.com');
  console.log(dataEdit)
  
  
  
  // ERROR HANDLING
  
  let a =24;
  let b = 34;
  console.log(a);
  console.log(b);
  console.log(a+b);
  console.log(a*b);

  console.log(a**b);
  