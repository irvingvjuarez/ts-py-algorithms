# Search in rotated arrays
Tienes una lista de enteros ordenada de forma ascendente con valores distintos.

La lista (llamada nums) se encuentra posiblemente rotada en un índice pivote desconocido _k (1 <= k < nums.length)_ de tal manera que el array resultante es _[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]_.

Por ejemplo, [0,1,2,4,5,6,7] podría girar en el índice pivote 3 y convertirse en [4,5,6,7,0,1,2].

Dado el array nums después de la posible rotación y un objetivo entero, devuelve el `índice` del objetivo si está en nums o `-1` si no está en nums.

### Ejemplo 1
```py
# Input
nums = [4,5,6,7,0,1,2]
target = 0

# Ouput
4 
```

**Explicación**: La posición del valor 0 dentro de nums es 4

### Ejemplo 2
```py
# Input
nums = [4,5,6,7,0,1,2]
target = 3

# Output
-1
```

**Explicación**: El valor 3 no existe dentro de nums, por lo que retorna un valor negativo, osea -1