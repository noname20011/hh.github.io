const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// ==================== HEADER =================== //

const nav = $('.nav')
if (nav) {
    const navToggleBtn = nav.querySelector('#nav-toggle')
    const navMenu = nav.querySelector('#nav-menu')
    const navCloseBtn = nav.querySelector('#nav-close')
    if (navToggleBtn) {
        navToggleBtn.onclick = () => {
            navMenu.classList.add('nav__menu--active')
        }
    }
    if (navCloseBtn) {
        navCloseBtn.onclick = () => {
            navMenu.classList.remove('nav__menu--active')
        }
    }

    if (navMenu) {
        const menuItems = navMenu.querySelectorAll('ul li')
        menuItems.forEach(menuItem => {
            menuItem.onclick = () => {
                navMenu.classList.remove('nav__menu--active')
            }
        });
    }
}

// ========== SCROLL HEADER ======== //
function scrollHeader() {
    const header = $('#header')
    const home = $('#home')
    if (header) {
        let homeHeight = home.offsetHeight
        let currentHeight = this.pageYOffset; //scrollY
        if (currentHeight >= homeHeight) {
            header.classList.add('scroll--active')
        } else {
            header.classList.remove('scroll--active')
        }
    }
}


// ================= VIDEO ============//
const videoBtnToggle = $('#video-btn-toggle')
const video = $('#video')
video.pause()
let isPlay = false

video.onended = () => {
    video.pause()
    videoBtnToggle.classList.remove('pause')
}

videoBtnToggle.onclick = () => {
    if (!isPlay) {
        isPlay = true
        videoBtnToggle.classList.toggle('pause', isPlay)
        video.play()
    } else {
        isPlay = false
        videoBtnToggle.classList.toggle('pause', isPlay)
        video.pause()
    }
}

// ================= ACTIVE LINK ============//
const sectionLinks = $$('section[id]')

function activeLink() {
    let currentHeight = this.scrollY
    sectionLinks.forEach((sectionLink) => {
        let idSection = sectionLink.getAttribute('id')
        const heightSection = sectionLink.offsetHeight
        const topSection = sectionLink.offsetTop
        if (currentHeight > topSection && currentHeight <= topSection + heightSection) {
            $('.nav__menu a[href*=' + idSection + ']').classList.add('link--active')
        } else {
            $('.nav__menu a[href*=' + idSection + ']').classList.remove('link--active')
        }
    })
}


// ================= MOTION COMMON ============//
window.onscroll = function() {
    scrollHeader()
    scrollUp()
    activeLink()
}



// ========== ANIMATES ======== //
// ============= SCROLL UP =========//
function scrollUp() {
    const scrollBtn = $('#scroll-up')
    let currentHeight = this.scrollY
    if (currentHeight >= 100) {
        scrollBtn.classList.add('scrollup--active')
    } else {
        scrollBtn.classList.remove('scrollup--active')
    }
}


// ================= SWIPER DISCOVER ============//
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
    }
});

// ============ SCROLL ====================== //
const sr = ScrollReveal({
    distance: '40px',
    duration: 1500,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 80,

})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`, {
    origin: 'right',
    interval: 80,
})


// ============ CHANGE THEME =================== //
const themeBtn = $('#theme-button')
const darkTheme = 'dark-mode'
const iconTheme = 'uil-sun'
const titleTheme = $('#theme-title')
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}


themeBtn.onclick = function() {

    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    let isDarkThem = (themeBtn.classList.contains(iconTheme))
    if (isDarkThem) {
        titleTheme.innerText = 'Light mode'
    } else {
        titleTheme.innerText = 'Dark mode'
    }
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}