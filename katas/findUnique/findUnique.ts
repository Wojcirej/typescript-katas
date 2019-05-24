export function findUnique(array:Array<number>):number {
  array.sort();
  return (array[0] !== array[1]) ? array[0] : array.pop()
};
