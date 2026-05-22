const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./biblioteca.db', (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Base de datos conectada');
    }
});

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS autores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS libros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            autorId INTEGER,
            FOREIGN KEY (autorId) REFERENCES autores(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS prestamos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuarioId INTEGER,
            libroId INTEGER,
            FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
            FOREIGN KEY (libroId) REFERENCES libros(id)
        )
    `);

});

module.exports = db;