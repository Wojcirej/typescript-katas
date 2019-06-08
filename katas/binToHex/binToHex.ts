export function binToHex(binString:string):string {
  return binString.split('').reverse().map((char, index) => {
    return Math.pow(2, index) * (char.charCodeAt(0) - 48);
  }).reduce((sum, element) => sum + element, 0).toString(16);
};
