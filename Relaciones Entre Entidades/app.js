const db = require('./database');

const Autor = require('./classes/Autor');
const Libro = require('./classes/Libro');
const Usuario = require('./classes/Usuario');
const Prestamo = require('./classes/Prestamo');


// CREAR OBJETOS

const autor1 = new Autor(1, "Gabriel García Márquez");

const libro1 = new Libro(
    1,
    "Cien años de soledad",
    autor1.id
);

const usuario1 = new Usuario(
    1,
    "Facundo"
);

const prestamo1 = new Prestamo(
    1,
    usuario1.id,
    libro1.id
);


// MOSTRAR FUNCIONAMIENTO

autor1.mostrarInfo();

libro1.mostrarInfo();

usuario1.mostrarInfo();

prestamo1.mostrarInfo();


// GUARDAR EN SQLITE

db.run(
    `INSERT INTO autores(nombre) VALUES(?)`,
    [autor1.nombre]
);

db.run(
    `INSERT INTO libros(titulo, autorId) VALUES(?, ?)`,
    [libro1.titulo, libro1.autorId]
);

db.run(
    `INSERT INTO usuarios(nombre) VALUES(?)`,
    [usuario1.nombre]
);

db.run(
    `INSERT INTO prestamos(usuarioId, libroId) VALUES(?, ?)`,
    [prestamo1.usuarioId, prestamo1.libroId]
);


// MOSTRAR DATOS RELACIONADOS

db.all(`
    SELECT usuarios.nombre AS usuario,
           libros.titulo AS libro
    FROM prestamos
    JOIN usuarios ON prestamos.usuarioId = usuarios.id
    JOIN libros ON prestamos.libroId = libros.id
`, [], (err, rows) => {

    console.log("\nPRESTAMOS:");

    rows.forEach((row) => {
        console.log(
            `${row.usuario} pidió "${row.libro}"`
        );
    });

});