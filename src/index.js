import validator from './validator.js';

const btnVerify = document.getElementById('btnVerify');
const btnRestart = document.getElementById('btn-restart');
const mainScreen = document.getElementById('mainScreen');
const messageScreen = document.getElementById('messageScreen');


btnVerify.addEventListener('click', () => {
  const creditCard = document.getElementById('creditCard')
  const creditCardNumber = creditCard.value;
  if (!creditCardNumber) {
    alert('Debes ingresar el número de tarjeta para continuar');
    return
  } else if (creditCardNumber.length < 16) {
    alert('Faltan números');
    return;
  }

  // mainScreen.style.display = 'none';
  // messageScreen.style.display = 'block';

  mainScreen.classList.add('hide');
  messageScreen.classList.remove('hide')

  const cardValid = validator.isValid(creditCardNumber);
  const hiddenCardNumber = validator.maskify(creditCardNumber);

  const hiddenCard = document.getElementById('hiddenCard');
  const message = document.getElementById('message');

  if (cardValid === true) {
    hiddenCard.innerText = `${hiddenCardNumber}`;
    message.innerText = `Es válido para realizar compras online ✔️`;
    btnRestart.value = `Verificar otra TDC Virtual`;
  } else {
    hiddenCard.innerText = `${hiddenCardNumber}`;
    message.innerText = `No es válido, por favor verifique. ❌`;
    btnRestart.value = `Verificar nuevamente`;
  }
});

btnRestart.addEventListener('click', () => {
  const mainScreen = document.getElementById('mainScreen');
  const messageScreen = document.getElementById('messageScreen');
  const creditCard = document.getElementById('creditCard');

  creditCard.value = '';
  messageScreen.classList.add('hide');
  mainScreen.classList.remove('hide');
});

const btnMenu = document.getElementById('btnMenu');

btnMenu.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hideSidebar');
})
