
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 리턴 타입은 아무것도 반환하지 않는 함수에 사용
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// undefined 리턴 타입은 아무것도 반환하지 않는 함수에 사용
function printResultUndefined(num: number): undefined {
    console.log('Result: ' + num);
    return;
  }

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

let someValue: undefined;