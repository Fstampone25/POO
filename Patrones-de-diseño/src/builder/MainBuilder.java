package builder;

public class MainBuilder {
    public static void main(String[] args) {

      
        CuentaBancaria clienteBasico = new CuentaBancariaBuilder("Juan Pérez", "30111222")
                .conTipoCuenta(TipoCuenta.CAJA_AHORRO)
                .conMoneda(Moneda.ARS)
                .conHomeBanking(true)
                .conTarjetaDebito(true)
                .build();

        clienteBasico.mostrarDatos();

      
        CuentaBancaria clientePremium = new CuentaBancariaBuilder("María López", "28555999")
                .conTipoCuenta(TipoCuenta.CUENTA_CORRIENTE)
                .conMoneda(Moneda.USD)
                .conHomeBanking(true)
                .conTarjetaDebito(true)
                .conChequera(true)
                .conLimiteExtraccion(2000000)
                .build();

        clientePremium.mostrarDatos();
    }
}