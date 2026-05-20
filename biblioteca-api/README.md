# Biblioteca API

API REST desarrollada con Node.js, Express, Sequelize y SQLite para la gestión de libros, socios y prestamos de una biblioteca, implementando arquitectura MVC y reglas de negocio.

---

# Tecnologías utilizadas

* Node.js
* Express.js
* Sequelize ORM
* SQLite
* Docker
* Nodemon
* Postman

---

# Funcionalidades

La API permite:

* Gestionar libros
* Gestionar socios
* Registrar préstamos
* Registrar devoluciones
* Validar reglas de negocio
* Gestionar stock de libros
* Consultar préstamos activos

---

# Arquitectura MVC

El proyecto utiliza una arquitectura MVC adaptada para APIs REST.

## Model

Los modelos representan las entidades de la base de datos utilizando Sequelize.

## Controller

Los controladores contienen la lógica de negocio y validaciones.

## Routes

Las rutas definen los endpoints HTTP de la API.

## View

La vista está representada por las respuestas JSON consumidas mediante herramientas como Postman.

---

# Reglas de negocio implementadas

* Un socio no puede tener más de 3 préstamos activos.
* No se puede prestar un libro sin stock disponible.
* Un socio bloqueado no puede solicitar préstamos.
* Cuando se registra un préstamo se descuenta automáticamente el stock del libro.
* Cuando se devuelve un libro se incrementa nuevamente el stock.

---

# Estructura del proyecto

```text
biblioteca-api/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── librosController.js
│   ├── sociosController.js
│   └── prestamosController.js
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
├── database/
│   ├── biblioteca.sqlite
│   └── database.sql
│
├── screenshots/
│   ├── libros/
│   ├── prestamos/
│   └── socios/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── server.js
```

---

# Instalación local


## Instalar dependencias

```bash
npm install
```

---

## Ejecutar servidor

```bash
npm run dev
```

---

# Ejecución con Docker

## Construir contenedor

```bash
docker compose build
```

---

## Ejecutar contenedor

```bash
docker compose up
```

---

# URL base

http://localhost:3000


---

# Endpoints

# Libros

| Metodo | Endpoint    | Descripción              |
| ------- | ------------ | ------------------------ |
| GET     | /libros      | Obtener todos los libros |
| GET     | /libros/:id  | Obtener libro por ID     |
| POST    | /libros      | Crear libro              |
| PUT     | /libros/:id  | Actualizar libro         |
| DELETE  | /libros/:id  | Eliminar libro           |

---

# Socios

| Método | Endpoint    | Descripción              |
| ------- | ------------ | ------------------------ |
| GET     | /socios      | Obtener todos los socios |
| GET     | /socios/:id  | Obtener socio por ID     |
| POST    | /socios      | Crear socio              |
| PUT     | /socios/:id  | Actualizar socio         |
| DELETE  | /socios/:id  | Eliminar socio           |

---

# Préstamos

| Método | Endpoint                | Descripción                 |
| ------- | ----------------------- | --------------------------- |
| GET     | /prestamos              | Obtener todos los préstamos |
| GET     | /prestamos/:id          | Obtener préstamo por ID     |
| POST    | /prestamos              | Registrar préstamo          |
| PUT     | /prestamos/:id/devolver | Registrar devolución        |
| DELETE  | /prestamos/:id          | Eliminar préstamo           |


---

# Base de datos

La aplicación utiliza SQLite junto con Sequelize ORM.

Las tablas se generan automáticamente mediante:

```js
sequelize.sync()
```

También se incluye el archivo:

database.sql, con el script de creación de tablas.

---

# Script SQL incluido

El proyecto incluye:

```text
database.sql
```

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



