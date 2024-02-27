loadText = document.querySelector('.loading-text')

load = 0

loadText.innerText = "5%"

blurring()
blurring()
blurring()

function blurring() {
    load++
    loadText.innerText = ${load}%
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}
