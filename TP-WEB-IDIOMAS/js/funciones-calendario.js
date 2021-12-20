$(document).ready(function(){
    /*Inicialmente, escondo todo*/
    $(".contenedor-cursos article").hide();
    $(".titulo").hide();
    $("#idioma").change(function(){
        filtrar();
    });
});

function filtrar(){
    const sede = $("#sede").val();
    const idioma = $("#idioma").val();

    /*Escondo todo y muestro aquellos que pasaron el filtro*/
    $(".contenedor-cursos article").hide();
    $(`.contenedor-cursos .${sede}.${idioma}`).show();
    $(".texto").hide();
    $(".titulo").show();
}


