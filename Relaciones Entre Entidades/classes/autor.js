class Autor {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    mostrarInfo() {
        console.log(`Autor: ${this.nombre}`);
    }
}

module.exports = Autor;