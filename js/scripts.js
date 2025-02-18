const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggre nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //animacion de los enlaces
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //animacion del menu hamburguesa
        burger.classList.toggle('toggle');
    });
}

navSlide();