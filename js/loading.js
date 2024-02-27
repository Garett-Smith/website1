loadText = document.querySelector('.loading-text')

load = 0

loadText.innerText = "5%"

int = setInterval(blurring, 30)

function blurring() {
    load++
    loadText.innerText = ${load}%
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}
