const regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
const regexNumero=/[0-9]{10,11}$/;
const MAX_CARACTER=1000;


 
$(document).ready(function(){
    $(".popup").hide();
 

 
    $("#nombre, #apellido,#tel, #email, #consulta").keyup(function(e){
        validar(e);
    });

$(".boton").click(function(e){
    validar(e);
});
  


   


});

function validar(e){
   let error=false;
    $("#mensajeNombre,#mensajeApellido,#mensajeTel,#mensajeEmail,#mensajeTex").empty(); 
     $("#form input, #form textarea").removeClass();
 
   if($("#nombre").val()==""){
       error=true;
     
   
       $("#mensajeNombre").append("<p>Debes ingresar tu nombre</p>")
 
   }
   if($("#apellido").val()==""){
    error=true;
    $("#mensajeApellido").append("<p>Debes ingresar tu apellido</p>")
}
if(!$("#email").val().match(regexEmail)){
    error =true;
    $("#mensajeEmail").append("<p>Debes ingresar un email valido</p>");
 
}
 
if(!$("#tel").val().match(regexNumero)){
    error =true;
    $("#mensajeTel").append("<p>Debes ingresar un telefono  valido</p>");
 
}

if($("#consulta").val().length==MAX_CARACTER ||$("#consulta").val().length<=10){
    error=true;
    $ ("#mensajeTex").removeClass("correcto");
     $ ("#mensajeTex").addClass("error");  
    $("#mensajeTex").append("<p> Debe contener almenos 10 caracteres</p>"); 
    $("#mensajeTex").append("<p> "+$("#consulta").val().length+"/1000</p>"); 
     

}else{
   
    $ ("#mensajeTex").removeClass("error");
   $ ("#mensajeTex").addClass("correcto"); 
 
    $("#mensajeTex").append("<p> "+$("#consulta").val().length+"/1000</p>"); 
   
}






    if(error){
       e.preventDefault();  
      
    }else{
        $(".contenedor-formulario").hide();
        $(".popup").show();
    }

}


 
    