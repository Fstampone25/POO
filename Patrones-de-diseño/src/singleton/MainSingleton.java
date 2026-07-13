package singleton;

public class MainSingleton {
    public static void main(String[] args) {

        LoginService loginService = new LoginService();
        TransferService transferService = new TransferService();
        AccountService accountService = new AccountService();

        loginService.iniciarSesion("Facundo");
        transferService.realizarTransferencia(50000);
        accountService.consultarSaldo();
        loginService.cerrarSesion("Facundo");


        boolean mismaInstancia =
                Logger.getInstance() == Logger.getInstance();

        System.out.println();
        System.out.println("¿Todos usan la misma instancia de Logger? " + mismaInstancia);
    }
}