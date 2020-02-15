import validator from './validator.js';

console.log(validator);
const verifyCreditCard = document.getElementById('verifyCreditCard');

verifyCreditCard.addEventListener('click', () => {
    const creditCard = document.getElementById('creditCard')
    const creditCardNumber = creditCard.value;
    if (!creditCardNumber) {
        alert('Debes ingresar tu número de tarjeta para continuar 😒');
        return;
    }
    validator.isValid(creditCardNumber);
});

const verifyCreditCard = document.getElementById('verifyCreditCard');

const validateCreditCard = (creditCardNumber) => {
    console.log(creditCardNumber);
    const cardNumber = creditCardNumber.split('');
    cardNumber.reverse();
    console.log(cardNumber);
    for (let i = 0; i < cardNumber.length; i++) {
        if (i % 2 == 1) {
            console.log(cardNumber[i] * 2);
            let multiplicacion = cardNumber[i] * 2;
            cardNumber[i] = multiplicacion.toString();
        }
    }

    let newCardNumber = cardNumber.join('');
    let arrCard = newCardNumber.split('');
    console.log(arrCard);
    let counter = 0;
    for (i = 0; i < arrCard.length; i++) {
        counter = counter + parseInt(arrCard[i]);
    }
    console.log(counter);
    if (counter % 10 == 0) {
        alert('Tarjeta válida para realizar compras online')
    } else {
        alert('El número de tarjeta no es válido, por favor verifique')
    }
    return true;
};

/* verifyCreditCard.addEventListener('click', () => {
    const creditCard = document.getElementById('creditCard')
    const creditCardNumber = creditCard.value;
  if (!creditCardNumber) {
    alert('Debes ingresar el número de tarjeta para continuar 😒');
} else if (creditCardNumber.length < 16) {
    alert('Faltan números');
return;
}
    /* if (!creditCardNumber) {
        alert('Debes ingresar tu número de tarjeta para continuar 😒');
        return;
    };*/
/*  validateCreditCard(creditCardNumber);  
}); */

verifyCreditCard.addEventListener('click', () => {
    const creditCard = document.getElementById('creditCard')
    const creditCardNumber = creditCard.value;
    if (!creditCardNumber) {
        alert('Debes ingresar el número de tarjeta para continuar 😒');
        return
    } else if (creditCardNumber.length < 16) {
        alert('Faltan números');
        return;
    }
    validateCreditCard(creditCardNumber);
});