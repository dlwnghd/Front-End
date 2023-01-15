console.log("안녕하세요");
// node_1_object.js (파일명) 실행할 수 있다

const students = {
    apple: "김사과",
    banana: "반하나",
    orange: "오렌지"
}

console.log(students);
const {apple, banana, orange} = students;
console.log(apple)

const user = ["김사과", "반하나", "오렌지"];
const [kim, ban, oh] = user;

console.log(oh);

const dog = {
    name: "루시",
    age: 11,
    weight: 3.5
}

function print  ( {name, age, weight}) {
    console.log(`
        우리집 강아지 이름은 ${name}입니다.
    `)
}

print(dog);