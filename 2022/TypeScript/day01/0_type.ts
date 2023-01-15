let hello: string = "hello";
console.log(hello);

// //js
// const jsAdd = (num1, num2) => {
//   return num1 + num2;
// };

//ts
// 매개변수에 타입                          // 리턴에 타입 정해줌 (리턴이 생략되면 얘도 생략 가능)
const tsAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};

// const num: number = "안녕하세요";
const voal: boolean = true;

// unknow, any

// unknown은 무슨 타입이 올지 모르겠어
// any는 어떠한 형태의 타입도 다 받겠다 o

// 타입스크립트는 타입을 명확하게 할 수록 좋습니다
// 내가 정해주는 타입에 확신

let myname:any = 5;

// void

const print2 = () : void => {
  console.log("hello")
  // return 5;
};

//never
// 무한루프, 에러처리

const error = (message:string):never => {
  throw new Error(message);
};

// object
// 오브젝트 역시 굉장히 광범위하기 때문에 사용하지 않는 것이 좋고
// 어떤 오브젝트인지 명시해주는 것이 좋다

const obj = (obj: object): object => {
  return obj; // object
};

obj({
  name: "seongyong",
});

obj([1, 2]);

// 타입스크립트는 코드가 길어지는데 좋은가요?
// 안정적인 환경에서 개발이 가능하고 + 가독성이 좋은 문서로 만들 수 있습니다.

const jsUpdate = (id) =>{
  //...
  return new Promise((resolve, reject) => {
    resolve(100);
  })
}

// TS
//Promise 타입
const tsUpdate = (id: string): Promise<number> => {
  //...
  return new Promise((resolve, reject) => {
    resolve(100);
  })
}

// Default parameter
                    //initialState = null
const printMessage = (message:string = "기본 메세지") => {
  console.log(message);
}

printMessage();

//Array
// const numberArray:Array<number>
// const stringArray: string[]

// Tuple

let student: [string, number];
student = ["seongyong", 100];

const [studentName, studentAge] = student;

// usestate에서 제네릭 useState(문자열, 배열 ... )

