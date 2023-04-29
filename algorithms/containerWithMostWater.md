Dada una lista de números que representan un grupo de líneas de diferentes alturas.

Encuentra dos líneas que formen un contenedor, tal que este contenga la mayor cantidad de agua.

Devuelve la cantidad máxima de agua que puede almacenar un contener.

Ejemplo:

```
alturas = [1, 8, 6, 2, 5, 4, 8, 3, 7]
```

Output:
```
49
```

Explicación:

El array presentado en el ejemplo se vería visualmente de la siguiente manera



    |              |
    |              |     |
    |  |           |     |
    |  |     |     |     |
    |  |     |  |  |     |
    |  |     |  |  |  |  |
    |  |  |  |  |  |  |  |
 |  |  |  |  |  |  |  |  |
 1  8  6  2  5  4  8  3  7  - Valor
 0  1  2  3  4  5  6  7  8  - Index

De esa manera, el algoritmo deberá realizar los "contenedores" que se puedan formar con las alturas proporcionadas.

El contenedor cuya area sea la más grande es la que debemos devolver. En esta caso se puede formar un contenedor con las alturas de los índices 8 y 1. Con estas alturas se puede formar un contener con altura máxima de 7 y con longitud de 7, por lo que su área sería de 49.