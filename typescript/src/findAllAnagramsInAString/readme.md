# Encontrar todos los anagramas de una cadena de carácteres

Dadas dos cadenas s y p, devuelva un arreglo con todos los índices de inicio de los anagramas de p en s. Puede devolver la respuesta en cualquier orden.

Un anagrama es una palabra o frase que se forma reordenando las letras de otra palabra o frase, normalmente utilizando todas las letras originales exactamente una vez.

### Ejemplo 1:
```py
# Entrada:
	s = "cbaebabacd", p = "abc"
# Salida:
	[0,6]
```

**Explicación**:
La subcadena con índice inicial = 0 es “cba”, que es un anagrama de “abc”.
La subcadena con índice inicial = 6 es “bac”, que es un anagrama de “abc”.

### Ejemplo 2:
```py
# Entrada:
	s = "abab", p = "ab"
# Salida:
	[0,1,2]
```

**Explicación**:
La subcadena con índice inicial = 0 es “ab”, que es un anagrama de “ab”.
La subcadena con índice inicial = 1 es “ba”, que es un anagrama de “ab”.
La subcadena con índice inicial = 2 es “ab”, que es un anagrama de “ab”.