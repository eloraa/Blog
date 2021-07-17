const rootWrapper = document.querySelector('.root')

// Navigation Menu
rootWrapper.querySelector('.menu-button').onclick = () => document.body.classList.toggle('nav-open')

// Header Scroll Effects
window.addEventListener('scroll', e => {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    if(scrollTop > 15) rootWrapper.querySelector('header').classList.add('scrolled')
    else rootWrapper.querySelector('header').classList.remove('scrolled')
})