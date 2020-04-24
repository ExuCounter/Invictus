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

let step1 = document.querySelector('.circle-1');
let step2 = document.querySelector('.circle-2');
let step3 = document.querySelector('.circle-3');
let step4 = document.querySelector('.circle-4');
let step5 = document.querySelector('.circle-5');
let step6 = document.querySelector('.circle-6');
let step7 = document.querySelector('.circle-7');
let step8 = document.querySelector('.circle-8');

step1.onclick = function(e){
    if(step1.classList.contains('blue') && !(step1.classList.contains('active'))){
        step1.classList.add('active');
        step1.classList.add('blue');

        step2.classList.remove('active');
        step2.classList.remove('blue');

        step3.classList.remove('active');
        step3.classList.remove('blue');

        step4.classList.remove('active');
        step4.classList.remove('blue');

        step5.classList.remove('active');
        step5.classList.remove('blue');

        step6.classList.remove('active');
        step6.classList.remove('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-1').classList.add('active');
    }
}

step2.onclick = function(e){
    if(step2.classList.contains('blue') && !(step2.classList.contains('active'))){
        step2.classList.add('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.remove('blue');

        step4.classList.remove('active');
        step4.classList.remove('blue');

        step5.classList.remove('active');
        step5.classList.remove('blue');

        step6.classList.remove('active');
        step6.classList.remove('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-2').classList.add('active');
    }
}

step3.onclick = function(e){
    if(step3.classList.contains('blue') && !(step3.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.add('active');
        step3.classList.add('blue');

        step4.classList.remove('active');
        step4.classList.remove('blue');

        step5.classList.remove('active');
        step5.classList.remove('blue');

        step6.classList.remove('active');
        step6.classList.remove('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-3').classList.add('active');
    }
}

step4.onclick = function(e){
    if(step4.classList.contains('blue') && !(step4.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.add('blue');

        step4.classList.add('active');
        step4.classList.add('blue');

        step5.classList.remove('active');
        step5.classList.remove('blue');

        step6.classList.remove('active');
        step6.classList.remove('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-4').classList.add('active');
    }
}

step5.onclick = function(e){
    if(step4.classList.contains('blue') && !(step4.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.add('blue');

        step4.classList.remove('active');
        step4.classList.add('blue');

        step5.classList.add('active');
        step5.classList.add('blue');

        step6.classList.remove('active');
        step6.classList.remove('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-5').classList.add('active');
    }
}

step6.onclick = function(e){
    if(step6.classList.contains('blue') && !(step6.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.add('blue');

        step4.classList.remove('active');
        step4.classList.add('blue');

        step5.classList.remove('active');
        step5.classList.add('blue');

        step6.classList.add('active');
        step6.classList.add('blue');

        step7.classList.remove('active');
        step7.classList.remove('blue');

        step8.classList.remove('active');
        step8.classList.remove('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-6').classList.add('active');
    }
}

step7.onclick = function(e){
    if(step7.classList.contains('blue') && !(step7.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.add('blue');

        step4.classList.remove('active');
        step4.classList.add('blue');

        step5.classList.remove('active');
        step5.classList.add('blue');

        step6.classList.remove('active');
        step6.classList.add('blue');

        step7.classList.add('active');
        step7.classList.add('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-7').classList.add('active');
    }
}

step8.onclick = function(e){
    if(step8.classList.contains('blue') && !(step8.classList.contains('active'))){
        step2.classList.remove('active');
        step2.classList.add('blue');

        step1.classList.remove('active');
        step1.classList.add('blue');

        step3.classList.remove('active');
        step3.classList.add('blue');

        step4.classList.remove('active');
        step4.classList.add('blue');

        step5.classList.remove('active');
        step5.classList.add('blue');

        step6.classList.remove('active');
        step6.classList.add('blue');

        step7.classList.remove('active');
        step7.classList.add('blue');

        step8.classList.add('active');
        step8.classList.add('blue');

        document.body.querySelector('.sign-up__start-section.active').classList.remove('active');
        document.body.querySelector('.step-8').classList.add('active');
    }
}