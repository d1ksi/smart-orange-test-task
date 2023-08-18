const button = document.getElementById('contact-button');

button.addEventListener('click', () => {
   const usernameInput = document.getElementById('username');
   const phoneInput = document.getElementById('user-phone');
   const emailInput = document.getElementById('email');
   const goodsInput = document.getElementById('goods');
   const messageTextarea = document.getElementById('message');

   function checkTextLength(inputValue) {
      return inputValue.length > 0;
   }

   function updatePlaceholderWithStar(inputElement) {
      inputElement.placeholder = inputElement.placeholder.replace('*', '') + '*';
   }


   if (!checkTextLength(phoneInput.value)) {
      updatePlaceholderWithStar(phoneInput);
   }

   if (!checkTextLength(emailInput.value)) {
      updatePlaceholderWithStar(emailInput);
   }

   if (!checkTextLength(messageTextarea.value)) {
      updatePlaceholderWithStar(messageTextarea);
   }


   if (
      checkTextLength(usernameInput.value) &&
      checkTextLength(phoneInput.value) &&
      checkTextLength(emailInput.value) &&
      checkTextLength(goodsInput.value) &&
      checkTextLength(messageTextarea.value)
   ) {
      usernameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      goodsInput.value = '';
      messageTextarea.value = '';
   }
});
