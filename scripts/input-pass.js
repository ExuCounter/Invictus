let passwordInputs = document.querySelectorAll(".password-input");
let eyeButtons = document.querySelectorAll(".password-input__security-btn");
 
eyeButtons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(button.closest('label').querySelector('.password-input').getAttribute('type') == 'password') {
      button.closest('label').querySelector('.password-input').removeAttribute('type');
      button.closest('label').querySelector('.password-input').setAttribute('type', 'text');
      button.innerHTML='Hide';
      return false;
  
      }
      else if(button.closest('label').querySelector('.password-input') != 'password'){
        button.closest('label').querySelector('.password-input').removeAttribute('type');
        button.closest('label').querySelector('.password-input').setAttribute('type', 'password');
        button.innerHTML='Show';
      }
  });
});
