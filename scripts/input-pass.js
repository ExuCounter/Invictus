let passwordInput = document.querySelector(".password-input");
let eyeButton = document.querySelector(".password-input__security-btn");
 
eyeButton.addEventListener('click', ()=>{
  if(passwordInput.getAttribute('type') == 'password') {
    passwordInput.removeAttribute('type');
    passwordInput.setAttribute('type', 'text');
    eyeButton.innerHTML='Hide';

   } else {
    passwordInput.removeAttribute('type');
    passwordInput.setAttribute('type', 'password');
    eyeButton.innerHTML='Show';
   }
});
