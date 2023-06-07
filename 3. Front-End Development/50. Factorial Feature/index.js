const Calculate = {
    /*3*/
    factorial(inputNumber){
        /*9*/
      if(inputNumber === 0) {
      return 1;
    }
    /*6*/ 
    for(let i = inputNumber - 1; i >= 1; i--){
        /*7*/
      inputNumber *= i;
    }
    return inputNumber;
    }
  
  }
  
  module.exports = Calculate;
  
  
  