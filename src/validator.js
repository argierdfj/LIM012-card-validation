const validator = {
    isValid: (creditCardNumber) => {
        const cardNumber = creditCardNumber.split('').reverse();
        for (let i = 0; i < cardNumber.length; i++) {
            if (i % 2 == 1) {
                cardNumber[i] = cardNumber[i] * 2;
            }
        }
        let newCardNumber = cardNumber.join('').split('');
        let counter = 0;
        for (let i = 0; i < newCardNumber.length; i++) {
            counter += parseInt(newCardNumber[i]);
        }
        if (counter % 10 == 0) {
            return true;
        } else {
            return false;
        }
    },
    maskify: (creditCardNumber) => {
        const cardNumber = creditCardNumber.split('');
        for (let i = 0; i < cardNumber.length - 4; i++) {
            cardNumber[i] = '#';
        }
        return cardNumber.join('')
    }
}
export default validator;