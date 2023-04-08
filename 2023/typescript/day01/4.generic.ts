/*
Generics은 타입을 인자로 받아서 여러 곳에서 사용할 수 있는 타입이나 함수를 말함
예를들어 제네릭이 없다면

ex)
    function f1 (a:number, b:number) : number[] {
        return [a,b]
    }
    function f1 (a:string, b:string) : string[] {
        return [a,b]
    }

위와 같은 사태가 발생함

결론은 제네릭을 사용하면 여러개의 함수에서 비슷한 로직을 수행할 때
코드의 중복을 없애고 더욱 안정된 상황에서 개발이 가능하다

타입의 유연성을 높인다.
매개변수와 반환값의 타입을 동적으로 설정해야할 때
*/

const checkNull = (arg: any | null): any => {
  if (!arg) throw new Error("값이 비어있습니다"); // console.error()
  return arg;
};

checkNull("123");

type User = {
  name: "김성용";
};

const checkNullGeneric = <T extends User>(arg: T | null): T => {
  if (!arg) throw new Error("값이 비어있습니다");
  console.log(arg.name);
  return arg;
};

checkNullGeneric({
    name: "김성용",
    age: 18 
});
