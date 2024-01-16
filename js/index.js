let menu = document.querySelector(".container-popup");

function popup(){
    menu.classList.toggle("active");
}

let eventos = document.querySelector(".container-pop-up__eventos");
let order = document.querySelector(".container-suggest__item.eventos")

function popupEventos(){
    eventos.classList.toggle("active__eventos");
    order.classList.add("order__eventos");
}



// - Variables

let sliderImg = document.querySelectorAll(".slider-img");
// -- Guardamos en una variable todos los elementos img que darán como valor una array.

let sliderInner = document.querySelector(".container-suggest__item__img");
// -- Guardamos en una variable el contenedor de las imágenes para moverlo posteriormente.

let sliderActual= 0;
// -- Creamos una variable un contador del slider actual.

// 2ª PARTE

// - Funciones

setInterval ( () => {
// -- Creamos un intervalo con una función arrow.

    while (sliderActual < sliderImg.length - 1) {
    // --- Si el valor del slider actual es menor que la cantidad de img almacenadas en la variable -1:
        sliderActual++;
        // ---- Aumenta el valor del slider actual.
        let calculo = sliderActual * -100;
        // ---- Se declara una variable para hacer un cálculo que multiplique el slider actual por -100
        sliderInner.style.transform = `translateX(${calculo}vw)`;
        // ---- Modificamos el atributo style del contenedor de las imágenes agregandole un transform translateX con el valor de la variable anterior. Le añadimos la medida al final del resultado, por ejemplo vw.

    }

}, 5000) 
// -- Le damos un tiempo de ejecución al intervalo, por ejemplo: 5000ms

window.addEventListener('load', ()  => {
    sliderActual = 1; 
})