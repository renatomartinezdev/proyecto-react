# Gestion de Clientes (CRUD)

Este proyecto es una aplicación web de gestión de clientes que te permite realizar operaciones básicas de CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de clientes. Está desarrollado utilizando las siguientes tecnologías:

React: Un framework de JavaScript de código abierto que te permite crear interfaces de usuario interactivas y escalables.
React Router DOM: Una biblioteca que facilita la navegación y la gestión de rutas en una aplicación React de una sola página (SPA).
Tailwind CSS: Un framework CSS utilitario que te permite diseñar rápidamente interfaces de usuario modernas y responsivas mediante la aplicación de clases predefinidas.

La aplicación utiliza JSON Server para simular una API falsa y almacenar los datos de los clientes en un archivo JSON. A través de la interfaz de usuario, puedes realizar las siguientes acciones:

Listar Clientes: Ver una lista de todos los clientes registrados en el sistema.
Agregar Nuevo Cliente: Agregar un nuevo cliente proporcionando la información requerida, como nombre, empresa, correo electrónico, etc.
Editar Cliente: Actualizar la información de un cliente existente, como modificar su nombre, correo electrónico u otros detalles.
Eliminar Cliente: Eliminar un cliente de la lista.
La aplicación está diseñada para ser intuitiva y fácil de usar, brindando una experiencia fluida para la gestión de clientes. Es ideal para proyectos que requieran un sistema básico de gestión de datos de clientes.

## Instalación

1. **Instalar Tailwind CSS**:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


2. **Instalar React Router Dom:**

npm install react-router-dom

3. **Instalar Json Server ejecutar json server**

npm install -g json-server
json-server --watch db.json

## Uso

A continuación, se detallan los pasos para utilizar la aplicación:

1- Clona este repositorio en tu máquina local.
2- Abre la carpeta del proyecto en tu editor de código.
3- Instala las dependencias necesarias ejecutando el comando npm install.
4- Ejecuta el comando npm run dev para iniciar la aplicación en tu navegador.
