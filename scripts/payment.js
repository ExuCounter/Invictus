let occupantsButtons = document.querySelectorAll('.sign-up__start-section__plan-block');
let nextButtons = document.querySelectorAll('.choose-account-btn');
let previousButtons = document.querySelectorAll('.previous-btn');

nextButtons.forEach((btn)=>{
    btn.onclick = function(e){
        e.target.closest('.sign-up__individual-section').classList.remove('active');
        let sibling = e.target.closest('.sign-up__individual-section').nextSibling.nextSibling;
        sibling.classList.add('active');
        let progressLineCurrent = document.body.querySelector('.progress-line__block.active');
        progressLineCurrent.classList.remove('active');
        progressLineCurrent.classList.add('blue');
        let progressLineSibling = progressLineCurrent.nextSibling.nextSibling;
        progressLineSibling.classList.add('blue');
        progressLineSibling.classList.add('active');
    }
})

previousButtons.forEach((btn)=>{
    btn.onclick = function(e){
        e.target.closest('.sign-up__individual-section').classList.remove('active');
        let sibling = e.target.closest('.sign-up__individual-section').previousSibling.previousSibling;
        sibling.classList.add('active');
        let progressLineCurrent = document.body.querySelector('.progress-line__block.active');
        progressLineCurrent.classList.remove('active');
        progressLineCurrent.classList.remove('blue');
        let progressLineSibling = progressLineCurrent.previousSibling.previousSibling;
        progressLineSibling.classList.add('blue');
        progressLineSibling.classList.add('active');
    }
})

occupantsButtons.forEach(element => {
    element.addEventListener('click', ()=>{
        occupantsButtons.forEach(el=>{
            el.classList.remove('active');
        })
        element.classList.add('active');
    })
})

let cardNumberInput = document.body.querySelector('.card-number-input');
let maskOptionsNumber = {
mask: '****-****-****-****',
min: -10000,
max: 10000,
thousandsSeparator: ''
};
let maskNumberInput = IMask(cardNumberInput, maskOptionsNumber);

let cvvCodeInput = document.querySelector('.cvv-code');
cvvCodeInput.addEventListener('input', ()=>{
    if(cvvCodeInput.value.length > 3){
        cvvCodeInput.value = cvvCodeInput.value.substr(0,3);
    }
})

let cardDateInput = document.body.querySelector('.card-number-date');
let maskOptionsDate = {
mask: '**/**',
min: -10000,
max: 10000,
thousandsSeparator: ''
};
let maskCardInput = IMask(cardDateInput, maskOptionsDate);