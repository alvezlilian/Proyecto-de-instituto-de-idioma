let regexNumeros = /^[0-9]+$/;
let regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;

$(document).ready(function(){
  
    

    $("#dato1").text(localStorage.getItem("provincia"));
    $("#dato2").text(localStorage.getItem("establecimiento"));
    $("#dato3").text(localStorage.getItem("idioma"));
    $("#dato4").text(localStorage.getItem("hora-mod"));

 
    $("#form").submit(function(e){
        validar(e);
    });

    $("#nombre, #apellido,#telefono, #email, #provincia, #ciudad").keyup(function(e){
        validar(e);
    });
});

function validar(e){
    let error = false;
    $("#mensaje1, #mensaje2, #mensaje3, #mensaje4, #mensaje5, #mensaje6").empty();

    if($("#nombre").val()==""){
        error = true;
        $("#mensaje1").append("<p>El campo nombre es obligatorio</p>");
    }
    if($("#apellido").val()==""){
        error = true;
        $("#mensaje2").append("<p>El campo apellido es obligatorio</p>");
    }
    if(!$("#telefono").val().match(regexNumeros)){
        error = true;
        $("#mensaje3").append("<p>Ingrese un número de teléfono válido</p>");
    }
    if(!$("#email").val().match(regexEmail)){
        error = true;
        $("#mensaje4").append("<p>Ingrese una dirección de correo válida</p>");
    }
    if($("#provincia").val()==""){
        error = true;
        $("#mensaje5").append("<p>El campo provincia es obligatorio</p>");
    }
    if($("#ciudad").val()==""){
        error = true;
        $("#mensaje6").append("<p>El campo ciudad es obligatorio</p>");
    }

    if (error){
        e.preventDefault();
    }
}