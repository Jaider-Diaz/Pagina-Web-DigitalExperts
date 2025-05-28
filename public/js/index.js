/*codigo navar*/ 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/*codigo carrusel de imagen index */
let index = 0;
const images = document.querySelector(".carousel-images");
const carousel = document.querySelector(".carousel");
const totalImages = document.querySelectorAll(".carousel .img").length;

function showImage(n) {
    if (n < 0) {
        index = totalImages - 1;
    } else if (n >= totalImages) {
        index = 0;
    } else {
        index = n;
    }
    const width = carousel.offsetWidth;
    images.style.transform = `translateX(${-index * width}px)`;
}

window.addEventListener("resize", () => showImage(index)); // recalcular al cambiar tamaño

document.querySelector(".prev").addEventListener("click", () => showImage(index - 1));
document.querySelector(".next").addEventListener("click", () => showImage(index + 1));

// Mostrar imagen inicial
showImage(0);
