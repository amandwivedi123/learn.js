let randomNum = parseInt(Math.random() * 100 + 1) ;
console.log(randomNum);




let form = document.querySelector("#form");

let attempts = document.querySelectorAll(".attempts");

let guess = [];

let ramainingAttempts = 3;

form.addEventListener( "submit" , (el) => {

    let newGame = document.querySelector("#newGame")
    let result = document.querySelector("#result")
    
    let userinput = parseInt(document.querySelector("#userinput").value);

guess.push(userinput)
if(userinput < 1) {
   alert('Please enter the number greater than 0')
} if(userinput > 100) {
    alert('Please enter the number less than 100')
}if(randomNum === userinput) {
        el.preventDefault();
        result.innerHTML = (`Congrats! ${userinput} is correct number.`)
    } else if (userinput != randomNum ){ 
        el.preventDefault();
            result.innerHTML=(`Sorry! ${userinput} is  not correct Guess again!.`)
            ramainingAttempts--;

        attempts[0].innerHTML = `previous attempts : ${guess.join(", ")}`;
        attempts[1].innerHTML = `remaining attempts : ${ramainingAttempts} `;
        if (ramainingAttempts === 0) {
            alert (`Game over the guessing number was ${randomNum}`)
           endGame()  
        } 
    }
    });






// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }