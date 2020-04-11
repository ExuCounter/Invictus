$('.services-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false
});

let rightArrowServicesSlider = document.querySelector('.services-slider .slick-next');
let leftArrowServicesSlider = document.querySelector('.services-slider .slick-prev');

rightArrowServicesSlider.addEventListener('click', ()=>{
    leftArrowServicesSlider.classList.add('active');
    rightArrowServicesSlider.classList.remove('active');
    rightArrowServicesSlider.classList.add('disabled');
})

leftArrowServicesSlider.addEventListener('click', ()=>{
    rightArrowServicesSlider.classList.add('active');
    leftArrowServicesSlider.classList.remove('active');
    leftArrowServicesSlider.classList.add('disabled');
})