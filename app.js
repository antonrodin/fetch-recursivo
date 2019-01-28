let indice = 1;
let contador = 0;

// Event Listener
document.querySelector('#acabar').addEventListener('click', e => {

    e.preventDefault();

    // Terminar el proceso
    clearTimeout(contador);

    // Mostrar finalizar
    console.log("Finalizar proceso");
});

document.querySelector('#empezar').addEventListener('click', e => {

    e.preventDefault();

    // Terminar el proceso
    contador = setTimeout(procesar, 2000);
    
    // Mostrar finalizar
    console.log("Empezar proceso");
});

function procesar() {
    fetch('https://jsonplaceholder.typicode.com/photos/' + indice)
        .then(response => response.json())
        .then(json => {

            // Mostrar foto por consola;
            console.log(json);

            // Indice
            indice++;

            // Llamada recursiva a la funcion;
            contador = setTimeout(procesar, 2000);
        });
};