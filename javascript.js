function fechayhora () {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-CL');
    const hora = ahora.toLocaleTimeString('es-CL');

    document.getElementById("fechahora").innerHTML = fecha + " " + hora; 

    
}

fechayhora();   

setInterval(fechayhora, 1000); 


function agregarArticulo() {

    const titulo = document.getElementById("tituloArticulo").value;
    const texto = document.getElementById("textoArticulo").value;

    if (titulo === "" || texto === "") {
        alert("Completa todos los campos");
        return;
    }

    const contenedor = document.getElementsByClassName("articulos")[0];

    const nuevo = document.createElement("article");

    nuevo.innerHTML =
        "<h3>" + titulo + "</h3>" +
        "<p><b>Categoría:</b> General</p>" +
        "<p>" + texto + "</p>";

    contenedor.appendChild(nuevo);

    document.getElementById("tituloArticulo").value = "";
    document.getElementById("textoArticulo").value = "";
}

