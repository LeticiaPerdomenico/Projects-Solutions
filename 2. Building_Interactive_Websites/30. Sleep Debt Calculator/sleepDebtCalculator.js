/*1/ 2*/
const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 5;
  } else if (day === 'wednesday') {
      return 7;
  } else if (day === 'thursday') {
      return 5;
  } else if (day === 'friday') {
      return 8;
  } else if (day === 'saturday') {
      return 9;
  } else if (day === 'sunday') {
      return 5;
  };
  };
  /*3*/
  //console.log(getSleepHours('tuesday'));

  /*4/ 5*/
  const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

 /*6*/
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };

/*7*/
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

/*8/ 9/ 10*/
  const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours) {
        console.log("You got the ideal sleep amount.")
      } else if (actualSleepHours > idealSleepHours) {
        let overSlept = actualSleepHours - idealSleepHours
        console.log("Wake up, you are over sleeping " + overSlept + "hours");
      } else {
        let debt = idealSleepHours - actualSleepHours
        console.log("Go to sleep you have a debt of " + debt + " hours");
      }
  };

  /*11*/
  calculateSleepDebt();
  
  /*12*/
  //const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
  //const getIdealSleepHours = idealHours => idealHours * 7;
  /*const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the ideal sleep amount.")
    } else if (actualSleepHours > idealSleepHours) {
      let overSlept = actualSleepHours - idealSleepHours
      console.log("Wake up, you are over sleeping " + overSlept + "hours");
    } else {
      let debt = idealSleepHours - actualSleepHours
      console.log("Go to sleep you have a debt of " + debt + " hours");
    }
};*/