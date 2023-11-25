const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu); 

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const HomeMenu = document.querySelector('#Home-page')
    const AboutMeMenu = document.querySelector('#AboutMe-page')
    const ExperienceMenu = document.querySelector('#Experience-page')
    const SkillsMenu = document.querySelector('#Skills-page')
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items

    if(window.innerWidth >960 && scrollPos <600) {
        HomeMenu.classList.add('highlight')
        AboutMeMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth >960 && scrollPos <1400) {
        AboutMeMenu.classList.add('highlight')
        HomeMenu.classList.remove('highlight')
        ExperienceMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth >960 && scrollPos <2345) {
        ExperienceMenu.classList.add('highlight')
        AboutMeMenu.classList.remove('highlight')
        SkillsMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth >960 && scrollPos <3000) {
        SkillsMenu.classList.add('highlight')
        ExperienceMenu.classList.remove('highlight')
        return
    } 

    if ((elem && window.innerWidth <960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)