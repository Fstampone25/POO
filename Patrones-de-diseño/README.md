# Patrones de Diseño

Trabajo práctico de la materia **POO**, implementando dos patrones de diseño creacionales en Java: **Builder** y **Singleton**.

## 📋 Consigna

### Patrón Builder
Desarrollar un sistema para generar cuentas bancarias, evitando constructores con demasiados parámetros mediante el uso del patrón Builder.

### Patron Singleton
Desarrollar un sistema de logs para una aplicación bancaria, garantizando que exista una única instancia del registrador de eventos durante toda la ejecución.

## 📂 Estructura del proyecto

```
Patrones-de-diseño/
├── src/
│   ├── builder/
│   │   ├── TipoCuenta.java
│   │   ├── Moneda.java
│   │   ├── CuentaBancaria.java
│   │   ├── CuentaBancariaBuilder.java
│   │   └── MainBuilder.java
│   └── singleton/
│       ├── Logger.java
│       ├── LoginService.java
│       ├── TransferService.java
│       ├── AccountService.java
│       └── MainSingleton.java
├── bin/  
├── UML/ 
|   |──UML.png
|
├── Capturas/ 
|   |──captura1.png
|   |──captura2.png
|   
|
├── .gitignore
└── README.md
```

## 🏦 Patrón Builder

**Problema que resuelve:** una cuenta bancaria tiene 8 datos posibles (titular, DNI, tipo de cuenta, moneda, tarjeta de débito, chequera, home banking, límite de extracción). Un constructor con 8 parámetros es difícil de leer y propenso a errores de orden. El patrón Builder permite construir la cuenta paso a paso, con nombres claros, y con valores opcionales por defecto.

- `CuentaBancaria`: clase inmutable, con constructor privado — solo se puede crear a través del Builder.
- `CuentaBancariaBuilder`: permite encadenar métodos (`conTipoCuenta()`, `conMoneda()`, etc.) y finalizar con `build()`.
- `TipoCuenta` y `Moneda`: enums que evitan errores de tipeo en los valores posibles.

**Ejecutar:**
```bash
javac -d bin src/builder/*.java
java -cp bin builder.MainBuilder
```

Muestra por consola los datos de dos cuentas: un cliente básico (Caja de Ahorro, ARS, Home Banking, Tarjeta de débito) y un cliente premium (Cuenta Corriente, USD, Home Banking, Tarjeta, Chequera, limite de $2.000.000).

## 🔐 Patrón Singleton

**Problema que resuelve:** toda la aplicación necesita registrar eventos (login, transferencias, consultas) usando siempre el mismo objeto Logger, sin crear múltiples instancias sueltas.
.

**Ejecutar:**
```bash
javac -d bin src/singleton/*.java
java -cp bin singleton.MainSingleton
```

Salida obtenida:
```
[INFO] Usuario Facundo inició sesión
[INFO] Transferencia realizada por $50000
[INFO] Consulta de saldo realizada
[INFO] Usuario Facundo cerró sesión

¿Todos usan la misma instancia de Logger? true
```

## 📐 Diagramas UML

Diagrama de patron Builder, disponible en la carpeta `UML/`, mostrando atributos, métodos, visibilidad y las relaciones de dependencia entre las clases.


---

Trabajo práctico desarrollado para Programación Orientada a Objetos.