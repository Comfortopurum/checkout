const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const cardNumber = document.getElementById('cardNumber').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const cvv = document.getElementById('cvv').value;

      if (!isValidCardNumber(cardNumber)) {
        alert('Invalid card number!');
        return;
      }

      if (!isValidExpiryDate(expiryDate)) {
        alert('Invalid expiry date! Must be in format MM/YY.');
        return;
      }

      if (!isValidCVV(cvv)) {
        alert('Invalid CVV!');
        return;
      }

      // Assuming payment processing logic here
      alert('Payment processed successfully!');
    });

    function isValidCardNumber(cardNumber) {
      // Implement your card number validation logic here
      return /^\d{16}$/.test(cardNumber); // Basic validation: 16 digits
    }

    function isValidExpiryDate(expiryDate) {
      // Implement your expiry date validation logic here
      return /^\d{2}\/\d{2}$/.test(expiryDate); // Basic validation: MM/YY format
    }

    function isValidCVV(cvv) {
      // Implement your CVV validation logic here
      return /^\d{3,4}$/.test(cvv); // Basic validation: 3 or 4 digits
    }