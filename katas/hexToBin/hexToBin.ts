export function hexToBin(hexString:string):string {
  return hexString.split('').reverse().map((char, index) => {
    return Math.pow(16, index) * determineNumber(char);
  }).reduce((sum, element) => sum + element, 0).toString(2);
};

function determineNumber(char:string):number {
  if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
    return char.charCodeAt(0) - 48;
  } else {
    return char.toLowerCase().charCodeAt(0) - 87;
  };
};
