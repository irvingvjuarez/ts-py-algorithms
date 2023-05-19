# Intersección de la lista de intervalos

Dadas dos listas de intervalos cerrados, lista1 y lista2, donde lista1[i] = [inicio_i, final_i] y lista2[j] = [inicio_j, final_j]. Cada lista de intervalos es disjunta por pares y está ordenada.

Devuelve la intersección de estas dos listas de intervalos.

Un intervalo cerrado [a, b] (con a <= b) denota el conjunto de números reales x con a <= x <= b. La intersección de dos intervalos cerrados es un conjunto de números reales que está vacío o representado como un intervalo cerrado. Por ejemplo, la intersección de [1, 3] y [2, 4] es [2, 3].

### Ejemplo 1

```py
# Entrada:
	firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
# Salida:
	[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
```

### Ejemplo 2

```py
# Entrada:
	firstList = [[1,3],[5,9]], secondList = []
# Salida:
	[]
```