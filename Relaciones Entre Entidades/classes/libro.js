class Libro {
    constructor(id, titulo, autorId) {
        this.id = id;
        this.titulo = titulo;
        this.autorId = autorId;
    }

    mostrarInfo() {
        console.log(`Libro: ${this.titulo}`);
    }
}

module.exports = Libro;