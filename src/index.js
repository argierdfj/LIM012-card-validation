import validator from './validator.js';

const verifyCreditCard = document.getElementById('verifyCreditCard');
const restart = document.getElementById('restart');

verifyCreditCard.addEventListener('click', () => {
    const creditCard = document.getElementById('creditCard')
    const creditCardNumber = creditCard.value;
    if (!creditCardNumber) {
        alert('Debes ingresar el número de tarjeta para continuar');
        return
    } else if (creditCardNumber.length < 16) {
        alert('Faltan números');
        return;
    }

    const mainScreen = document.getElementById('mainScreen');
    const messageScreen = document.getElementById('messageScreen');

    mainScreen.classList.add('hide');
    messageScreen.classList.remove('hide');

    const cardValid = validator.isValid(creditCardNumber);
    const hiddenCardNumber = validator.maskify(creditCardNumber);

    const hiddenCard = document.getElementById('hiddenCard');
    const message = document.getElementById('message');

    if (cardValid === true) {
        hiddenCard.innerText = `${hiddenCardNumber}`;
        message.innerText = `Es válido para realizar compras online`;
        restart.value = `Verificar otra TDC Virtual`;
    } else {
        hiddenCard.innerText = `${hiddenCardNumber}`;
        message.innerText = `No es válido, por favor verifique.`;
        restart.value = `Verificar nuevamente`;
    }
});

restart.addEventListener('click', () => {
    const mainScreen = document.getElementById('mainScreen');
    const messageScreen = document.getElementById('messageScreen');
    const creditCard = document.getElementById('creditCard');

    creditCard.value = '';
    messageScreen.classList.add('hide');
    mainScreen.classList.remove('hide');
});