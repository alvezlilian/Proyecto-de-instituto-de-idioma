let opProvincias = {
    BuenosAires : [ "", "Instituto Mataderos"],
    Cordoba : ["", "Instituto Milenio"],
    RioNegro : ["", "Instituto D.Alighieri"],
    Salta : ["", "Instituto Güemes"]
}
let cursos=[
    {
        "establecimiento":"Instituto Mataderos",
        "direccion":"Murguiondo 2113",
        "provincia":"Buenos Aires",
        "localidad":"Mataderos",
        "mail":"institutomataderos@cali.edu.ar"
    },
    {
        "establecimiento": "Instituto Milenio",
        "direccion":"Alberti 250",
        "provincia":"Córdoba",
        "localidad":"Villa Allende",
        "mail":"institutomilenio@cali.edu.ar"
    },
    {
        "establecimiento":"Instituto D.Alighieri",
        "direccion":"Beschtedt 141",
        "provincia":"Río Negro",
        "localidad":"San Carlos de Bariloche",
        "mail":"institutodalighieri@cali.edu.ar"
    },
    {
        "establecimiento":"Instituto Güemes",
        "direccion":"Coronel Vidt 342",
        "provincia":"Salta",
        "localidad":"Salta",
        "mail":"institutoguemes@cali.edu.ar"
    }
];
$("document").ready(function(){
    $(".boton").addClass("separar");
    $("#contenedor-precio").hide();
    $('#slider').nivoSlider(); 

    $("#provincia").change(function(){
        mostrarCombo();
    });
    $("#establecimiento").change(function(){
        mostrarInfo($(this).val());
        
    });
  
    $("#provincia").change(function(){
        let dato1=($(this).val());
        localStorage.setItem("provincia",dato1);
        $("#establecimiento").change(function(){
            let dato2=($(this).val());
            localStorage.setItem("establecimiento",dato2);
         $("#idioma ").change(function(){
            let dato3=($(this).val());
            localStorage.setItem("idioma",dato3);
          $("#hora-mod").change(function(){
            let dato4=($(this).val());
            localStorage.setItem("hora-mod",dato4);
              agregarPrecio($("#idioma").val());
             });  
         });
     });
 });
           $(".boton").click(function(){
            guardarvalores();
     });

});

var nombreEstablecimiento;
function mostrarCombo(){
    let seleccion =  $("#provincia").val();
    

    $("#establecimiento").empty();

    opProvincias[seleccion].forEach(function(element, index){
       nombreEstablecimiento = '<option value="'+element+'">'+element+'</option>';
       $("#establecimiento").append(nombreEstablecimiento);

       
    });
}

function mostrarInfo(){
    const info = $("#establecimiento").val();

    let filtrado = cursos.filter(cursos=>cursos.establecimiento==info);

    $("#info-curso").empty();

    filtrado.forEach(curso => {
        $("#info-curso").append(`
        <ul>
            <li>Establecimiento: ${curso.establecimiento}</li>
            <li>Direccion: ${curso.direccion}</li>
            <li>Provincia: ${curso.provincia}</li>
            <li>Localidad: ${curso.localidad}</li>
            <li>E-mail: ${curso.mail}</li>
        </ul>
        `);
    });

}
function mostrarCombo(){
    let seleccion =  $("#provincia").val();
    $("#establecimiento").empty();

    opProvincias[seleccion].forEach(function(element, index){
        $("#establecimiento").append('<option value="'+element+'">'+element+'</option>');
    });
}



function mostrarDatos(){
    
		let info = $('#provincia').options[$('#provincia').selectedIndex].text;

		localStorage.setItem($("#provincia"), info);

		$("#algo").innerHTML = localStorage.getItem($("#provincia"));
}

function agregarPrecio(valor){
   

    if(valor==1 ||valor==3||valor==7){
    
       $(".output").append("<p>5000$</p>");
       
        $("#contenedor-precio").show();

    }else{
      
        $(".output").text("5000$");
       
        $("#contenedor-precio").show();
    }


}


