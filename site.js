

// CONTACT ME AUTOSIZE FORM FUNCTION (CALLED IN HTML 'ONINPUT')

function autoHeight (element, defaultHeight) {
    if (element) {
        const target = element.target
        let updatedHeight = `${target.scrollHeight}px`
        target.style.height = defaultHeight;
        target.style.height = updatedHeight;
    }
}


function navSlide () {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener("click", ()=>{
            //toggle nav bar
            nav.classList.toggle('nav-active')
        
            //Animate Links
            navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
            //Burger Animation
            burger.classList.toggle('toggle')
    })}


function textSlide() {
    const readMore = document.querySelector('.readMore')
    const close = document.querySelector('.closeButton')
    const text = document.querySelector('.mobileTextSwingIn')

    readMore.addEventListener("click", ()=>{
        text.classList.toggle('text-active')
    })

    close.addEventListener("click", ()=>{
        text.classList.toggle('text-active')
    })
}

navSlide()
textSlide()