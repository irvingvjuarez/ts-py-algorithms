# Máxima cantidad de 1s Consecutivos
Dado un arreglo de valores binarios y un entero k, encuentra el máximo número de 1s consecutivos. Puedes cambiar k 0s por el valor 1.

### Ejemplo 1:

```py
# Entrada: 
	nums = [1,1,1,0,0,0,1,1,1,0], k = 2
# Salida: 
	6
```

**Explicación**: [1,1,1,0,0,**1**,1,1,1,1,**1**]
Los números en negrita se han pasado de 0 a 1. La submatriz más larga está subrayada.

### Ejemplo 2

```py
# Entrada:
	nums = [0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1], k = 3
# Salida:
	10
```

**Explicación**: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Los números en negrita fueron volteados de 0 a 1. El sub-arreglo más largo está subrayado.