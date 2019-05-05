import { KataGenerator } from './lib/kataGenerator';

process.argv.shift();
process.argv.shift();
const kataName = process.argv.shift();
const params = process.argv;
KataGenerator.call(kataName, params);
