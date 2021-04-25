

//FUNCIÓN PARA VERIFICAR REQUISITOS DE LA CONTRASEÑA
function revisar(event){
    var pass = document.getElementById("inputpassword").value;
    var contienenumero = /[0-9]/; //Expresion regular, al menos contiene 1 numero. Primera coincidencia
    var mayuscula = /[A-Z]/; //Expresion regular, al menos contiene una mayúscula. Primera coincidencia

    var mensaje;
    var envia;

    if((pass.length < 8) || (!pass.match(contienenumero)) || (!pass.match(mayuscula))) {
        mensaje = "Minimun eight characters, 1 number and 1 capital letter";
        envia = false;
        event.preventDefault();
        event.stopPropagation();
        $("#inputpassword-ok").hide();
        $("#tipoPassword").show();
    }else{
        mensaje = "Ok password";
        envia = true;
        $("#inputpassword-ok").show();
        $("#tipoPassword").hide();
    }
    document.getElementById("tipoPassword").innerHTML = mensaje;
    return envia;
}




//FUNCION VERIFICAR REPETICION CONTRASEÑA
function verificar(event){
    var repeat = document.getElementById("inputrepeatpass").value;
    var pass = document.getElementById("inputpassword").value;
    var mensaje;
    var envia;

    if(pass != repeat){
        mensaje = "The text does not correspond to the password";
        envia = false;
        event.preventDefault();
        event.stopPropagation();
        $("#inputrepeatpass-ok").hide();
        $("#repeat").show();
    }else{
        mensaje = "Ok";
        envia = true;
        $("#inputrepeatpass-ok").show();
        $("#repeat").hide();
    }
    document.getElementById("repeat").innerHTML = mensaje;

}


// FUNCION BUSCADOR 3 LETRAS MINIMO
function valida_envia(event) {
    event.preventDefault();
    var palabras = document.getElementById("nombre2").value;

    var mensaje;
    var enviar;

    if (palabras && palabras.length >= 3) {
        mensaje = "Searching...";
        enviar = true;
    } else {
        mensaje = "Write at least 3 letters";
        enviar = false;
    }
    document.getElementById("buscando").innerHTML = mensaje;
    return enviar;
}