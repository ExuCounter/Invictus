let occupantsButtons = document.querySelectorAll('.sign-up__start-section__plan-block');

occupantsButtons.forEach(element => {
    element.addEventListener('click', ()=>{
        occupantsButtons.forEach(el=>{
            el.classList.remove('active');
        })
        element.classList.add('active');
    })
})