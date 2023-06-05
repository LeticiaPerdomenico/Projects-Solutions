// The scope of `random` is too loose 


const getRandEvent = () => {
    /*11*/
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    /*2*/
  let days;
  if (event === 'Marathon') {
    /*3*/
    /*let*/ days = 50;
  } else if (event === 'Triathlon') {
    /*let*/ days = 100;
  } else if (event === 'Pentathlon') {
    /*let*/ days = 200;
  }
  return days;
};

// The scope of `name` is too tight 

/*5*/
const logEvent = (name, event) => {
  //let name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
   //let name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
/*6*/
const name = 'Nala';

/*7*/
logEvent(name, event);
logTime(name, days);

/*9*/
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);