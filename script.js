/*

Archivo de JS que contiene un script (conjunto de líneas de código que normalmente)

*/

const edad = 25;











/* Variable

Constantes: const
variable que pueden cambiar : let

tipos de variables

Número
Palabra
Booleano
Funcion
Objeto
Arreglo de elementos

*/









let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(3000)
    .deleteAll()
    .typeString('<strong>Desarrolladora Frontend JR</strong>')
    .pauseFor(3000)
    .start();

