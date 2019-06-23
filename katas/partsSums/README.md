# Parts sums

### Description
Let us consider this example (array written in general format):
`ls = [0, 1, 3, 6, 10]`
Its following parts:

`ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []`
The corresponding sums are (put together in a list): `[20, 20, 19, 16, 10, 0]`

The function parts_sums (or its variants in other languages) will take as parameter a list `ls` and return a list of the sums of its parts as defined above.

### Examples
```typescript
partsSums([0, 1, 3, 6, 10]) // [20, 20, 19, 16, 10, 0]
```

### Link to kata on codewars.com
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/
