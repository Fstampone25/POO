package builder;

public class CuentaBancariaBuilder {

    
    String nombreTitular;
    String dni;
    TipoCuenta tipoCuenta;
    Moneda moneda;
    boolean tarjetaDebito = false;  
    boolean chequera = false;       
    boolean homeBanking = false;    
    double limiteExtraccion = 0;

    public CuentaBancariaBuilder(String nombreTitular, String dni) {
        this.nombreTitular = nombreTitular;
        this.dni = dni;
    }

    public CuentaBancariaBuilder conTipoCuenta(TipoCuenta tipoCuenta) {
        this.tipoCuenta = tipoCuenta;
        return this;
    }

    public CuentaBancariaBuilder conMoneda(Moneda moneda) {
        this.moneda = moneda;
        return this;
    }

    public CuentaBancariaBuilder conTarjetaDebito(boolean tarjetaDebito) {
        this.tarjetaDebito = tarjetaDebito;
        return this;
    }

    public CuentaBancariaBuilder conChequera(boolean chequera) {
        this.chequera = chequera;
        return this;
    }

    public CuentaBancariaBuilder conHomeBanking(boolean homeBanking) {
        this.homeBanking = homeBanking;
        return this;
    }

    public CuentaBancariaBuilder conLimiteExtraccion(double limiteExtraccion) {
        this.limiteExtraccion = limiteExtraccion;
        return this;
    }

    public CuentaBancaria build() {
        return CuentaBancaria.crear(this);
    }
}