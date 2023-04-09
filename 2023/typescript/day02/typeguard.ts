interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  side: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.type === "circle";
}

function getArea(shape: Shape): number {
  // shape == Circle
  if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    // shape == Square
    return shape.side * shape.side;
  }
}

function print(name: string | number) {
  if (typeof name === "string") {
    console.log(name.toUpperCase());
  } else {
    console.log(name.toString());
  }
}

const Form = {
  login: "login",
  sign: "sign",
} as const;

type FormType = keyof typeof Form;
// 'Login' / 'sign'

const onFormChange = (e:MouseEvent) => {
  const { innerText } = e.target as HTMLDivElement;
  if(innerText in Form){
    // setForm(innerText.toLowerCase() as FormType)
  }
  return alert("치명적인 에러가 발생하였습니다.")
};

/**
타입 가드는 코드의 가독성을 높이고 코드의 흐름을 명확하게 표현하며
변수의 타입을 보다 안정적으로 보장할 수 있는 방법

특정 조건을 만족하는 경우 타입을 변경하도록 정의
이를 통해 타입이 런타임에서 변경되는 것을 방지할 수 있음

* 안정성 *

예를 들면 함수의 매개변수는 타입이 보장되어있지 않음
함수 내에서 분기점으로 인해 다양하게 사용이 가능
이 경우 타입 내에서 해당 매개변수읭 타입의 정확한 타입을 보장하여

개발의 안정성을 상승하기 위해 사용
 */

