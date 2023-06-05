let userInput;

/*1/ 2/ 3/ 14*/
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "bomb") {
        return userInput;
    } else {
        console.log("Please write rock, scissors or paper.");
    };
};

/*4*/
//console.log(getUserChoice('paper'));

/*5*/
getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        default:
            return 'scissors'
            break
    }
};

/*6*/
//console.log(getComputerChoice());

/*7/ 8/ 9/ 10/ 14*/
function determineWinner(getUserChoice, getComputerChoice) {
    if (getUserChoice === getComputerChoice) {
        return 'The game was a tie.';
    }
    else if (getUserChoice === "bomb") {
        return 'You won!';
    }
    else if (getUserChoice === "rock") {
        if (getComputerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        };
    } else if (getUserChoice === "paper") {
        if (getComputerChoice === "scissors") {
            return "The computer won! Because you choose " + getUserChoice + " and computer choose " + getComputerChoice;
        } else {
            return "You won!";
        };
    } else if (getUserChoice === "scissors") {
        if (getComputerChoice === "rock") {
            return "The computer won!";
        } else {
            return "You won!";
        };
    }

}

/*11*/
//determineWinner('paper', 'scissors'); // prints something like 'The computer won!'
//determineWinner('paper', 'paper'); // prints something like 'The game is a tie!'
//determineWinner('paper', 'rock'); // prints something like 'The user won!'

/*12/ 13*/
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
};
playGame();



