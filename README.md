# ADHD04
## Preguntas y respuestas acerca de TypeScript.

### 1. ¿Qué es TypeScript?
#####  Es un lenguaje de programación de código abierto creado por Microsoft que se compila a JavaScript. Es un superconjunto de JavaScript, lo que significa que todo el código JavaScript válido también es código TypeScript válido. TypeScript añade algunas características clave a JavaScript, como el tipado estático, las interfaces y las clases genéricas. Estas características pueden ayudar a mejorar la legibilidad, mantenibilidad y confiabilidad del código JavaScript.

### 2. ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
#####  *Tipado estático: TypeScript es un lenguaje de tipado estático, lo que significa que los tipos de datos de las variables y funciones se comprueban en tiempo de compilación. Esto puede ayudar a detectar errores en el código antes de que se ejecute, lo que puede ahorrar tiempo y esfuerzo en la depuración. Además, el tipado estático puede mejorar la legibilidad y mantenibilidad del código, ya que deja claro qué tipo de datos se espera en cada lugar.

##### *Mayor seguridad: El tipado estático también puede ayudar a mejorar la seguridad del código, ya que puede evitar ciertos tipos de errores de ejecución, como errores de tipo y errores de referencia nula.

##### *Mejoras en el desarrollo colaborativo: En proyectos grandes con múltiples desarrolladores, el tipado estático de TypeScript puede ayudar a mejorar la comunicación y la colaboración entre los miembros del equipo. Esto se debe a que el tipado estático puede ayudar a garantizar que todos los desarrolladores comprendan los tipos de datos que se esperan en cada parte del código.

##### *Escalabilidad: TypeScript es un lenguaje escalable que se puede utilizar para desarrollar aplicaciones de gran tamaño y complejidad. Las características de tipado estático y las interfaces de TypeScript pueden ayudar a gestionar la complejidad del código y hacer que sea más fácil de mantener a medida que la aplicación crece.

##### *Compatibilidad con JavaScript: TypeScript es un superconjunto de JavaScript, lo que significa que todo el código JavaScript válido también es código TypeScript válido. Esto significa que puedes utilizar TypeScript en tus proyectos existentes sin tener que reescribir todo tu código JavaScript.

##### *Herramientas: TypeScript dispone de un rico ecosistema de herramientas que pueden ayudarte a desarrollar y mantener tu código. Estas herramientas incluyen editores de código, compiladores y depuradores.

### 3. ¿Cómo se instala TypeScript en VSCode?
#### Hay dos maneras principales de instalar TypeScript en Visual Studio Code:

##### 1. Instalación global

##### Puedes instalar el compilador de TypeScript globalmente usando npm o yarn. Esto te permitirá usar TypeScript en cualquier proyecto de tu ordenador.
##### 2. Instalación en el espacio de trabajo

##### También puedes instalar TypeScript en un espacio de trabajo específico. Esto es útil si solo quieres usar TypeScript en un proyecto concreto.

### 4. ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?
##### 1. Usando el comando tsc

##### El compilador de TypeScript, tsc, se puede utilizar para compilar archivos TypeScript individuales o proyectos completos.
##### 2. Usando un editor de código o una herramienta de compilación

##### Muchos editores de código y herramientas de compilación, como Visual Studio Code y Webpack, incluyen soporte para TypeScript. Estos editores y herramientas pueden compilar automáticamente tus archivos TypeScript a medida que los guardas o como parte de un proceso de compilación más grande.
### 5. ¿Qué extensión de archivo se utiliza para los archivos TypeScript?
##### La extensión de archivo que se utiliza para los archivos TypeScript es .ts.

##### Esto significa que si tienes un archivo que contiene código TypeScript, debes guardarlo con la extensión .ts para que pueda ser reconocido por el compilador de TypeScript y por las herramientas de desarrollo que admiten TypeScript.

### 6. ¿Cómo se define un tipo de dato en TypeScript?
##### En TypeScript, puedes definir tipos de datos para variables, funciones y parámetros utilizando una variedad de palabras clave y sintaxis.

#### Tipos de datos primitivos:

#### TypeScript incluye los siguientes tipos de datos primitivos:

##### number: Para representar números, como 1, 3.14 y -200.
##### string: Para representar cadenas de texto, como "Hola", "Mundo" y "¡Hola Mundo!".
##### boolean: Para representar valores booleanos, como true y false.
##### symbol: Para representar valores únicos, como símbolos utilizados para la identificación interna.
##### null: Para representar un valor nulo.
##### undefined: Para representar un valor indefinido.

### 7. ¿Qué son los tipos de unión y cómo se declaran?
##### En TypeScript, los tipos de unión (también conocidos como uniones de tipos) son una forma de definir que una variable o expresión puede contener valores de más de un tipo de dato. Esto puede ser útil para representar situaciones en las que no se sabe con certeza qué tipo de dato se almacenará en una variable o se devolverá de una función.

##### Se declara de la siguiente manera:

##### Los tipos de unión se declaran utilizando el símbolo | (pipe) seguido de los tipos de datos que se unen.

### 8. ¿Qué es un tipo literal en TypeScript y para qué se utiliza?
##### En TypeScript, un tipo literal es un tipo que representa un valor específico y concreto, en lugar de un rango o conjunto de valores posibles. Los tipos literales se utilizan para garantizar que una variable o expresión solo pueda contener un valor específico, lo que puede mejorar la seguridad y la legibilidad del código.

### 9. ¿Qué son los tipos enumerados (Enums) y cómo se crean?
##### En TypeScript, los tipos enumerados (también conocidos como enums) son una forma especial de definir un conjunto de constantes con nombre. Estas constantes representan valores relacionados entre sí y pueden usarse para mejorar la legibilidad, seguridad y mantenibilidad del código.

#### Creación de enums:

##### Los enums se crean utilizando la palabra clave enum seguida del nombre del enum y llaves que contienen los nombres de las constantes entrelazados con sus valores numéricos opcionales (por defecto, los valores comienzan en 0 y aumentan en 1 para cada miembro subsecuente).

### 10. ¿Cómo se define un tipo alias y cuándo es útil?
##### En TypeScript, un tipo alias (también conocido como alias de tipo) es una forma de crear un nuevo nombre para un tipo de dato existente. Esto puede ser útil para mejorar la legibilidad del código, hacer que el código sea más autodocumentado y facilitar la refactorización.

#### Sintaxis:

##### La sintaxis para definir un tipo alias es la siguiente:
#### Ejemplo: 

##### type AliasDeTipo = TipoExistente;
##### En este ejemplo AliasDelTipo es el nombre que se le da al nuevo tipo de alias, y TipoExistente es el tipo de dato existente al que se hace referencia.

### 11. ¿Cómo se definen las funciones con tipos en TypeScript?
##### 1. Anotación de tipos:

##### La anotación de tipos consiste en especificar los tipos de datos de los parámetros de entrada y del valor de retorno de la función. Se utiliza colocando dos puntos (:) después del nombre del parámetro o de la función y escribiendo el tipo de dato correspondiente entre llaves.

#### 2. Firma de función:
##### La firma de función es una forma más explícita de definir los tipos de una función. Se utiliza la palabra clave function seguida del nombre de la función, los parámetros entre paréntesis y el tipo de retorno entre dos puntos.

### 12. Parámetros opcionales:

##### Los parámetros opcionales en TypeScript permiten definir funciones que pueden recibir un número variable de argumentos. Esto significa que la función puede llamarse con o sin proporcionar un valor para algunos de los parámetros.

#### Sintaxis:

##### Para declarar un parámetro opcional, se utiliza un signo de interrogación (?) después del nombre del parámetro y del tipo de dato.

#### Parámetros predeterminados:

##### Los parámetros predeterminados en TypeScript permiten asignar un valor inicial a un parámetro de función. Este valor se utiliza si no se proporciona un valor al llamar a la función.

#### Sintaxis:

##### Para declarar un parámetro con valor predeterminado, se asigna un valor al parámetro utilizando el signo de igual (=) después del nombre del parámetro y del tipo de dato.

##### La firma de función es una forma más explícita de definir los tipos de una función. Se utiliza la palabra clave function seguida del nombre de la función, los parámetros entre paréntesis y el tipo de retorno entre dos puntos.

### 13. ¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?
#### 1. Usar un sistema de tipado estricto:

##### TypeScript es un lenguaje de tipado estático, lo que significa que los tipos de datos de las variables y expresiones se comprueban en tiempo de compilación. Esto ayuda a detectar errores tempranamente y evita problemas de compatibilidad de tipos en tiempo de ejecución. Aprovecha al máximo las opciones de tipado estricto para garantizar la seguridad y confiabilidad del código.

#### 2.Escribir código legible y bien formateado:

##### La claridad y la organización del código son fundamentales para su mantenimiento. Sigue las convenciones de estilo de código recomendadas por TypeScript (como la sangría consistente y el uso de nombres descriptivos) y utiliza comentarios para explicar secciones complejas del código.

#### 3. Aprovechar las interfaces y los tipos de unión:

##### Las interfaces y los tipos de unión permiten definir la estructura y los tipos de datos válidos para objetos y valores. Esto mejora la legibilidad del código y ayuda a prevenir errores en tiempo de compilación.

#### 4. Utilizar funciones expresivas y bien documentadas:

##### Las funciones son bloques de código reutilizables que encapsulan una tarea específica. Escribe funciones con nombres descriptivos que indiquen claramente su propósito y utiliza comentarios para explicar los parámetros, el valor de retorno y el funcionamiento interno.

#### 5. Aprovechar el poder de las clases y la herencia:

##### Las clases permiten organizar el código relacionado y definir comportamientos comunes. La herencia permite reutilizar código y crear jerarquías de clases que reflejan las relaciones entre entidades.

#### 6. Probar el código a fondo:

##### Las pruebas unitarias son esenciales para garantizar que el código funcione como se espera y para detectar errores potenciales. Escribe pruebas unitarias que cubran diferentes escenarios de uso y utiliza herramientas de prueba automatizadas para ejecutarlas regularmente.

#### 7. Refactorizar el código regularmente:

##### La refactorización consiste en mejorar la estructura y el diseño del código sin modificar su comportamiento. Refaccionar el código periódicamente ayuda a mantenerlo limpio, organizado y fácil de entender.

#### 8. Utilizar herramientas de lineamiento y formato de código:

##### Existen herramientas como ESLint, Prettier y TSLint que pueden ayudarte a mantener la consistencia en el estilo de código, detectar errores de formato y aplicar las mejores prácticas recomendadas.

#### 9. Mantenerse actualizado con las últimas versiones de TypeScript:

##### TypeScript está en constante evolución, con nuevas características y mejoras que pueden beneficiar tu código. Mantente actualizado con las últimas versiones y considera incorporar las nuevas funciones en tus proyectos cuando sea apropiado.

#### 10. Compartir el conocimiento y colaborar con otros:

##### Discutir el código con otros desarrolladores, compartir ideas y colaborar en proyectos puede ayudarte a mejorar tus habilidades de programación y a escribir código más limpio y mantenible.


|Carnet|Nombre|Correo de contacto|Centro de estudio|
|------|------|------|------|
|2024-007440|Diego Antonio Lopez Sagastume|diegointecap2024@gmail.com|Intecap Centro Tic´s|


## Breve descripcion del proyecto

> Este proyecto sirve para entender de mejormanera el uso de TypeScript.
> Para ello se deja una serie de preguntas ya resueltas en el inicio de este mismo, y para reforzar mas se realizo una serie de ejercicios.

> Las tecnologias y lenguajes que se usaron fueron:
> Software: VS Code.
> Hardware: Monitor, CPU, mouse y teclado basico.

> Uso de HTML, CSS,TypeScript.

- Fecha para entregar el proyecto 10/06/2024
- Fecha de entrega del proyecto 05/06/2024
