const humbergerMenu = document.querySelector(".humberger-menu");
const navMenu = document.querySelector(".nav__menu");
const humbergerIcon = document.querySelector("#humberger-icon");


humbergerMenu.addEventListener('click', e =>{
    e.preventDefault()
    if(navMenu.style.transform === "translateY(-125%)"){
        navMenu.style.transform ="translateY(0)";
        humbergerIcon.src ='../../images/icon-close.svg';
    }else{
        navMenu.style.transform ="translateY(-125%)";
        humbergerIcon.src ='../../images/icon-hamburger.svg';
    }

});




