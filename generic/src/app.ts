// 제너릭 사용
const names: Array<string> = []; //string[]
//names[0].split(' ');

//프로미스 타입
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});

// 제너릭 함수
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, {age: 30});
console.log(mergedObj);
