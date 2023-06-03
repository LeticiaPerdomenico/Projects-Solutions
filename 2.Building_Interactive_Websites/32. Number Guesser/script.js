let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/*1*/
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//console.log(generateTarget());

/*2*/
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};

/*3*/
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

/*4*/
const advanceRound = () => 
    currentRoundNumber++;

/*6*/
/*const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);
const compareGuesses = (human, computer, target) => {
    if (human < 0 || human > 9) {
        alert('Invalid entry, must be in range 0 to 9. Modulus value will be used.');
    }
    const correctedHuman = human % 10;
    return getAbsoluteDistance(correctedHuman, target) <= getAbsoluteDistance(computer, target);
}*/