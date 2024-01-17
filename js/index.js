/*footer */
fetch('./components/footer.html')
.then(response => response.text())
.then(data =>{
	document.querySelector('footer').innerHTML = data;
})  


/*menu desplegable*/
let menu = document.querySelector(".container__popup");
let lineTop = document.querySelector(".container__nav__item__icon.top");
let lineBottom = document.querySelector(".container__nav__item__icon.bottom");

function popup() {
    menu.classList.toggle("active");
    lineTop.classList.toggle("close1");
    lineBottom.classList.toggle("close2");
}




/*funcion para activar el movimiento vertical de la imagen del div LOS MAS POPULARES al cargar la pagina */
let img1 = document.querySelector(".container__suggest__item__img.populares");

function moveImg1() {

    setTimeout ( () => {
        img1.style.transform = "translateY(-5rem)";
    }, 500 )

    setTimeout ( () => {
        img1.style.transform = "translateY(5rem)";
    }, 1000 )

    setTimeout ( () => {
        img1.style.transform = "translateY(-0rem)";
    }, 1500 )

}

moveImg1();


/*funcion para activar el movimiento vertical de la imagen del div ULTIMAS INCORPORACIONES al cargar la pagina */
let img2 = document.querySelector(".container__suggest__item__img.actuaciones");

function moveImg2() {

    setTimeout ( () => {
        img2.style.transform = "translateY(5rem)";
    }, 500 )

    setTimeout ( () => {
        img2.style.transform = "translateY(-5rem)";
    }, 1000 )

    setTimeout ( () => {
        img2.style.transform = "translateY(0rem)";
    }, 1500 )

}

moveImg2();

/*funcion para activar el movimiento vertical de la imagen del div MUSICA PARA CADA EVENTO al cargar la pagina */
let img3 = document.querySelector(".container__suggest__item__img.eventos");

function moveImg3() {

    setTimeout ( () => {
        img3.style.transform = "translateY(-5rem)";
    }, 500 )

    setTimeout ( () => {
        img3.style.transform = "translateY(5rem)";
    }, 1000 )

    setTimeout ( () => {
        img3.style.transform = "translateY(-0rem)";
    }, 1500 )

}

moveImg3();


/*funcion para activar el pop up y mover el div al primero al hacer click en el div LOS MAS POPULARES */
let populares = document.querySelector(".container__pop__up__populares");
let order1 = document.querySelector(".container__suggest__item.populares");

function popupPopulares(){
    actuaciones.classList.toggle("active__populares");
    order1.style.order = 1;
}

popupPopulares();


/*funcion para activar el pop up y mover el div al primero al hacer click en el div ULTIMAS INCORPORACIONES */
let actuaciones = document.querySelector(".container__pop__up__actuaciones");
let order2 = document.querySelector(".container__suggest__item.actuaciones");

function popupActuaciones(){
    actuaciones.classList.toggle("active__actuaciones");
    order2.style.order = 1;
}

popupActuaciones();


/*funcion para activar el pop up y mover el div al primero al hacer click en el div MUSICA PARA CADA EVENTO */
let eventos = document.querySelector(".container__pop__up__eventos");
let order3 = document.querySelector(".container__suggest__item.eventos");

function popupEventos(){
    eventos.classList.toggle("active__eventos");
    order3.style.order = 1;
}

popupEventos();


/*funcion para activar el pop up y mover el div al primero al hacer click en el div MUSICA PARA CADA EVENTO */
let registro = document.querySelector(".container__pop__up__registro");

function popupRegistro(){
    registro.classList.toggle("active_registro");
}

popupRegistro();