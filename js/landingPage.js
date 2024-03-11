toggle = document.getElementById('toggle')
open = document.getElementById('open')
model = document.getElementById('model')
close = document.getElementById('close')

// toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

//show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

//hide modal
close.addEventListener('click', () =>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click', (e) => {
    if (e.target ==modal) {
        modal.classList.remove('show-modal')
    }
})
