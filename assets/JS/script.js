

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


const techTexto = document.querySelector('.alterarTexto-tech')

function AlterarTexto(TextoTech) {
    techTexto.innerHTML = TextoTech;
}

//dark-mode
const Ul  = document.querySelector('ul');
let ToggleDarkTheme = () =>{
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const elementAlink =  document.querySelectorAll('.toogle');
    const toogleImg = document.querySelector('.toogle-img');
    const toogleMM = document.querySelectorAll('.mmToogle');
     
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    for (let elementos of elementAlink) {
        elementos.classList.toggle('dark-mode')
    }
    for (let elementos of toogleMM) {
        elementos.classList.toggle('dark-mode-mm')
    }

    if(body.classList.contains('dark-mode')) {
        toogleImg.setAttribute('src','assets/ICONS/sun-solid-24.png')
    } else {
        toogleImg.setAttribute('src','assets/ICONS/moon-solid-24.png')
    }
}

// remove-menu
 
let removeMenu = () => {
    if(document.querySelector('body').scrollWidth <= 1320) {
        Ul.style.display = 'none';
    } 
    if (document.querySelector('body').scrollWidth >= 1320) {
        Ul.style.display = 'flex';
    }
     
}


window.addEventListener('scroll', removeMenu)






