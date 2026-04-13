// Función que muestra la fecha y hora actual en la página
function fechayhora () {
    const ahora = new Date();  // Obtenemos la fecha y hora actual

    const fecha = ahora.toLocaleDateString('es-CL'); // Convertimos la fecha al formato de Chile

    const hora = ahora.toLocaleTimeString('es-CL'); // Convertimos la hora al formato de Chile    // Insertamos la fecha y hora en el elemento con id "fechahora"
    document.getElementById("fechahora").innerHTML = fecha + " " + hora;
}



// Ejecutamos la función cada 1 segundo
setInterval(fechayhora, 1000);


// Función que agrega un nuevo artículo
function agregarArticulo() {

    // Obtenemos los valores ingresados en el formulario
    const titulo = document.getElementById("tituloArticulo").value;
    const texto = document.getElementById("textoArticulo").value;

    // Validamos que los campos no esten vacios
    if (titulo === "" || texto === "") {
        alert("Completa todos los campos");
        return;
    }

    // Seleccionamos el contenedor donde se agregan los articulos
    const contenedor = document.getElementsByClassName("articulos")[0];

    // Creamos un <article>
    const nuevo = document.createElement("article");

    // Insertamos el contenido del articulo
    nuevo.innerHTML =
        "<h3>" + titulo + "</h3>" +
        "<p><b>Categoría:</b> General</p>" +
        "<p>" + texto + "</p>";

    // Agregamos el nuevo articulo al contenedor
    contenedor.appendChild(nuevo);

    // Limpiamos los campos del formulario
    document.getElementById("tituloArticulo").value = "";
    document.getElementById("textoArticulo").value = "";
    actualizarContadores();
}

function actualizarContadores() {

   
    const inicio = document.querySelector("#inicio .articulos article").parentNode;
    const totalInicio = document.querySelectorAll("#inicio .articulos article").length;
    document.getElementById("contador-inicio").textContent = totalInicio;

    // DEPORTES
    const totalDeporte = document.querySelectorAll("#deporte .articulos article").length;
    document.getElementById("contador-deporte").textContent = totalDeporte;

    // NEGOCIOS
    const totalNegocios = document.querySelectorAll("#negocios .articulos article").length;
    document.getElementById("contador-negocios").textContent = totalNegocios;
}


window.onload = actualizarContadores;
