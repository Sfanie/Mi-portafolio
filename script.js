

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

