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
true
```

REASON
*As 'h' comes before 'l' in this language, then the sequence is sorted.*


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

## Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `order.length == 26`
- All characters in words[i] and order are English lowercase letters.