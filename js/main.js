
let txtNombre = document.getElementById("Name");
let txtNumero = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Se borraron los cambios")
    txtNombre.value= "";
    txtNumero.value= "";

}); // Botón de borrar

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML=""
    alertValidaciones.style.display="none";
    console.log("Se agregaron cosas a la lista");
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    
    if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista += "<li>Se debe escribir un producto válido.</li>";
        // alertValidacionesTexto.innerHTML= "Se debe escribir un nombre valido";
      alertValidaciones.style.display="block";
    }else{
        txtNombre.style.border="";
    }

    if (txtNumero.value.length==0){
        txtNumero.style.border="solid thin red";
        lista += "<li>Se debe escribir una cantidad válida.</li>";
        alertValidaciones.style.display="block";
        // alertValidacionesTexto.innerHTML= "Se debe escribir una cantidad valida";
    }else{
        txtNumero.style.border="";
    }
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
}); // Botón de agregar

txtNumero.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumero.value = txtNumero.value.trim();
}); //blur: sirve para que cuando quite el "foco" se active el evento

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
}); // Otro blur