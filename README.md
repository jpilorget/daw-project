![header](doc/header.png)

# Desarrollo de Aplicaciones Web
## Carrera de Especialización en Internet de las Cosas (CEIoT)

### Introducción

A la hora de desplegar arquitecturas de [IoT](https://es.wikipedia.org/wiki/Internet_de_las_cosas) (Internet de las Cosas) es fudamental tener la capacidad de visualizar el estado de las "cosas" interconectadas. Este proyecto permite desplegar una aplicación web para la gestión y visualización de dispositivos. 

Este proyecto forma parte del trabajo final de la materia Desarrollo de Aplicaciones Web de la CEIoT a cargo de Agustín Bassi, Brian Ducca y Santiago Germino. Para más información acerca del proyecto hacer [clic aquí](https://github.com/ce-iot/daw-project-template/wiki).

### Arquitectura
En el siguiente diagrama se puede observar la arquitectura de aplicación: 

<img src="doc/architecture.png" width="640">

### Pre-requisitos

Para poder ejecutar el proyecto de manera correcta es necesario tener instalado:
- Docker ([ver aquí](https://docs.docker.com/get-docker/)).
- Docker Compose ([ver aquí](https://docs.docker.com/compose/install/))

### Instrucciones

Para desplegar los servicios de la arquitectura detallada previamente deberá:
1) Ejecutar el comando `docker-compose up`.
2) Ir al navegador y acceder a la interfaz web en la dirección `http://localhost:8000`.

En caso de que, al ejecutar por primera vez el comando `docker-compose up` el servidor de NodeJS no se pueda conectar a la base de datos, ejecutar el archivo `recycle-container.sh`. Dicho archivo elimina y vuelve a crear los servicios desplegados con el comando del paso 1.  

### Próximos pasos
Como desarrollos a futuro, se pretende incorporar:

- Incorporación de nuevos dispositivos.
- Eliminación de dispositivos.

### Autor
Juan Pablo Pilorget

### Licencia

Este proyecto se encuentra publicado bajo licencia GPLV3+. Ver archivo LICENCE para más información.

![footer](doc/footer.png)

