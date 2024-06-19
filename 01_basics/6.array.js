// const myArr =[21,"ds",43, true,56,77,"Aman"];  // Declaration of array
// console.log(myArr);

// console.log(myArr[2]);  // to access the perticular index of array...

// Array makes shallow copies when exicuted ...

// SHALLOW COPY : It means that the array returns value with original refrence.
 // DEEP COPY : Deep copy means that the value is returned not on original refrence.
 // i.e  there will be no change on original array if we make any change on values after defining array...

// ********** Methods **************

// let arr1 = ["aman",45,56,true,"sindhu", "RGPV"];
// let arr2 = ["xiaomi",128,true,"AkshGanga",true,"sindhu", "RGPV"]

// arr1.push("Dwivedi");  // push : add somthing on end of the array...

// arr1.pop();        // POP : remove something from the end...


// let arr3 = arr1.concat(arr2); //Concat :  to add multiple arrays...

// arr2.unshift("AMAN");  // Unshift : to add something on start...

// arr2.shift(); // Shift : to remove something from start...

// console.log(arr2.join()); // Join:  Converts array into string...

// const arrInc = arr2.includes("xiaomi"); //to ask if the value is present on the array...

// console.log(arrInc);

// console.log(typeof arrInc);  // returns the boolean value...

// const arr7 =arr2.slice(1,3);

// console.log(arr7);  // Slice : Returns the particular section of array,, does not include the ending index;

// console.log(arr2);

// let arr6 =arr2.splice(1,4);
// console.log(arr6);
// console.log(arr2.length);

// The main difference between Slice and Splice is the slice does not manipulate the original array but the splice makes changes on original array...

// ************* ARRAY FUNCTIONS *************

// let marvelHeros =["superman","spyderman","batman","ironman","rocakman"];
// let dcHeros = ["Hulk","Thor","Flash","antman"];

//  let allSuperHeros= marvelHeros.concat(dcHeros);
//     console.log(allSuperHeros);


    // spread operator

    // let marvelHeros =["superman","spyderman","batman","ironman","rocakman"];
    // let dcHeros = ["Hulk","Thor","Flash","antman"];

    // console.log(...marvelHeros,...dcHeros)

    const anotherArray =[1,3,2,4,5,[6,7,8],9,10,[11,12,14,13]];
    let newArray = anotherArray.flat(infinity)
console.log(anotherArray)