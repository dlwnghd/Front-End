// 타입스크립트 파일 확장자명 (*.ts)

{
  let num: number = 18;
  let str: string = "Hello, TypeScript!";
  let bool: boolean = false;
  let nullVar: null = null;

  // 함수 타입
  // ⬇️ 반환값의 타입 (하지만 지금 여기서는 선언해주지 않아도 됨) => `타입추론`해줌
  function addType(num1: number, num2: number): number {
    return num1 + num2;
  }

  // 좋지 않은 예시
  // any, unknown, object, Function
  // 타입이 명확히 제시 되어있지 않은 것들

  // any ➡️ 어떠한 타입이든 될 수 있는 언어
  // unknown ➡️ 타입을 알 수 없음

  let anything: any = "string";
  let obj: Object = {
    // 어떤 키 값이 있던 객체
  };

  function mapType(callback: Function) {}

  // 배열, 튜플
  let arr1: number[] = [1, 2, 3, 4, 5];
  let arr2: Array<number> = [1, 2, 3, 4, 5];
  let tuple: [string, number] = ["안녕하세요", 123];

  // Map

  const myMap = new Map<string, number>();
  myMap.set("one", 1);

  const noMap = [
    {
      type: "alert",
      content: "안녕하세요",
    },
    {
      type: "confirm",
      content: "안녕하세요",
    },
  ];

  // 함수 반환 타입
  // 반환타임이 없을 때
  const print = (): void => {
    console.log("name");
  };

print();

  // 무한루프, 에러처리
  const error = (message: string): never => {
    throw new Error(message);
  };
}