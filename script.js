
document.getElementById("btnCambiarTexto").addEventListener("click", function() {
    let parrafo = document.getElementById("parrafo");
    parrafo.textContent = "✨ ¡Texto cambiado con éxito! ✨";
    parrafo.style.backgroundColor = "#ffeaa7";
    setTimeout(() => parrafo.style.backgroundColor = "", 500);
});


let botonesOcultar = document.getElementsByClassName("btnOcultar");
botonesOcultar[0].addEventListener("click", function() {
    document.getElementById("imagen").style.opacity = "0";
});


document.querySelector(".btnMostrar").addEventListener("click", function() {
    document.querySelector("#imagen").style.opacity = "1";
});


document.getElementById("btnAgregarElemento").addEventListener("click", function() {
    let lista = document.getElementById("lista");
    let nuevoItem = document.createElement("li");
    
    const actividades = ["🎵 Escuchar música", "📖 Leer un libro", "☕ Tomar café", "🧘 Meditar", "🎮 Jugar videojuegos"];
    let randomAct = actividades[Math.floor(Math.random() * actividades.length)];
    
    nuevoItem.textContent = randomAct;
    nuevoItem.style.opacity = "0";
    lista.appendChild(nuevoItem);
    
    setTimeout(() => nuevoItem.style.opacity = "1", 10);
});


document.getElementById("btnCambiarFondo").addEventListener("click", function() {
    let contenedores = document.getElementsByTagName("div");

    for (let div of contenedores) {
        if (div.id === "contenedor") {
            div.style.backgroundColor = "#fbe9f2";
        }
    }
});


document.getElementById("btnEliminarUltimo").addEventListener("click", function() {
    let lista = document.querySelector("#lista");
    if (lista.children.length > 0) {
        let ultimo = lista.lastElementChild;
        ultimo.style.opacity = "0";
        setTimeout(() => {
            if (lista.children.length > 0) {
                lista.removeChild(ultimo);
            }
        }, 300);
    }
});


document.getElementById("btnContarElementos").addEventListener("click", function() {
    let items = document.querySelectorAll("#lista li");
    alert(`📊 La lista tiene ${items.length} elementos.`);
});


document.getElementById("btnReset").addEventListener("click", function() {

    document.getElementById("parrafo").textContent = " Este es un párrafo de ejemplo.";
    document.getElementById("parrafo").style.backgroundColor = "";
    

    document.querySelector("#imagen").style.opacity = "1";
    
 
    document.querySelector("#contenedor").style.backgroundColor = "white";
    

    document.getElementById("lista").innerHTML = `
        <li> Hacer ejercicio</li>
        <li> Estudiar JavaScript</li>
        <li> Crear diseño bonito</li>
    `;
    

    alert(" ¡Todo ha vuelto a la normalidad! ");
});
