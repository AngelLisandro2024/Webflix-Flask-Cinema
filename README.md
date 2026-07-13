# 🎬 WEBFLIX - Portal de Películas con Flask

WEBFLIX es una aplicación web dinámica para la visualización y gestión de un catálogo de películas. Este proyecto sirve como un excelente ejemplo de integración backend-frontend utilizando Python con el microframework Flask, renderizado dinámico del lado del servidor (SSR) mediante Jinja2 y maquetación responsiva con Bootstrap.

---

## 🚀 Características del Proyecto

* **🐍 Backend con Flask:** Servidor ligero estructurado en Python que gestiona el enrutamiento lógico de la aplicación, incluyendo la página principal (`/principal`) y el portal de inicio de sesión (`/logeo`).
* **🧩 Arquitectura Modular (Jinja2):** Uso eficiente de un archivo base común (`base.html`) para heredar estructuras repetitivas (cabeceras, menús de navegación, enlaces de Bootstrap, jQuery y scripts), inyectando dinámicamente el contenido de cada vista mediante bloques (`{% block %}`).
* **🎴 Interfaz Estilo Streaming (WEBFLIX):** Diseño frontend inspirado en plataformas de entretenimiento, organizando el contenido en secciones temáticas con tarjetas dinámicas (`.card`) y una barra de navegación fija y responsiva.
* **⚡ Interactividad del Cliente:** Integración de **jQuery** para capturar eventos en el DOM (como rutas dinámicas y parámetros de modales de confirmación) y mejorar la respuesta de la interfaz de usuario.

---

## 🛠️ Stack Tecnológico

* **Backend:** Python / Flask Framework
* **Plantillas:** Jinja2 (Motor de renderizado)
* **Frontend:** HTML5 / CSS3 / Bootstrap / FontAwesome (Iconos)
* **Scripting:** JavaScript / jQuery

---

## 📁 Estructura del Repositorio

La arquitectura sigue el patrón estándar de una aplicación Flask:
* `app.py`: Archivo principal encargado de inicializar el servidor y definir las rutas de navegación.
* `templates/`: Carpeta que contiene las vistas HTML del proyecto, divididas de forma modular para una mejor organización de las interfaces de usuario.
* `static/`: Contiene los recursos estáticos del portal estructurados en hojas de estilo personalizadas (`css/`), scripts interactivos (`js/`) e imágenes del catálogo (`img/`).

---

## 👨‍💻 Sobre el Desarrollador
**Ángel Fernández** | **T.S.U en Informática** Desarrollador enfocado en la creación de soluciones web estructuradas, combinando la versatilidad de Python en el backend con interfaces de usuario interactivas y funcionales.
