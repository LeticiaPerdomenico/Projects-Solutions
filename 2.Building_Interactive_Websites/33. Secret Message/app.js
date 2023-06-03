let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

/*2*/
secretMessage.length;

/*1*/
secretMessage.pop();

/*2*/
secretMessage.length;

/*3*/
secretMessage.push('to', 'Program');

/*4*/
secretMessage[7] = 'right';

/*5*/
secretMessage.shift();

/*6*/
secretMessage.unshift('Programming');

/*7*/
secretMessage.splice(6, 5, 'Know');

/*8*/
console.log(secretMessage.join(' '));