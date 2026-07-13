package builder;

public class CuentaBancaria {

    private final String nombreTitular;
    private final String dni;
    private final TipoCuenta tipoCuenta;
    private final Moneda moneda;
    private final boolean tarjetaDebito;
    private final boolean chequera;
    private final boolean homeBanking;
    private final double limiteExtraccion;

    
    private CuentaBancaria(CuentaBancariaBuilder builder) {
        this.nombreTitular = builder.nombreTitular;
        this.dni = builder.dni;
        this.tipoCuenta = builder.tipoCuenta;
        this.moneda = builder.moneda;
        this.tarjetaDebito = builder.tarjetaDebito;
        this.chequera = builder.chequera;
        this.homeBanking = builder.homeBanking;
        this.limiteExtraccion = builder.limiteExtraccion;
    }

  
    static CuentaBancaria crear(CuentaBancariaBuilder builder) {
        return new CuentaBancaria(builder);
    }

    public void mostrarDatos() {
        System.out.println("===== DATOS DE LA CUENTA =====");
        System.out.println("Titular: " + nombreTitular);
        System.out.println("DNI: " + dni);
        System.out.println("Tipo de cuenta: " + tipoCuenta);
        System.out.println("Moneda: " + moneda);
        System.out.println("Tarjeta de débito: " + (tarjetaDebito ? "Sí" : "No"));
        System.out.println("Chequera: " + (chequera ? "Sí" : "No"));
        System.out.println("Home Banking: " + (homeBanking ? "Sí" : "No"));
        System.out.println("Límite de extracción: $" + limiteExtraccion);
        System.out.println("===============================");
    }
}