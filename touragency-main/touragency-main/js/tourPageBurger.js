function openAndAnimate() {
    let mainPageBurgerOpener = document.querySelector('.burger-opener');
    mainPageBurgerOpener.addEventListener('click', ()=>{
        let mainPageBurger = document.querySelector('.burger').classList.toggle('active');
        let burgerOpener = document.querySelector('.burger-opener').classList.toggle('burger-active');
        let firstItem = document.querySelector('.first-item').classList.toggle('animated-item__first');
        let secondItem = document.querySelector('.second-item').classList.toggle('animated-item__second');
        let thridItem = document.querySelector('.thrid-item').classList.toggle('animated-item__thrid');
        let fourthItem = document.querySelector('.fourth-item').classList.toggle('animated-item__fourth');
        let fifthItem = document.querySelector('.fifth-item').classList.toggle('animated-item__fifth');
        let hided = document.querySelector('.page-content').classList.toggle('hided');
    });
}

openAndAnimate();