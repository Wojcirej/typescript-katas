# Typescript katas
My solutions of katas available on codewars.com gathered in one place - Javascript Edition.
[![CodeWars](https://www.codewars.com/users/Wojcirej/badges/large)](https://www.codewars.com/users/Wojcirej/badges/large "My Honor Badge")
# Transpile to Javascript
`npm run prepare`
# Launch tests
`npm test`
# Solution generator
`ts-node generator.ts <kataName> [params]`
### Example of solution generator usage
`ts-node generator.ts testKata arg1 arg2` will generate template for kata with `testKata` name in `/katas/` directory.

In this case, file within `katas/testKata/` directory named `testKata.ts` will contain template for function named testKata taking two arguments: `arg1` and `arg2`.

There will be also file template for tests in `/spec/katas/`, named `testKataSpec.ts`.
