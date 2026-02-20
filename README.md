# Laboratorio 2 - Primer Cómputo
## Programación Computacional IV


## Tabla de selectores utilizados

| Tipo de selector         | Elemento afectado    | Descripción de la tarea que realiza 
|--------------------------|----------------------|-------------------------------------
| `getElementById`         | `#btnCambiarTexto`   | Cambia el texto del párrafo y aplica un efecto de color amarillo temporal 
| `getElementsByClassName` | `.btnOcultar`        | Oculta la imagen usando opacidad (efecto suave) 
| `querySelector`          | `.btnMostrar`        | Muestra la imagen nuevamente (opacidad = 1) |
| `querySelectorAll`       | `#lista li`          | Cuenta todos los elementos de la lista y muestra el total en un alert 
| `getElementsByTagName`   | `div`                | Cambia el color de fondo del div con id="contenedor" a rosa pastel 
| `querySelector`          | `#lista`              | Elimina el último elemento de la lista con animación de desvanecimiento 
| `getElementById`         | `#btnAgregarElemento` | Agrega un elemento aleatorio a la lista (de un array de actividades) 
| `getElementById` + `querySelector` | `#btnReset` | Restaura todos los elementos: texto, imagen, fondo y lista original 


## PREGUNTAS

### 1. ¿Cuál es la ventaja de utilizar `getElementById` frente al `QuerySelector`?

La principal ventaja de `getElementById` es su **rendimiento y especificidad**:

1. **Velocidad**: Es más rápido porque está optimizado específicamente para buscar por ID, mientras que `querySelector` debe parsear el selector CSS primero.
2. **Simplicidad**: Su sintaxis es más clara y directa: `getElementById("miId")` vs `querySelector("#miId")`.
3. **Disponibilidad**: Está disponible en navegadores más antiguos (mejor compatibilidad).
4. **Semántica**: Comunica claramente que estás buscando un elemento por su ID único.
Sin embargo, `querySelector` es más versátil porque puede usar cualquier selector CSS, pero cuando sabes que el elemento tiene un ID único, `getElementById` es la opción más eficiente.



### 2. ¿En qué situación es preferible usar `querySelectorAll` en lugar de `querySelector`? Explique qué tipo de dato devuelve cada uno.

**`querySelectorAll` Es preferible cuando:**
- Necesitamos **todos los elementos** que coinciden con un selector (ej: todos los items de una lista, todos los párrafos con cierta clase)
- Quieres iterar sobre una colección de elementos
- Necesitamos aplicar cambios a múltiples elementos similares
- Requerimos obtener el número total de elementos que cumplen un criterio

**`querySelector` se usa cuando:**
- Solo necesitamos el **primer elemento** que coincide
- Sabes que hay un único elemento que cumple el criterio
- Queremos seleccionar un elemento específico (como el primero de su tipo)

**Tipos de datos que devuelven:**

| Método               | Tipo de dato devuelto | Descripción |
|----------------------|---------------------- |-------------|
| `querySelector()`    | `Element` o `null`    | Devuelve el **primer elemento** que coincide con el selector CSS, o `null` si no encuentra ninguno |
| `querySelectorAll()` | `NodeList`            | Devuelve una **lista estática** (no viva) de todos los elementos que coinciden. Aunque parece un array, es un NodeList, pero soporta `forEach()` |
