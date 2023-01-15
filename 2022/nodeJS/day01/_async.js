// let타입의 number는 5
let number = 5;

// number를 매개변수로 받는 callback
const callack = (number) => {
  number = number + 1;
  setTimeout(() => {
    console.log(number);
  }, 500);
  return number;
};

// ⭐async⭐
// ⬇️변수 async / ⬇️async기능
const async = async (number) => {
  try {
  let result = await callack(number);
  result = await callack(result);
  result = await callack(result);
  result = await callack(result);
  result = await callack(result);
  } catch {
    console.log("실패");
  }
};

async(number);
