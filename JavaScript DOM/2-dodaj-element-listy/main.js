"use strict";

let button = document.querySelector('button');
let itemsList = document.querySelector('ul');
document.addEventListener('click', addItem);

function addItem(event) {
  let target = event.target;

  if(target === button) {
    let itemsNumber = itemsList.children.length;
    let item = document.createElement('li');
    
    item.classList.add('item');
    item.textContent = `Item ${itemsNumber + 1}`;
    itemsList.appendChild(item);
  }
  
}
