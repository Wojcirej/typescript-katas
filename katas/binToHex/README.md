# Bin to hex

### Description
Takes a binary string (with or without leading zeros) as an argument.

Returns the hexadecimal representation of the numerical value of the binary string.

#### Notes
* Any none numerical characters should be lower case.
* Author of this kata on codewars "disabled a few things.", so this solution might differ from one someone would expect... But it was interesting experience.
* This is just one of two functions one needed to implement to solve this kata. I've separated those for my convenience.
* This kata is not available in typescript on codewars, but I still included link to it.

### Examples
```typescript
binToHex("1111") // "f"
binToHex("000101") // "5"
binToHex('10011010010') // '4d2'
```

### Link to kata on codewars.com
https://www.codewars.com/kata/55d1b0782aa1152115000037
