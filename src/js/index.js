const MENU_BTN = document.querySelector('.header__btn')
const LOGO = document.querySelector('.header__logo')
const MENU = document.querySelector('.header__menu')

const MODAL_BG = document.querySelector('.modal-bg')
const MODAL_THANKS = document.querySelector('.modal-thanks')
const closeModalBtn = document.querySelectorAll('.closeModal')
const openModal = document.querySelectorAll('.openModal')
const modalItems = document.querySelectorAll('.modal')
const MODAL_TITLE = document.querySelector('.modal-title')
const MODAl_DESC = document.querySelector('.modal-desc')


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

//Остановка прокрутки сайта
function scrollStop() {
    document.querySelector("html").style.overflow = 'hidden'
}

//Восстановление прокрутки сайта
function scrollAuto() {
    document.querySelector("html").style.overflow = ''
}

//Функция закрытия модальных окон
function closeModal() {
    MODAL_BG.classList.remove('active')
    modalItems.forEach((item) => {
        item.classList.remove('active')
    })
    scrollAuto()
}
// //Модальное окно СПАСИБО
// // function openThanksModal() {
// //     closeModal()
// //     MODAL_BG.classList.add('active')
// //     MODAL_THANKS.classList.add('active')
// //
// // }
//Закрытие модального окна по клику на крестик
closeModalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        closeModal()
    })
})
//Открытие модального окна
openModal.forEach((item) => {
    item.addEventListener('click', () => {
        let title = item.getAttribute('data-title')
        let desc = item.getAttribute('data-desc')
        modalItems.forEach((modals) => {
            if (modals.classList.contains(item.getAttribute('data-modal'))) {
                MODAL_BG.classList.add('active')
                modals.classList.add('active')
                MODAL_TITLE.innerText = title
                MODAl_DESC.innerText = desc
                scrollStop()
            }
        })
    })
})

