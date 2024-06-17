// DATES

// let date = new Date();
// console.log(date.toString());

// console.log(date.toISOString())  
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(date.getTimezoneOffset());
// console.log(typeof date);

const newDate = new Date(2024, 1, 12);
console.log(newDate.toString());

const myDate = new Date("01-12-2024");
console.log(myDate.getTime());

const myTimeStamp = Date.now();
console.log(myTimeStamp);