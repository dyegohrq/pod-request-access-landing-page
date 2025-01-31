const form = document.getElementById('form')
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkEmail();
})

function checkEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        emailIsValid(emailInput, 'Fill in this field')
    } else if (!isEmail(emailValue)) {
        emailIsValid(emailInput, 'Oops! Please check your email')
    } else {
        successEmail(emailInput)
    }
}

function emailIsValid(input, message) {
    const formControl = input.parentElement;
    const span = document.getElementById('errorMessage')

    formControl.className = 'invalid';
    span.innerHTML = message;
}

function successEmail(input) {
    const formControl = input.parentElement;

    formControl.className = 'valid'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}