# meli-test-front-end

### Instalación y ejecución🔧

_Para instalar las dependencias_

```

npm install

```

_Para ejecutar el entorno de desarrollo_


```

npm run dev

```

Al ejecutar el entorno de desarrollo se ejecutará tanto el server como el client. El server será el encargado de comunicarse con la api de mercadolibre y dispondrá de endpoints para que puedan ser consumidos por el client.

## Stack tecnológico 🛠️

Tecnologías de Javascript, para las vistas React, para el manejo de state Redux, para los estilos SASS con convenciones a decidir (seguramente BEM + Atomic-Design), para los tests unitarios Jest con Enzyme, como linters utilizaremos para las task de lint Prettier y para las reglas Eslint, se utilizará Storybook como utilidad de desarrollo para isolar los componentes de React y listarlos.


* React.js- La librería usada para las vistas
* Redux - La librería usada para el manejo de store
* Node.js - El motor utilizado para el servidor
* SASS - Como preprocesador
* Jest - Como framework para las pruebas unitarias con
* Testing Library - React - Como utilidad para testear el renderizado de componentes de React.
* Axios - La librería usada para las solicitudes contra el servidor

## Planteamiento de la resolución 🧠
A la hora de resolver la parte del cliente se decidió utilizar ReactJs con el concepto de SPA (Single Page Application). Para recorrer las distintas páginas se utilizó la libreria de react router.
Como la app tiene como concepto central la búsqueda de artículos, se decidió implementar redux para gestionar el manejo de las búsquedas a través de sus correspondientes actions(con enfoque asíncrono). De esta forma se puede ejecutar una búsqueda o consumir el resultado de la búsqueda desde distintos módulos de la app, como fue el caso de mostrar el breadcrumb de categorías en la pantalla de detalle del artículo.

Para hacer el cliente escalable nos ayudamos de la organización de carpetas en módulos, que representa cada sección de la aplicación. Además se definió una carpeta common para almacenar todos aquellos componentes que se considerarían comunes en la aplicación.
