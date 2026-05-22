# 🖥️ Cuestionario Practico - Máquinas Virtuales, Docker y GitHub Actions

## 👨‍🎓 Alumno: Facundo Stampone
## 📅 Fecha:

---

# 💻 Máquinas Virtuales

## 1. ¿Qué es una máquina virtual y para qué se utiliza?

Una maquina virtual es un sistema operativo virtualizado que funciona dentro de una computadora física.  
Se utiliza para probar sistemas, ejecutar aplicaciones aisladas y simular entornos.

---

## 2. Nombrá dos diferencias entre una máquina virtual y una computadora física.

- La máquina virtual depende del hardware de otra computadora.
- Una computadora física tiene recursos reales dedicados.

---

## 3. ¿Qué función cumple un hipervisor?

El hipervisor administra las máquinas virtuales y permite que compartan los recursos del hardware físico.

---

## 4. Mencioná dos programas que permitan crear máquinas virtuales.

- VirtualBox
- VMware Workstation

---

## 5. ¿Qué significa asignar 4 GB de RAM a una máquina virtual?

Significa reservar 4 GB de memoria RAM de la computadora física para que la máquina virtual pueda utilizarlos.

---

## 6. ¿Qué es una imagen ISO y para qué sirve?

Es un archivo que contiene una copia completa de un sistema operativo o disco.  
Sirve para instalar sistemas operativos.

---

## 7. ¿Para qué se utiliza SSH al conectarse a una máquina virtual Linux?

SSH se utiliza para conectarse remotamente y administrar una máquina Linux mediante terminal.

---

## 8. Escribí el comando para conectarte por SSH al usuario `admin` en la IP `192.168.1.50`


ssh admin@192.168.1.50


---

## 9. ¿Qué significa que una máquina virtual sea efímera?

Que puede eliminarse o reiniciarse sin conservar cambios permanentes.

---

## 10. ¿Qué ventaja tiene usar snapshots en una VM?

Permiten guardar el estado actual de la máquina y restaurarlo rápidamente si ocurre un error.

---

# 🐳 Docker

## 11. ¿Cuál es la diferencia entre imagen Docker y contenedor Docker?

- La imagen es una plantilla.
- El contenedor es una instancia en ejecución de esa imagen.

---

## 12. ¿Qué comando muestra los contenedores en ejecución?


docker ps


---

## 13. ¿Qué comando muestra todos los contenedores, incluso detenidos?


docker ps -a


---

## 14. ¿Qué comando se usa para descargar una imagen de Ubuntu?

docker pull ubuntu


---

## 15. ¿Qué comando crea y ejecuta un contenedor Ubuntu interactivo?


docker run -it ubuntu


---

## 16. ¿Qué significa mapear el puerto `8080:80`?

Significa que el puerto 8080 de la computadora anfitriona se conecta al puerto 80 del contenedor.

---

## 17. Nombrá tres estados posibles de un contenedor Docker.

- Running
- Exited
- Paused

---

## 18. ¿Qué comando detiene un contenedor llamado `webapp`?


docker stop webapp

---

## 19. ¿Qué comando elimina un contenedor llamado `mysql-db`?


docker rm mysql-db


---

## 20. Escribí un ejemplo simple de `docker run` con nginx exponiendo puerto 8080.


docker run -d -p 8080:80 nginx


---

# ⚙️ GitHub Actions

## 21. ¿Qué es GitHub Actions?

Es una herramienta de automatización de GitHub para ejecutar tareas como tests, builds y despliegues.

---

## 22. ¿Para qué sirve un archivo YAML en GitHub Actions?

Sirve para definir workflows y automatizaciones.

---

## 23. ¿En qué carpeta se guardan los workflows?


.github/workflows/


---

## 24. ¿Qué evento ejecuta un workflow cuando se hace push al repositorio?

El evento `push`.

---

## 25. ¿Qué hace la action `actions/checkout`?

Descarga el código del repositorio dentro del runner.

---

## 26. ¿Qué hace la action `actions/setup-node`?

Instala y configura Node.js en el entorno del workflow.

---

## 27. ¿Para qué sirve automatizar tests en CI/CD?

Para detectar errores automáticamente antes de desplegar el proyecto.

---

## 28. Escribí una estructura mínima de workflow con `push`.

```yaml
name: CI

on:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
```

---

## 29. ¿Qué ventaja tienen las runners efímeras?

Cada ejecución comienza en un entorno limpio y aislado.

---

## 30. ¿Qué pasaría si falla un test en el pipeline?

El workflow marcaría error y el pipeline fallaría.

---

# 🧪 Práctica

## 31. Escribí el comando para crear una carpeta llamada `proyecto_vm`.

```bash
mkdir proyecto_vm
```

---

## 32. Escribí el comando Linux para entrar en esa carpeta.

```bash
cd proyecto_vm
```

---

## 33. Escribí el comando para crear un archivo llamado `app.js`.

```bash
touch app.js
```

---

## 34. Escribí un Dockerfile mínimo usando Node.js.

```dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "app.js"]
```

---

## 35. Escribí un workflow de GitHub Actions que ejecute `npm install` y `npm test`.

```yaml
name: Node CI

on:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Clonar repositorio
        uses: actions/checkout@v4

      - name: Instalar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar tests
        run: npm test
```
