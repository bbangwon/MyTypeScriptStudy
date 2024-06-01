//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string; //선택적 매개변수
}

//인터페이스 상속
interface Greetable extends Named {
  greet(phrase: string): void;
}

//인터페이스 구현
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

//인터페이스 타입으로 변수 선언
let user1: Greetable;
user1 = new Person();
user1.greet("Hi there - I am");
