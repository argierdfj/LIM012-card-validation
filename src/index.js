import validator from './validator.js';

console.log(validator);
const verifyCreditCard = document.getElementById('verifyCreditCard');

verifyCreditCard.addEventListener('click', () => {
    const creditCard = document.getElementById('creditCard')
    const creditCardNumber = creditCard.value;
    if (!creditCardNumber) {
        alert('Debes ingresar tu número de tarjeta para continuar 😒');
        return;
    };
    validator.isValid(creditCardNumber);
});