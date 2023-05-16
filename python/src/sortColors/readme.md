# Reordenar colores

Dado un arreglo nums con n objetos de color rojo, blanco o azul, ordénalos en su lugar para que los objetos del mismo color sean adyacentes, con los colores en el orden rojo, blanco y azul.

Utilizaremos los enteros 0, 1 y 2 para representar el color rojo, blanco y azul, respectivamente.

**Reto 1**: debes resolver este problema sin utilizar la función de ordenación de la biblioteca.

**Reto 2**: ¿podrías idear un algoritmo de una sola pasada utilizando solo un espacio extra constante?

### Ejemplo 1:

```py
# Entrada:
nums = [2,0,2,1,1,0]

# Salida:
[0,0,1,1,2,2]

```

### Ejemplo 2

```py
# Entrada:
nums = [2,0,1]

# Salida:
[0,1,2]
```