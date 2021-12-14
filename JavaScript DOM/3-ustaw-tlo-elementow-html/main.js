"use strict";

let firstP = document.querySelector('p:first-child');
let secondP = firstP.nextElementSibling; 
const button = document.querySelector('input[type="button"]');


const setBackground = (event) => {
  let target = event.target;
  
  if(target === button) {
    /*  firstP.style.backgroundColor = 'red';
    secondP.style.backgroundColor = 'yellow'; */
    firstP.classList.toggle('bg-red');
    secondP.classList.toggle('bg-yellow');
  }
  
}

document.addEventListener('click', setBackground);
