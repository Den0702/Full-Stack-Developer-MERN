"use strict";

let form = document.getElementById('form'); 

const sendForm = (event) => {
  event.preventDefault();
  
  let name = form.elements.fname.value;
  let surname = form.elements.lname.value;
  console.log(`Imię uzytkownika: ${name}\nNazwisko uzytkownika: ${surname}`);
}

form.addEventListener('submit', sendForm);