import { animals } from './animals';
/*1*/
import React from 'react';
import {createRoot} from 'react-dom/client';
/*2*/
const container = document.getElementById('app');
/*3*/
const root = createRoot(container);
const title = '';
/*7*/
const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>
const images = [];
/*11*/
function displayFact(e) {
  let facts = animals[e.target.alt].facts
  /*13*/
  document.getElementById('fact').innerHTML = facts[Math.floor(Math.random() * facts.length)]
}
/*14*/
const showBackground = true;
/*9/ 13*/
for (const animal in animals) {
  images.push(<img 
  key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  aria-label={animal}
  role='button'
  onClick= {displayFact}
  />)
};
/*4/ 5/ 8/ 10/ 12*/
const animalFacts = (<div>
{showBackground && background}
<p id='fact'></p>
<div className='animals'>
{images}
</div>
<h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
</div>);

/*6*/
root.render(animalFacts);