let firstStep = document.querySelector('.pay-step-1');
let secondStep = document.querySelector('.pay-step-2');
let firstStepSaveBtn = document.querySelector('.pay-step-1 .save-btn');
let secondStepSaveBtn = document.querySelector('.pay-step-2 .save-btn');

firstStepSaveBtn.onclick = function(e){
    e.preventDefault();
    firstStep.classList.remove('active');
    secondStep.classList.add('active');
}

secondStepSaveBtn.onclick = function(e){
    window.location.href = 'index.html';
}