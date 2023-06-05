/*1*/
let raceNumber = Math.floor(Math.random() * 1000);

/*2*/
let earlyRegistered = true;

/*3*/
let runnerAge = 16;

/*4/ 5*/
if (runnerAge > 18 && earlyRegistered) {
    raceNumber += 1000;
    console.log('You are an adult and your race number is  ' + raceNumber + '. You run at 9:30 am.');

/*6*/
} else if (runnerAge > 18 && !earlyRegistered) {
    raceNumber < raceNumber;
    console.log('You are an adult and your race number is ' + raceNumber + '. You run at 11 am.');
/*7*/
} else if (runnerAge < 18) {
    raceNumber < raceNumber
    console.log('You are a youth and your race number is ' + raceNumber + '. You run at 12:30 pm.')
/*9*/
} else {
    console.log('Please see the registration desk.')
};