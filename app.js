let amigos = [];

function agregarAmigo() {
    let nombreEntrada = document.getElementById("amigo");
    let nombre = nombreEntrada.value.trim();
    
    if (nombre === "") {
        alert("Por favor, digita un nombre antes de añadir.");
        return;
    }
    
    amigos.push(nombre);
    nombre.value = ""; // Limpiar el input
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    amigos.forEach((nombre) => {
        let nombreLista = document.createElement("li");
        nombreLista.textContent = nombre;
        lista.appendChild(nombreLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes añadir al menos un amigo antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}