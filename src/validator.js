const validator = {
  isValid : (creditCardNumber) => {
    console.log(creditCardNumber);
    const cardNumber = creditCardNumber.split('');
    cardNumber.reverse();
    console.log(cardNumber);
    for (let i = 0; i < cardNumber.length; i++) {
        console.log(cardNumber[i]);
        if (i % 2 == 1) {
            console.log(cardNumber[i] * 2);
        }
    }
    return true;
  },
  maskify : () => {}
}

export default validator;
