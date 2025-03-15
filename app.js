// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];


function agregarAmigo() {
console.log(listaAmigosSorteados)
    let amigo = document.querySelector('#amigo').value;
    if (amigo != '') {
        listaAmigosSorteados.push(amigo);
        let li = document.createElement('li');
        li.textContent = amigo;
        document.querySelector('#listaAmigos').appendChild(li);
        limpiarCaja();
    }else {
        alert('Ingrese un nombre');
    }

}

function sortearAmigo() {
    if (listaAmigosSorteados.length === 0) {
        alert('Agregue al menos un amigo antes de sortear.');
        return;
    }
    
    let indice = Math.floor(Math.random() * listaAmigosSorteados.length);
    let amigoSorteado = listaAmigosSorteados[indice];

    let resultadoLista = document.querySelector('#resultado');
    resultadoLista.innerHTML = ''; // Limpiar resultados previos
    let li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: 🎉 ${amigoSorteado} 🎉`;
    limpiarLista();
    resultadoLista.appendChild(li);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarLista() {
    listaAmigosSorteados.length = 0; // Borra la lista de forma eficiente
    document.querySelector('#listaAmigos').innerHTML = '';
}

