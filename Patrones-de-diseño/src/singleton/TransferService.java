package singleton;

public class TransferService {

    private Logger logger = Logger.getInstance();

    public void realizarTransferencia(double monto) {
        logger.log("Transferencia realizada por $" + monto);
    }
}