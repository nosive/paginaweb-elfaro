function fechayhora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-CL');
    const hora = ahora.toLocaleTimeString('es-CL');
    document.getElementById("fechahora").innerHTML = fecha + " " + hora;
}

setInterval(fechayhora, 1000);

function agregarArticulo() {
    const titulo = document.getElementById("tituloArticulo").value;
    const texto = document.getElementById("textoArticulo").value;

    if (titulo === "" || texto === "") {
        alert("Completa todos los campos");
        return;
    }

    const contenedor = document.getElementsByClassName("articulos")[0];

    const nuevo = document.createElement("div");
    nuevo.className = "col-md-4";

    nuevo.innerHTML =
        "<div class='card mb-3'>" +
        "<div class='card-body'>" +
        "<h5>" + titulo + "</h5>" +
        "<p><b>Categoría:</b> General</p>" +
        "<p>" + texto + "</p>" +
        "</div></div>";

    contenedor.appendChild(nuevo);

    document.getElementById("tituloArticulo").value = "";
    document.getElementById("textoArticulo").value = "";

    actualizarContadores();
}

function actualizarContadores() {
    const totalInicio = document.querySelectorAll("#inicio .articulos .card").length;
    document.getElementById("contador-inicio").textContent = totalInicio;

    const totalDeporte = document.querySelectorAll("#deporte .articulos .card").length;
    document.getElementById("contador-deporte").textContent = totalDeporte;

    const totalNegocios = document.querySelectorAll("#negocios .articulos .card").length;
    document.getElementById("contador-negocios").textContent = totalNegocios;
}

window.onload = actualizarContadores;
