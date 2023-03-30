
let txtNombre = document.getElementById("Name");
let txtNumero = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody")

let contadorProductos = document.getElementById("contadorProductos");
let totalProductos = document.getElementById("totalProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let isValid= true;
let idTimeout;
let precio = 0;
let contador = 0;
let totalEnProductos = 0;
let costoTotal = 0;

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Se borraron los cambios");
    txtNombre.value= "";
    txtNumero.value= "";
    cuerpoTabla[0].innerHTML="";
    contador = 0;
    totalEnProductos = 0;
    costoTotal = 0;
    contadorProductos.innerHTML="";
    productosTotal.innerHTML="";
    precioTotal.innerHTML="";

    localStorage.setItem("contadorProductos", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));

    

}); // Botón de borrar

function validarCantidad(){
    if (txtNumero.value.length==0){
        return false;
    }//if

    if (isNaN(txtNumero.value)){
        return false;
    }//if

    if (parseFloat(txtNumero.value)<=0){
        return false;
    }//if
    return true;
}

function getPrecio(){
   return Math.floor(Math.random() * 50 * 100) / 100;
};

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    isValid = true;
    console.log("Se agregaron cosas a la lista");
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    
    if (txtNombre.value.length<2){
        txtNombre.style.border="solid thin red";
        lista += "<li>Se debe escribir un producto válido.</li>";
        // alertValidacionesTexto.innerHTML= "Se debe escribir un nombre valido";
      alertValidaciones.style.display="block";
      isValid = false;
    }else{
        txtNombre.style.border="";
    }

    if (! validarCantidad()){
        txtNumero.style.border="solid thin red";
        lista += "<li>Se debe escribir una cantidad válida.</li>";
        alertValidaciones.style.display="block";
        // alertValidacionesTexto.innerHTML= "Se debe escribir una cantidad valida";
        isValid = false;
    }else{
        txtNumero.style.border="";
    }
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    idTimeout=setTimeout (function(){
        alertValidaciones.style.display="none";
    }, 5000);

    if (isValid) {
        
        precio = getPrecio();
        contador++;
        let row =  `<tr>
                        <th>${contador}</th>
                        <td>${txtNombre.value}</td>
                        <td>${txtNumero.value}</td>
                        <td>${"$"+precio}</td>
                    </tr>`;

    cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
    contadorProductos.innerText=contador;
    totalEnProductos += parseFloat(txtNumero.value);
    productosTotal.innerText= totalEnProductos;
    costoTotal += precio * parseFloat(txtNumero.value);
    precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("contadorProductos",contador );
    localStorage.setItem("totalEnProductos",totalEnProductos );
    localStorage.setItem("costoTotal",costoTotal.toFixed(2) );
    txtNombre.value="";
    txtNumero.value="";
    txtNombre.focus();
    }
   

     
}); // Botón de agregar

txtNumero.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumero.value = txtNumero.value.trim();
}); //blur: sirve para que cuando quite el "foco" se active el evento

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
}); // Otro blur