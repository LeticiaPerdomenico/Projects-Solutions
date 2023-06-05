/*1/ 14*/
const input = "turpentine and turtles";

/*2*/
const vowels = ["a","e","i","o","u"];

/*3*/
let resultArray = [];

/*4*/
for (let inputIndex = 0; inputIndex<input.length; inputIndex++) {
   /*5*/
  //console.log("i is " + inputIndex);
  /*10*/
  if(input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  }
  /*11*/
  if(input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }

  /*6*/
  for (let vowelIndex = 0; vowelIndex<vowels.length; vowelIndex++) {
    /*7*/
    //console.log("y is " + vowelIndex);
    /*8*/
    if(input[inputIndex] === vowels[vowelIndex]){
      //console.log(input[inputIndex])
      /*9*/
      resultArray.push(input[inputIndex])
    }
  }
}

/*12*/
//console.log(resultArray)

/*13*/
const resultString = resultArray.join('').toUpperCase();
console.log(resultString)