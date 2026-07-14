# 🐍 TP: OBJETOS HEREDADOS

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=flat&logo=python&logoColor=white)
![POO](https://img.shields.io/badge/Paradigma-POO-blueviolet?style=flat)

> 📚 **Materia:** Programación Orientada a Objetos
> 💻 **Lenguaje:** Python

---

## 📖 ¿De qué trata este TP?

En Python, toda clase hereda automáticamente de `object`, aunque no lo
escribamos. Cualquier clase que creemos ya
viene con métodos de fábrica como `__str__`, `__repr__`, `__eq__` y
`__hash__`.

Ese comportamiento por defecto es genérico y poco
útil: imprime direcciones de memoria en vez de datos, y compara objetos
por identidad en vez de por contenido. 

Este TP consiste en:

1. 👤 Crear una clase `Persona`.
2. 🔍 Observar cómo se comportan esos métodos antes de tocar nada.
3. ✏️ Sobrescribirlos para que la clase se comporte de forma útil.
4. 🧠 Reflexionar sobre las diferencias mediante preguntas conceptuales.


---

## 🗂️ Estructura del repositorio

```
📦 tp-metodos-object
 ┣ 📄 README.md                    → Este archivo
 ┣ 🐍 persona.py                   → Código fuente del TP
 ┗ 📝 Preguntas.md                 → Respuestas a las preguntas conceptuales
```

---
```

### ▶️ Cómo ejecutarlo

```bash
python persona.py
```

---

## 📊 Resultados obtenidos

### 🔴 Antes de sobrescribir los métodos

| Prueba | Resultado |
|---|---|
| `print(p1)` / `str(p1)` | `<__main__.Persona object at 0x...>`  |
| `repr(p1)` | `<__main__.Persona object at 0x...>`  |
| `p1 == p2` | `False`  |
| `hash(p1)` | Distinto para `p1` y `p2` |
| `type(p1)` | `<class '__main__.Persona'>` |
| `dir(p1)` | Atributos propios + métodos heredados de `object` |

### 🟢 Después de sobrescribir los métodos

| Prueba | Resultado |
|---|---|
| `print(p1)` / `str(p1)` | `Juan, 30 años, juan@mail.com`  |
| `repr(p1)` | `Persona(nombre='Juan', edad=30, email='juan@mail.com')` |
| `p1 == p2` | `True`  |
| `hash(p1)` | Igual para `p1` y `p2`  |
| `type(p1)` | `<class '__main__.Persona'>` (no cambia) |
| `dir(p1)` | Igual que antes (cambia la implementación, no los nombres) |

---


