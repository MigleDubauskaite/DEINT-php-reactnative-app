# 🎌 Ghibli App - Catálogo de Cine

### 📖 Descripción
Aplicación móvil desarrollada en **React Native** para la consulta de la filmografía de Studio Ghibli. Ofrece una interfaz moderna tipo "Netflix" con navegación fluida, detalles técnicos de cada obra y una sección de soporte para el usuario.

### 🛠️ Tecnologías
* **Core:** React Native (Expo)
* **UI:** React Native Paper (Material Design)
* **Iconos:** Lucide-react-native
* **Navegación:** React Navigation (Stack + Bottom Tabs)
* **API:** [Studio Ghibli API](https://ghibliapi.vercel.app/films/)

### 🚀 Instalación
1. Descarga el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Inicia la app con `npx expo start`.

### 📂 Estructura del Proyecto
* `/src/screens`: Contiene las vistas (Home, Películas, Detalle y Ayuda).
* `/src/navigation`: Configuración de los navegadores Tab y Stack.
* `/assets`: Recursos gráficos (logos y banners).

### 🧠 Gestión de Estado
Se utiliza el hook **`useState`** para controlar:
* **Datos:** Almacenamiento del JSON recibido de la API.
* **UI:** Control de estados de carga (`loading`) y errores (`error`).
* **Efectos:** Hook **`useEffect`** para el consumo automático de datos al montar la pantalla.

### ⚠️ Gestión de Errores
* **Try/Catch:** Implementado en todas las peticiones asíncronas para capturar fallos de red.
* **Validación HTTP:** Comprobación de `res.ok` para detectar errores en el servidor (404, 500).
* **Feedback:** Renderizado condicional de mensajes de error amigables para el usuario.

### 🎨 Decisiones de Diseño
* **Responsividad:** Uso de la API **`Dimensions`** para calcular el ancho de tarjetas (`width * 0.44`) garantizando un diseño adaptable (Grid de 2 columnas).
* **Usabilidad:** Implementación de **Acordeones** en la sección de Ayuda para evitar la fatiga visual.
* **Estética:** Bordes redondeados (`borderRadius: 12`) y elevaciones para cumplir con las guías de Material Design.
* **Legibilidad:** Control de `lineHeight` y límites de texto (`numberOfLines`) para mantener una interfaz limpia.

---
*Elaborado por el alumnado - Proyecto de Desarrollo de Aplicaciones Multiplataforma.*