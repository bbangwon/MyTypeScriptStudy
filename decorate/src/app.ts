//클래스 데코레이터
//데코레이터는 클래스가 인스턴스화가 아닌 정의될때 실행
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

//@Logger('LOGGING - PERSON')
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Mark";
  constructor() {
    console.log("Person class was created");
  }
}

const pers = new Person();
console.log(pers);
