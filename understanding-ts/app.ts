// 명시적 타입 지정
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

// 오브젝트 타입 추론
const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"]
};

//배열 타입
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
