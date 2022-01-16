

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
const botaoScroll = document.querySelector('.scrollup')
function decidirBotaoUp() {
    if (window.scrollY == 0) {
        botaoScroll.style.display = 'none';
    } else {
        botaoScroll.style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoUp)

window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector("nav ul").style.display == 'flex') {
            document.querySelector("nav ul").style.display = 'none'
        } else {
            document.querySelector("nav ul").style.display = 'flex'
        }
    });
};