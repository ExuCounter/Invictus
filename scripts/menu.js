let burgerMenu = document.querySelector('.burger-menu'); // BURGER
let topBarNavCol = document.querySelector('.top-bar__row-col__nav'); // CONTAINER
let menuLinks = document.querySelectorAll('.top-bar__row-col__nav a')
burgerMenu.addEventListener('click', ()=>{
    if(!(topBarNavCol.classList.contains('active'))){  
        burgerMenu.classList.add('active');
        topBarNavCol.classList.add('active');
    }
    else{
        burgerMenu.classList.remove('active');
        topBarNavCol.classList.remove('active');
    }
})

menuLinks.forEach((item)=>{
    item.onclick = ()=>{
        burgerMenu.classList.remove('active');
        topBarNavCol.classList.remove('active');
    }
})

function getBodyScrollTop()
{
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

window.onscroll = function(){
    if(getBodyScrollTop() > 0 && document.documentElement.offsetWidth > 768){
        document.querySelector('.top-bar').classList.add('sticky');
        document.querySelector('.top-bar__row-col__logo img').src = '../img/logo.svg';
    }
    else{
        document.querySelector('.top-bar').classList.remove('sticky');
        document.querySelector('.top-bar__row-col__logo img').src = '../img/logo-white.svg';
    }
}
