'use strict'
let isFetchBusy = false;
// let img = document.querySelector('img[src="img/loader.gif"]');
let img = document.getElementById('preloader');

const showPreloader = () => {
  img.style.display = 'block';
}

const hidePreloader = () => {
  img.style.display = 'none';
}

const getData = () => {
  //let users = document.getElementById('users');
  if (!isFetchBusy) {
    isFetchBusy = true;

    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
      .then(usersData => {
        console.log(usersData);
        
        let hr = document.createElement('hr');
        document.body.appendChild(hr);

        for (const user of usersData) {
          let pId = document.createElement('p');
          document.body.appendChild(pId);
          let pUserName = document.createElement('p');
          document.body.appendChild(pUserName);
          let pUserURL = document.createElement('p')
          document.body.appendChild(pUserURL);

          pId.textContent = `User ID: ${user.id}`;
          pUserName.textContent = `User Name: ${user.name}`;
          pUserURL.innerHTML = `User URL: ${user.website}<br>--------`;
        }
        hidePreloader();
        isFetchBusy = false;
      })
      .catch(error => console.error(error));
    
    //userData.parentElement.appendChild(userData);
  }
}

const scrollToEndOfPage = () => {
  let clientHeight = Math.ceil(document.documentElement.clientHeight);
  let scrollTop = Math.ceil(document.documentElement.scrollTop);
  let fullScroll = clientHeight + scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;


  console.log(`Scrolling...`);
  console.log('clientHeight: ' + clientHeight);
  console.log('scrollTop: ' + scrollTop);
  console.log('fullScroll: ' + fullScroll);
  console.log('scrollHeight: ' + scrollHeight);
  console.log('=============================');

  if (fullScroll >= scrollHeight) {
    console.log('The end of page reached--> getData()');
    showPreloader();
    getData();
  }
}



window.addEventListener('scroll', scrollToEndOfPage);