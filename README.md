¿Qué es React?
React es una librería de JavaScript que sirve para crear páginas web interactivas, como las que usan Netflix, Instagram o WhatsApp Web.
¿Cómo funciona React?
React trabaja con componentes.
Un componente es como una pieza de LEGO.
Muchas piezas pequeñas juntas forman una aplicación grande.
Cada componente puede tener sus propios datos (estado).
Se necesitaba :
Node.js instalado
Saber un poco de JavaScript
Usar npm o yarn

¿Cómo crear un proyecto?
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev

Estructura básica:
public:imágenes y archivos estáticos
src: donde escribes el código
App.jsx:componente principal


useEffect:
useEffect(() => {
  console.log("Cambió el valor");
}, [valor]);

Eventos (onClick)
<button onClick={handleClick}>
  Click aquí
</button>
Con parámetros:
<button onClick={() => handleClick(producto)}>
  Agregar
</button>
No hagas esto:
<button onClick={handleClick(producto)}>

