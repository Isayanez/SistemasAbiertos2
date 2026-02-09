# React - GuitarLA

## ¿Qué es React?

React es una librería de **JavaScript** creada por **Facebook en 2013**, diseñada para construir **interfaces de usuario interactivas y dinámicas**.

Actualmente es utilizada por grandes empresas como:

* Netflix
* Instagram
* Airbnb
* WhatsApp Web

---

## Características principales

* Basada en **componentes reutilizables**.
* Cada componente puede manejar su propio **estado** mediante *Hooks*.
* Permite construir aplicaciones grandes a partir de **pequeñas piezas aisladas**.
* Facilita el mantenimiento y la **escalabilidad** del código.

---

## Métodos de instalación

### Opción 1: Create React App (tradicional)
```bash
npx create-react-app mi-proyecto
cd mi-proyecto
npm start
```

### Opción 2: Vite (recomendado)
```bash
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev
```

---

## Atajos útiles

* **RFC** → Crea rápidamente un componente funcional.

---

## Hooks principales

### useState – Manejo de estado

Permite crear variables que, al cambiar, provocan el **re-renderizado** del componente.
```jsx
// variable        método para actualizar   valor inicial
const [customer, setCustomer] = useState({});
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);

// Actualizar estado
setTotal(total + 1);
```

**Nota importante:**
Los hooks **NO** pueden declararse dentro de condicionales ni ciclos.
```jsx
// INCORRECTO
if (auth) {
  const [modal, setModal] = useState(false);
}
```

---

### useEffect – Efectos secundarios

Permite ejecutar código cuando una dependencia cambia o cuando el componente se monta.
```jsx
useEffect(() => {
  setData(db);
}, [db]); // Se ejecuta cuando 'db' cambia

// Sincronizar carrito con localStorage
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])
```

---

## localStorage - Persistencia de datos

**localStorage** permite guardar datos en el navegador de forma permanente, incluso después de cerrar la pestaña.

Es útil para mantener información del usuario como el carrito de compras, preferencias o sesión.

Los datos se guardan como strings, por lo que es necesario usar `JSON.stringify()` para guardar y `JSON.parse()` para recuperar objetos o arrays.

---

## Manejo de eventos con onClick

Es importante entender cómo se ejecutan las funciones en los eventos.

### Sin parámetros
```jsx
<button onClick={handleClick}>
  Agregar al carrito
</button>
```

Se ejecuta **solo al hacer clic**.

---

### Ejecución inmediata (incorrecto)
```jsx
<button onClick={handleClick(guitar)}>
  Agregar al carrito
</button>
```

Se ejecuta inmediatamente al renderizar y puede provocar un bucle infinito.

---

### Con parámetros (correcto)
```jsx
<button onClick={() => handleClick(guitar)}>
  Agregar al carrito
</button>
```

Se ejecuta correctamente al hacer clic y permite pasar parámetros.

---

## Conceptos fundamentales

### Componentes

Los **componentes** son bloques reutilizables que representan partes de la interfaz.
Cada componente es una función que retorna JSX.

Sirven para dividir la aplicación en partes pequeñas y fáciles de mantener.

---

### Estado (useState)

El **estado** permite almacenar información que puede cambiar durante la ejecución de la aplicación, como los productos del carrito.
```jsx
const [cart, setCart] = useState([])
```

Cuando el estado cambia, React actualiza automáticamente la interfaz.

---

### Props

Las **props** permiten pasar información de un componente padre a uno hijo.

Se utilizan para compartir **datos y funciones** entre componentes.

---

### Destructuring

La **destructuración** permite extraer valores de objetos o arrays de forma más limpia y legible.

Se puede usar tanto en las props de los componentes como en variables dentro de las funciones.
```jsx
// Destructuring de objeto
const { name, image, description, price } = guitar

// Destructuring de props
export default function Card({ guitar, cart, setCart }) {
  // ...
}
```

---

### Método .map()

El método **.map()** se utiliza para recorrer arrays y renderizar listas de componentes de forma dinámica.

Es fundamental para mostrar productos o elementos del carrito.

**Importante:** Siempre incluir la prop `key` con un identificador único al usar `.map()`.

---

### Método .find()

Busca y retorna el **primer elemento** que cumple una condición específica.

Es útil para verificar si un producto ya existe en el carrito antes de agregarlo.

---

### Método .findIndex()

Retorna el **índice** (posición) del primer elemento que cumple una condición, o -1 si no lo encuentra.

Útil cuando necesitas saber la posición de un elemento en un array para modificarlo.

---

### Método .filter()

Crea un **nuevo array** con todos los elementos que cumplen una condición específica.

Se utiliza para eliminar elementos de un array o filtrar resultados.

---

### Método .reduce()

Reduce un array a un **único valor** acumulando resultados.

Es ideal para calcular totales, sumas o cualquier operación que necesite procesar todos los elementos de un array y retornar un solo valor.

---

### Spread Operator (...)

El **operador spread** permite expandir o copiar arrays y objetos.

Es fundamental para mantener la **inmutabilidad** del estado en React, ya que permite crear copias de arrays u objetos sin modificar los originales.
```jsx
// Copiar array
const nuevoCarrito = [...cart, nuevoItem]

// Copiar objeto
const itemActualizado = { ...item, quantity: item.quantity + 1 }
```

---

### Operador Ternario

Condicional compacto que permite evaluar expresiones y retornar un valor u otro dependiendo de una condición.

Se usa frecuentemente para **renderizado condicional** en JSX.
```jsx
{condicion ? <ComponenteA /> : <ComponenteB />}
```

---

### Inmutabilidad del estado

En React, **nunca se debe modificar el estado directamente**.

Siempre se debe crear una **copia** del estado y actualizar usando el método `setState` correspondiente.

Esto garantiza que React detecte los cambios y actualice correctamente la interfaz.

---

### Fragments (<>)

Los **fragments** permiten agrupar múltiples elementos JSX sin agregar nodos extra al DOM.

Son útiles cuando necesitas retornar múltiples elementos desde un componente pero no quieres agregar un `<div>` innecesario.
```jsx
<>
  <h1>Título</h1>
  <p>Párrafo</p>
</>
```

---

### Template Literals

Permiten crear strings dinámicos usando backticks (`` ` ``) e interpolación con `${}`.

Son muy útiles en JSX para construir rutas de imágenes, clases CSS dinámicas o cualquier string que necesite variables.
```jsx
`/img/${image}.jpg`
```

---

### Renderizado Condicional

Permite mostrar u ocultar elementos de la interfaz basándose en condiciones.

Se puede hacer usando operadores ternarios, operador `&&`, o guardando JSX en variables.

---

### Virtual DOM

React utiliza el **Virtual DOM** para mejorar el rendimiento, actualizando solo las partes necesarias de la interfaz cuando cambia el estado.

---

## Ejecución del proyecto
```bash
npm install
npm run dev
```

---