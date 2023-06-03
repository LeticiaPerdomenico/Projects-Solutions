/*1*/
let userName = '';

/*2*/
userName !== '' ? console.log('Hello, ' + userName) : console.log('Hello!');

/*3*/
const userQuestion = 'Am I going to become millionaire?'; 

/*4*/
console.log(userQuestion);

/*5*/
const randomNumber = Math.floor(Math.random() * 8);

/*6*/
let eightBall = '';

/*7/ 8*/
switch (randomNumber) {
  case 0:
  eightBall = console.log('It is certain');
  break;
  case 1:
  eightBall = console.log('It is decidedly so');
  break;
  case 2: 
  eightBall = console.log('Reply hazy try again');
  break;
  case 3:
  eightBall = console.log('Cannot predict now');
  break;
  case 4: 
  eightBall = console.log('Do not count on it');
  break;
  case 5:
  eightBall = console.log('My sources say no');
  break;
  case 6:
  eightBall = console.log('Outlook not so good');
  break;
  case 7:
  eightBall = console.log('Signs point to yes');
  break;
  default:
  eightBall = console.log('yes!');
  break;
};

/*9*/
/*if (randomNumber === 0) {
    eightBall = 'It is certain'
    return console.log(eightBall);
} else if {
    eightBall = 'It is decidedly so'
    return console.log(eightBall);
} else if {
    eightBall = 'Reply hazy try again'
    return console.log(eightBall);
} else if {
    eightBall = 'Cannot predict now'
    return console.log(eightBall);
} else if {
    eightBall = 'Do not count on it'
    return console.log(eightBall);
} else if {
    eightBall = 'My sources say no'
    return console.log(eightBall);
} else if {
    eightBall = 'Outlook not so good'
    return console.log(eightBall);
} else if {
    eightBall = 'Signs point to yes'
    return console.log(eightBall);
} else {
    eightBall = 'yes'
    return console.log(eightBall); 
};
*/
