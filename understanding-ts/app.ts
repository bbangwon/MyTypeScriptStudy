// 명시적 타입 지정
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

// 오브젝트 타입 추론
const person : {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //제대로 타입을 지정해주기 위해 튜플 사용, 타입지정이 없을 경우 유니온 타입으로 추론됨
} = {  
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};


//push는 튜플에도 작동함 (실제로는 튜플이 아닌 배열이라서 가능) - 타입스크립트가 잡지 못함
person.role.push("admin");  

// 튜플의 길이가 정해져 있기 때문에 에러 발생
//person.role = [0, "admin", "user"]; // !!! ERROR !!!  
console.log(person.role);

//배열 타입
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
