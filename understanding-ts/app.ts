function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 리턴 타입은 아무것도 반환하지 않는 함수에 사용
function printResult(num: number): void {
  console.log("Result: " + num);
}

// undefined 리턴 타입은 아무것도 반환하지 않는 함수에 사용
function printResultUndefined(num: number): undefined {
  console.log("Result: " + num);
  return;
}

// 콜백함수의 리턴 타입을 void로 지정하면 콜백함수에서 반환하는 값은 무시된다.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, result => {
  console.log(result);
  return result;
});

addAndHandle(10, 20, printResult);

let someValue: undefined;
