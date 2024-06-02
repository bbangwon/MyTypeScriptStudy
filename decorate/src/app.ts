//클래스 데코레이터
//데코레이터는 클래스가 인스턴스화가 아닌 정의될때 실행
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Mark";
  constructor() {
    console.log("Person class was created");
  }
}

const pers = new Person();
console.log(pers);
