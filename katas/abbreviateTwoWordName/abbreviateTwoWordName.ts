export function abbrevName(name: string): string {
  let result:Array<any> = [];
  for (let word of name.split(' ')) {
    result.push(word.charAt(0).toUpperCase());
  };
  return result.join('.');
}
