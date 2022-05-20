'use strict'

const form = document.getElementById('newsletter');
const allConsents = document.getElementById('all-consents');

const validate = (event) => {
    //console.log('validate()');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const consent1 = document.getElementById('consent1');
    const errorList = document.getElementById('error');

    errorList.textContent = '';

    if (name.value.trim() === '') {
        let error = document.createElement('li');
        error.textContent = 'Pole imie i nazwisko jest wymagane!';
        errorList.prepend(error);
        console.log('Pole imie i nazwisko jest wymagane!');
    }
    if (email.value.trim() === '') {
        let error = document.createElement('li');
        error.textContent = 'Pole email jest wymagane!';
        errorList.prepend(error);
        console.log('Pole email jest wymagane!');
        
    } else if (!email.value.includes('@')) {
        let error = document.createElement('li');
        error.textContent = 'Wymagany jest znak @ w adresie email!';
        errorList.prepend(error);
        console.log('Wymagany jest znak @ w adresie email!');
    }
    if (!consent1.checked) {
        let error = document.createElement('li');
        error.textContent = 'Wymagana jest zgoda marketingowa 1!';
        errorList.prepend(error);
        console.log('Wymagana jest zgoda marketingowa 1!')
    }

    if (errorList.childElementCount !== 0) {
        event.preventDefault();
    }
}

const consentsAgree = () => {
    const consent1 = document.getElementById('consent1');
    const consent2 = document.getElementById('consent2');

    consent1.checked = !consent1.checked;
    consent2.checked = !consent2.checked;
    consent1.disabled = !consent1.disabled;
    consent2.disabled = !consent2.disabled;
}

allConsents.addEventListener('change', consentsAgree);
form.addEventListener('submit', validate);
