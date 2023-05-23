const open = document.querySelector('.open')
const close = document.querySelector('.close')
const ul = document.querySelector('ul')
const body = document.querySelector('body')


open.addEventListener('click', () => {
    ul.classList.add('show')
    // body.style.overflowY = 'hidden'
})

close.addEventListener('click', () => {
    ul.classList.remove('show')
    // body.style.overflowY = 'auto'
})