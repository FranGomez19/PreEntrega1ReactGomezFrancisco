# Ecommerce React-CoderHouse 
Francisco Gomez

### Github del proyecto
[github.com/FranGomez19/PreEntrega1ReactGomezFrancisco](https://github.com/FranGomez19/PreEntrega1ReactGomezFrancisco)

### Visualización del proyecto en Netlify
[leafy-halva-446fc5.netlify](https://leafy-halva-446fc5.netlify.app/)

## Descripción
Ecommerce React-CoderHouse es una aplicación de ecommerce desarrollada como parte del curso de React en CoderHouse. La aplicación permite a los usuarios explorar productos, filtrarlos por categorías, agregar productos al carrito y finalizar una compra simulada.

## Características
- Filtrado de productos por categoría.
- Carrito de compras persistente en la sesión actual.
- Visualización del total y cantidad de productos en el carrito.
- Integración con Firebase para almacenar y obtener datos de productos y órdenes.
- Funcionalidad de checkout con formulario de contacto.

## Instalación
Para instalar y ejecutar este proyecto localmente:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/FranGomez19/PreEntrega1ReactGomezFrancisco.git
    ```
2. Accede al directorio del proyecto:
    ```bash
    cd PreEntrega1ReactGomezFrancisco
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Ejecuta el proyecto:
    ```bash
    npm start
    ```

## Dependencias utilizadas
- **bootstrap**: ^5.3.3
- **firebase**: ^11.0.1
- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **react-router-dom**: ^6.26.2

## Estructura de Archivos
- `App.jsx`: Componente principal de la aplicación que gestiona las rutas principales y el proveedor del carrito.
- `NavBar.jsx`: Barra de navegación con botones para cada categoría y el ícono del carrito.
- `ItemListContainer.jsx`: Contenedor de la lista de productos, incluyendo filtros por categoría.
- `ItemDetailContainer.jsx`: Muestra los detalles de un producto seleccionado, con opciones para agregarlo al carrito.
- `Cart.jsx`: Vista del carrito de compras donde se listan los productos seleccionados y el total, con opción para finalizar la compra.
- `CheckOut.jsx`: Componente de checkout que contiene el formulario para que el usuario complete los datos de contacto y finalice la compra.
- `CartContext.jsx`: Contexto que maneja el estado global del carrito de compras.
- `firebase.js`: Archivo de configuración de Firebase y funciones para interactuar con Firestore.


## Firebase
Para la configuración de Firebase, asegúrate de configurar tu proyecto en la consola de Firebase y actualizar `firebaseConfig` en el archivo `firebase.js`.

## Licencia
Este proyecto es para fines educativos en CoderHouse.