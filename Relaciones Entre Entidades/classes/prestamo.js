class Prestamo {
    constructor(id, usuarioId, libroId) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.libroId = libroId;
    }

    mostrarInfo() {
        console.log(
            `Prestamo -> Usuario ${this.usuarioId} | Libro ${this.libroId}`
        );
    }
}

module.exports = Prestamo;