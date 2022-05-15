let number = 5;

const callack = (number) => {
  number = number + 1;
  setTimeout(() => {
    console.log(number);
  }, 500);
  return number;
};

const async = async (number) => {
  let result = await callack(number);
  result = await callack(result);
  result = await callack(result);
  result = await callack(result);
  result = await callack(result);
};

async(number);
