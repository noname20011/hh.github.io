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



// ================= MOTION COMMON ============//
window.onscroll = function() {
    scrollHeader()
    scrollUp()
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