//seleccionar por nombre de etiqueta

let botonDeEtiqueta; // declarando una variable


botonDeEtiqueta = document.querySelector("button");

$("button")



//seleccionar por clase
let botonDeClase = $(".btn");
console.log(botonDeClase)

//seleccionar por id
let botonDeID = document.querySelector("#btn")
$("#btn")



//escuchar el evento click
botonDeID.addEventListener("click", function() {
    botonDeID.style.backgroundColor = "blue"
})


botonDeClase.on("click", function() {

    botonDeClase.addClass("btn-primary")
})

$(document).ready(function() {

    $("button")

    botonDeClase = $(".btn");
    
    botonDeClase.on("click", function() {

        botonDeClase.addClass("btn-primary")
    })
})



