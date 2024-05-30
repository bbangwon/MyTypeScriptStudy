// function add(n1: number, n2: number) {
//   result = n1 + n2;
//   var result;
//   return result;
// }

// const add = (n1: number, n2: number) => n1 + n2;
// const addOrAddOne = (n1: number, n2: number = 1) => n1 + n2;
// const printOutput: (a: number | string) => void = console.log;

// printOutput(add(5, 2));
// printOutput(addOrAddOne(5));

const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

// const copiedPerson = { ...person }; 

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age, person);
