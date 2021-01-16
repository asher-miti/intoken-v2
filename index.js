const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const socialToggle = document.querySelectorAll('.social-icon')
const arrowContainer = document.querySelector('.ca3-scroll-down-arrow')

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    arrowContainer.classList.toggle('active')
    socialToggle.forEach(function(el) {
        el.classList.toggle('active')
    })
})

