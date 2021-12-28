let headerburger = document.querySelector('.header__burger');
    headerburger.addEventListener('click', showMenu);

let menuNav = document.querySelector('.header__menu');
let body = document.body

function showMenu(){
    body.classList.toggle('active')
    headerburger.classList.toggle('active');
    menuNav.classList.toggle('active');
}

let menuLink = document.querySelectorAll('.menu__link');
    for(let i of menuLink){
        i.addEventListener('click', showLink)
    }

function showLink(event){
    let target = event.target;
    if(document.documentElement.clientWidth < 767 && target.classList.contains('menu__link')){
        if(body.classList.contains('active')){
            body.classList.toggle('active')
            headerburger.classList.toggle('active');
            menuNav.classList.toggle('active');
        }
    }
}