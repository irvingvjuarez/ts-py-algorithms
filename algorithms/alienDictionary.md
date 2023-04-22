In an alien language, surprisingly they also use english lowercase letters, but possibly in a different *order*. The *order* of the alphabet is some permutation of lowercase letters.

Given a sequence of *words* written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

### Example 1
INPUT
```js
words = ["hello","leetcode"]
order = "hlabcdefgijkmnopqrstuvwxyz"
```

OUTPUT
```js
false
```

REASON
*In the fifth letter of both words, `c` is lower than `o` in terms of the given order of the alien alphabet.*


### Example 2
INPUT
```js
words = ["word","world","row"]
order = "worldabcefghijkmnpqstuvxyz"
```

OUTPUT
```js
false
```

REASON
*As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.*


### Example 3
INPUT
```js
words = ["apple","app"]
order = "abcdefghijklmnopqrstuvwxyz"
```

OUTPUT
```js
false
```


REASON
*The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character*

### Example 4
INPUT
```js
words = ["hello","leets", "mikus"]
order = "hlabcdefgijkmnopqrstuvwxyz"
```

OUTPUT
```js
true
```

REASON
*The first word is lexicographically better than the second, and the seconds is better to the third one.*


## Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `order.length == 26`
- All characters in words[i] and order are English lowercase letters.