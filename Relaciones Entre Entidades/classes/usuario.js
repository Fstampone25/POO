class Usuario {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    mostrarInfo() {
        console.log(`Usuario: ${this.nombre}`);
    }
}

module.exports = Usuario;