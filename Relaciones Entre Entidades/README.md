
# 📚 SISTEMA DE BIBLIOTECA 📚

### Proyecto desarrollado con Programación Orientada a Objetos + SQLite

---

# 📖 Descripción

Este proyecto consiste en un pequeño sistema de biblioteca desarrollado utilizando **JavaScript**, **Node.js** y **SQLite**.

El objetivo principal es aplicar conceptos de:

- ✅ Programación Orientada a Objetos
- ✅ Relaciones entre clases
- ✅ Persistencia de datos
- ✅ Uso de SQLite
- ✅ Manipulación de objetos
- ✅ Organización modular del codigo

El sistema permite registrar autores, libros, usuarios y préstamos, mostrando cómo interactúan las distintas entidades entre sí.

---

# 🚀 Tecnologias utilizadas

| Tecnología | Uso |
|---|---|
| 🟨 JavaScript | Lenguaje principal |
| 🟩 Node.js | Entorno de ejecución |
| 🟦 SQLite | Base de datos |
| 📦 sqlite3 | Librería de conexión |

---

# 🧠 Conceptos aplicados

## ✅ Programación Orientada a Objetos

Se utilizaron:

- Clases
- Objetos
- Constructores
- Métodos
- Encapsulamiento
- Relaciones entre entidades

---

# 🏗️ Estructura del proyecto


biblioteca/
│
├── app.js
├── database.js
├── package.json
├── biblioteca.db
│
├── classes/
│   ├── Autor.js
│   ├── Libro.js
│   ├── Usuario.js
│   └── Prestamo.js
```

---

# 🧩 Clases del sistema

## 👨‍💼 Autor

Representa los autores de los libros.

### Atributos

- id
- nombre


## 📘 Libro

Representa un libro disponible en la biblioteca.



---

## 👤 Usuario

Representa las personas que utilizan la biblioteca.


---

## 📄 Prestamo

Representa el préstamo de un libro a un usuario.




---

# 🔗 Relaciones entre entidades

## 📚 Autor → Libro

Un autor puede tener varios libros.

---

## 📘 Libro → Autor

Cada libro pertenece a un autor.

---

## 👤 Usuario → Prestamo

Un usuario puede realizar varios préstamos.

---

## 📄 Prestamo → Libro

Cada préstamo relaciona un usuario con un libro.

---

# 🗄️ Base de datos SQLite

El proyecto utiliza SQLite para guardar la información de manera persistente.

## 📋 Tablas creadas

- autores
- libros
- usuarios
- prestamos

---

# ⚙️ Instalación

## 2️⃣ Instalar dependencias


npm install

---

## 3️⃣ Ejecutar el programa


node app.js


---

# 💻 Ejemplo de funcionamiento


Base de datos conectada

Autor: Gabriel García Márquez
Libro: Cien años de soledad
Usuario: Facundo
Prestamo -> Usuario 1 | Libro 1

PRESTAMOS:
Facundo pidio "Cien años de soledad"


---

# ✨ Funcionalidades

✅ Crear autores  
✅ Crear libros  
✅ Crear usuarios  
✅ Registrar préstamos  
✅ Relacionar entidades  
✅ Guardar datos en SQLite  
✅ Mostrar resultados por consola  
✅ Organización modular del código  

---

# 🎯 Objetivo del proyecto

Comprender cómo funcionan las relaciones entre clases dentro de un sistema real utilizando Programacion Orientada a Objetos y persistencia de datos.

---

# 👨‍💻 Autor

## Facundo Stampone



