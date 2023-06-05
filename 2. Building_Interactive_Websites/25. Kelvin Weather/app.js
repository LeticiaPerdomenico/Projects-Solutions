/*2*/
//This is a constant in Kelvin that is always 293

/*1*/
const kelvin = 293;

/*11*/
//const kelvin = 0; (I must delete the other const to use this one.)

/*4*/
//This is a constant in Celsius that is 273 less than Kelvin.

/*3*/
const celsius = kelvin - 273;

/*6*/
//This is the convertion from Celsius to Fahrenheit.

/*5*/
let fahrenheit = celsius * (9/5) + 32;

/*8*/
//This is to round the number of Fahrenheit to an entire.

/*7*/
fahrenheit = Math.floor(fahrenheit);

/*9*/
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

/*12*/
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature in Newton is ${newton} degrees.`)