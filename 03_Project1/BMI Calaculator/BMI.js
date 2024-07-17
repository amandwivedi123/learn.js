// let input = document.querySelectorAll(".bmi");
// let form = document.querySelector("form");
// let result = document.querySelector(".result");
// form.addEventListener("submit", (el) => {
//     el.preventDefault();

//     let height = parseInt(document.querySelector(".height"));
//     let weight = parseInt(document.querySelector(".weight"))
// } )

// let myBtn = document.querySelector(".myBtn");

// let bmi;
// let height ;
// let weight  ;


//       myBtn.addEventListener( "SubmitEvent"  ,() => {
//        bmi = height / weight ** 2;
//        result.prepend( `Your BMI is ${bmi} Kgm^2`);
//        if (bmi >1 && bmi < 18.6 ) {
//         result.append(`You are Under Weight`);
//        } else if (bmi >18.6 && bmi <=24.9 ) {
//         result.append(`Your Weight is Normal`);
//        } else {
//        result.append((`You are Over Weight`));
//        }
//     }) 

   



let form = document.querySelector("form")
form.addEventListener("submit" , (el) => {
    el.preventDefault();
    

    let height = parseInt(document.querySelector(".height").value);
    let weight = parseInt(document.querySelector(".weight").value);
    
    let button = document.querySelector("#myBtn");
    
    let result= document.querySelector(".result");

    if(height === NaN || height === "" || height === 0) {
        result.innerHTML = "Please Enter a Valid Height",height;
    } else if (weight === NaN || weight === "" || weight === 0) {
        result.innerHTML = "Please Enter a Valid Weight",weight;
    } else {
        button.addEventListener("click" , () => {
            let bmi = [weight / ((height ** 2) / 10000).toFixed(2)];
            result.innerHTML = (`Your BMI is ${bmi}`)

            if(bmi <= 18.6 && bmi > 1) {
                result.textContent = `Your BMI is ${bmi} You are Under Weight`;
            } else if(bmi > 18.6 && bmi <= 23) {
                result.textContent = `Your BMI is ${bmi}  Your Weight is Normal`
            } else if(bmi > 23 ) {
                result.textContent = `Your BMI is ${bmi}  You are Over Weight`
            }
        })
    }   

})

