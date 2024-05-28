let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//unknown은 any와 비슷하지만 any보다는 타입 검사가 더 엄격하다.
if (typeof userInput === 'string') {
  userName = userInput;
}

//never는 함수가 끝나지 않는다는 것을 의미한다.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);