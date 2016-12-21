function alcanzoPromedio(puntosSquad, maxPuntos) {
    var puntosSquad = document.getElementById("puntosSquad");
    var maxPuntos = document.getElementById("maxPuntos");
    var resultado = puntosSquad.value/maxPuntos.value;
    var porcentaje = resultado*100;
    
    if( puntosSquad.value == "" || maxPuntos.value  == ""){
		document.getElementById('resultado').innerHTML = "<i class='alert alert-danger'>Ingrese valores por favor</i>";    
    }else{
        if (porcentaje >= 80){
            porcentaje = "Muy bien squad!";
            document.getElementById("resultado").innerHTML=porcentaje;
        }else{
            porcentaje = "Pueden hacerlo mejor.";
            document.getElementById("resultado").innerHTML=porcentaje;
        }
        
    }

}
