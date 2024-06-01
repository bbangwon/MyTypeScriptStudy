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

