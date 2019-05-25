# Base64 encoding

### Description
Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

### Examples
```typescript
Encoder.toBase64("this is a string!!"); // "dGhpcyBpcyBhIHN0cmluZyEh"
Encoder.fromBase64("dGhpcyBpcyBhIHN0cmluZyEh"); // "this is a string!!"
```

### Link to kata on codewars.com
https://www.codewars.com/kata/5270f22f862516c686000161/

#### Disclaimer
For typescript I did this kata as not extension of JS object, but as a class, because that's what I wanted to practice here.
