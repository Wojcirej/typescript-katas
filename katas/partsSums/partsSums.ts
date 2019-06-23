export function partsSums(ls:number[]):number[] {
  if (ls.length == 0) return [0];
  let result = [];
  while (ls.length > 0) {
    result.push(ls.reduce((sum, element) => sum + element, 0));
    ls.shift();
  };
  result.push(0);
  return result;
};
