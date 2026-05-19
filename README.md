# Biblioteca API

API REST desarrollada con Node.js, Express, Sequelize y SQLite para la gestión de libros, socios y prestamos de una biblioteca.

---

# Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* SQLite
* Docker
* Nodemon

---

# Funcionalidades

La API permite:

* Gestionar libros
* Gestionar socios
* Registrar préstamos
* Registrar devoluciones
* Validar reglas de negocio

---

# Reglas de negocio implementadas

* Un socio no puede tener más de 3 préstamos activos.
* No se puede prestar un libro sin stock disponible.
* Un socio bloqueado no puede solicitar préstamos.
* Cuando se registra un préstamo se descuenta automáticamente el stock del libro.
* Cuando se devuelve un libro se incrementa nuevamente el stock.

---

# Estructura del proyecto


biblioteca-api/
│
├── models/
│   ├── Libro.js
│   ├── Socio.js
│   └── Prestamo.js
│
├── routes/
│   ├── libros.js
│   ├── socios.js
│   └── prestamos.js
│
│
|── screenshots/
│   ├── Libros
│   ├── Prestamos
│   └── Socios
│
|
|
|
├── Dockerfile
├── docker-compose.yml
├── database.js
├── database.sql
├── server.js
├── package.json
├── README.md
└── biblioteca.sqlite


---

# Ejecucion local


## Instalar dependencias


npm install


---

## Ejecutar servidor

npm run dev

---

# Ejecución con Docker


## Construir contenedor

docker compose build


---

## Ejecutar contenedor


docker compose up


---

# URL base

http://localhost:3000


---

# Endpoints

# Libros

| Metodo | Endpoint    | Descripcion              |
| ------ | ----------- | ------------------------ |
| GET    | /libros     | Obtener todos los libros |
| GET    | /libros/:id | Obtener libro por ID     |
| POST   | /libros     | Crear libro              |
| PUT    | /libros/:id | Actualizar libro         |
| DELETE | /libros/:id | Eliminar libro           |

---

# Socios

| Metodo | Endpoint    | Descripcion              |
| ------ | ----------- | ------------------------ |
| GET    | /socios     | Obtener todos los socios |
| GET    | /socios/:id | Obtener socio por ID     |
| POST   | /socios     | Crear socio              |
| PUT    | /socios/:id | Actualizar socio         |
| DELETE | /socios/:id | Eliminar socio           |

---

# Prestamos

| Metodo | Endpoint                | Descripcion                 |
| ------ | ----------------------- | --------------------------- |
| GET    | /prestamos              | Obtener todos los prestamos |
| GET    | /prestamos/:id          | Obtener préstamo por ID     |
| POST   | /prestamos              | Registrar préstamo          |
| PUT    | /prestamos/:id/devolver | Registrar devolución        |
| DELETE | /prestamos/:id          | Eliminar préstamo           |

---

# Ejemplos de uso

# Crear libro

## POST /libros

```json
{
  "titulo": "Harry Potter",
  "autor": "J.K Rowling",
  "stock": 5
}


---

# Crear socio

## POST /socios

.json
{
  "nombre": "Juan Perez",
  "bloqueado": false
}


---

# Crear prestamo

## POST /prestamos

.json
{
  "socioId": 1,
  "libroId": 1
}


---

# Respuesta de error

## Libro sin stock

.json
{
  "error": "No hay stock disponible"
}


---

# Base de datos

La aplicación utiliza SQLite junto con Sequelize.

Las tablas se generan automáticamente mediante:

.js
sequelize.sync()


Tambien se incluye el archivo:

database.sql
con el script de creacion de tablas.

---

# Script SQL incluido

El proyecto incluye:

database.sql

con la estructura de tablas:

* Libros
* Socios
* Prestamos

---

# Herramientas de prueba

La API fue probada utilizando:

* Postman
* Docker Desktop
* SQLite Browser

