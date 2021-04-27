
//************************************************************LOGIN************************************************************/

//FUNCION VERIFICAR CAMPO Email LOGIN
function emailvacio(event) {
    var email = document.getElementById("inputEmail").value;
    var mensaje;

    if (email == "") {
        mensaje = "Please complete the field";
        $("#siemail").hide();
        $("#noemail").show();
       
    }else{
        mensaje = "Valid";
        $("#siemail").show();
        $("#noemail").hide();
    }
    document.getElementById("siemail").innerHTML = mensaje;
    document.getElementById("noemail").innerHTML = mensaje;
}


//FUNCION VERIFICAR CAMPO Password LOGIN
function passwordvacio(event) {
    var contrasenya = document.getElementById("inputPassword").value;
    var mensaje;

    if (contrasenya == "") {
        mensaje = "Please complete the field";
        $("#sipassword").hide();
        $("#nopassword").show();


    }else{
        mensaje = "Valid";
        $("#sipassword").show();
        $("#nopassword").hide();
    }
    document.getElementById("sipassword").innerHTML = mensaje;
    document.getElementById("nopassword").innerHTML = mensaje;
    
}

//FUNCION AL HACER CLICK EN Botón 'Sign In' de tipo Submit del LOGIN
function enviar(event){
    var email = document.getElementById("inputEmail").value;
    var contrasenya = document.getElementById("inputPassword").value;
    var envia;
    if(email != "" && contrasenya !=""){
        envia = true;
    }else{
        event.preventDefault();
        envia = false;
    }
    return envia;
}


    
//************************************************************REGISTER************************************************************/


//FUNCION verificar campo NAME de REGISTER
function namevacio(event) {
    var nom = document.getElementById("inputname").value;
    var mensaje;

    if (nom == "") {
        mensaje = "Please complete the field";
        $("#siname").hide();
        $("#noname").show();
       
    }else{
        mensaje = "Valid";
        $("#siname").show();
        $("#noname").hide();
    }
    document.getElementById("siname").innerHTML = mensaje;
    document.getElementById("noname").innerHTML = mensaje;
}


//FUNCION verificar campo SURNAME de REGISTER
function surnamevacio(event) {
    var cognom = document.getElementById("inputsurname").value;
    var mensaje;

    if (cognom == "") {
        mensaje = "Please complete the field";
        $("#sisurname").hide();
        $("#nosurname").show();
       
    }else{
        mensaje = "Valid";
        $("#sisurname").show();
        $("#nosurname").hide();
    }
    document.getElementById("sisurname").innerHTML = mensaje;
    document.getElementById("nosurname").innerHTML = mensaje;
}


//FUNCION verificar campo EMAIL de REGISTER
function emailrvacio(event) {
    var emailregistro = document.getElementById("emailr").value;
    var mensaje;

    if (emailregistro == "") {
        mensaje = "Please complete the field";
        $("#siemailr").hide();
        $("#noemailr").show();
       
    }else{
        mensaje = "Valid";
        $("#siemailr").show();
        $("#noemailr").hide();
      
    }
    document.getElementById("siemailr").innerHTML = mensaje;
    document.getElementById("noemailr").innerHTML = mensaje;
}



//FUNCIÓN PARA VERIFICAR REQUISITOS DE LA CONTRASEÑA
function revisar(event) {
    var pass = document.getElementById("inputpassword").value;
    var contienenumero = /[0-9]/; //Expresion regular, al menos contiene 1 numero. Primera coincidencia
    var mayuscula = /[A-Z]/; //Expresion regular, al menos contiene una mayúscula. Primera coincidencia

    var mensaje;
   

    if ((pass.length < 8) || (!pass.match(contienenumero)) || (!pass.match(mayuscula))) {
        mensaje = "Minimun eight characters, 1 number and 1 capital letter";
    
        event.preventDefault();
        event.stopPropagation();
        $("#inputpassword-ok").hide();
        $("#tipoPassword").show();
    } else {
        mensaje = "Ok password";
    
        $("#inputpassword-ok").show();
        $("#tipoPassword").hide();
    }
    document.getElementById("tipoPassword").innerHTML = mensaje;
   
}


//FUNCION VERIFICAR REPETICION CONTRASEÑA
function verificar(event) {
    var repeat = document.getElementById("inputrepeatpass").value;
    var pass = document.getElementById("inputpassword").value;
    var mensaje;

    if (pass != repeat || repeat == "") {
        mensaje = "The text does not correspond to the password";
        event.preventDefault();
        event.stopPropagation();
        $("#inputrepeatpass-ok").hide();
        $("#repeat").show();
    } else {
        mensaje = "Ok";
        $("#inputrepeatpass-ok").show();
        $("#repeat").hide();
    }
    document.getElementById("repeat").innerHTML = mensaje;

}


//FUNCION AL HACER CLICK EN Botón 'Register' de tipo Submit del REGISTRO
function go(event){
    var nom = document.getElementById("inputname").value;
    var cognom = document.getElementById("inputsurname").value;
    var emailregistro = document.getElementById("emailr").value;

    var pass = document.getElementById("inputpassword").value;
    var contienenumero = /[0-9]/; //Expresion regular, al menos contiene 1 numero. Primera coincidencia
    var mayuscula = /[A-Z]/; //Expresion regular, al menos contiene una mayúscula. Primera coincidencia

    var repeat = document.getElementById("inputrepeatpass").value;

    var envia;



    if((nom != "" && cognom !="" && emailregistro !="" && repeat !="") && ((pass.length >= 8) || (pass.match(contienenumero)) || (pass.match(mayuscula))) && (repeat == pass)){
        envia = true;
    }else{
        event.preventDefault();
        envia = false;
    }
    return envia;
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