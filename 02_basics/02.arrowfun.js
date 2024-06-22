
 // *********** ARROW  FUNCTIONS ************

 // This...      tells about the current context...

 const user = {
    name : "aman",
    price : 999,
    welcomeMessage : function () {
        console.log(`Hello ${this.name} , welcome!!..`);        // refers to current context...
        console.log(this);
    }
 }
user.welcomeMessage()

user.name = "sam";
user.welcomeMessage()

function thsii ()  {
    console.log(this)  // properties of this
}
thsii();

function thsi ()  {
    let username = "aman"
    console.log(this.username)   /// undefined   this does not works on function but only on object..
}
thsi()

// ARROW FUNCTION...

let product = (a,b) => {
    return a * b             // syntax 1...
}
console.log(product(12,3));

const div = (a,b) => {return a / b}   // implicite return... single line function..
console.log(div(12,6));

const squ = (a) => (a*a) ;   // no need to define the return when peranthesis ()  is used...
console.log(squ(12));

