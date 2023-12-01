const menu = document.querySelector('.menu')
const menuActive = document.querySelector('.header-menu-full')
const scrollHeader = document.querySelector('.header-wrapper')


menu.addEventListener('click', function(){
    menu.classList.toggle('active')
    menuActive.classList.toggle('active')

})

window.addEventListener('scroll', function(){
    // scrollHeader.classList.add('header-wrapper-black')
    let scrollPosition = window.scrollY
    console.log('scrollPosition')
    if(scrollPosition >= 350) {
        scrollHeader.classList.add('header-wrapper-black')
    }
    else {
        scrollHeader.classList.remove('header-wrapper-black')
    }
})
