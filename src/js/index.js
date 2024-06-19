const MENU_BTN = document.querySelector('.header__btn')
const LOGO = document.querySelector('.header__logo')
const MENU = document.querySelector('.header__menu')

//Открытие мобильного меню
MENU_BTN.addEventListener('click' , () => {
    MENU_BTN.classList.toggle('active')
    LOGO.classList.toggle('active')
    MENU.classList.toggle('active')
})

//Закрытие меню при изменении ширины экрана
$(window).resize(function () {
    if ($(this).width() > 768) {
        MENU_BTN.classList.remove('active')
        LOGO.classList.remove('active')
        MENU.classList.remove('active')
    }
})
