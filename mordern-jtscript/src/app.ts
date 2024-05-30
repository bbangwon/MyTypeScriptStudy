// function add(n1: number, n2: number) {
//   result = n1 + n2;
//   var result;
//   return result;
// }

const add = (n1: number, n2: number) => n1 + n2;
const addOrAddOne = (n1: number, n2: number = 1) => n1 + n2;
const printOutput: (a: number | string) => void = console.log;

printOutput(add(5, 2));
printOutput(addOrAddOne(5));
