$(document).ready(function(){
  $("#opcion0").hide(); 
    $("#sede").change(function () {
 
        ocultarEstablecimiento($(this).val());
        
    });
});
 
function ocultarEstablecimiento(valor){
    $("#opcion1").hide(); 
    $("#opcion2").hide();
    $("#opcion3").hide();
     $("#opcion4").hide(); 
     $("#opcion0").hide();
     $("#opcion0").empty();
    
    
     
     if(valor!=0){
         $("#opcion"+valor+"").show();
     }else{
         $("#opcion0").append("<p>Filtra por provincia para encontrar tu sede mas cercana</p>");
         $("#opcion0").show(); 
     }
        
     
        
      
}