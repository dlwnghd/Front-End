interface Person {
  name: string;
  age: number;
  height?: number;
}

const person: Partial<Person> = {
    name: "김성용",
    age: 20,
};

const user : Person = {
    age: 20,
    name: "김성용",
}

// omit: 특정 속성을 제외하고 가지고 올 수 있음
const userWithOutAge : Omit<Omit<Person, "age">, "name"> = {
    // name: "김성용",
    height: 100,
}

// pick
// const userWithAge: <PickPerson, "age" | "height> {

// }


// ReturnType

enum TodoState {
    Todo,
    Complete
}

type Todo = {
    id: number,
    state: TodoState,
    title: string,
    content: string
}

const useTodo = () => {
    const todoState:Todo[] = [
        {
            content: "123",
            id: 3,
            state: TodoState.Todo,
            title: "123",
        },
    ];

    const handleAddTodo = () => {};
    const handleDeleteTodo = () => {};

    return {
        todoState,
        handleAddTodo,
        handleDeleteTodo,
    };
};

const todo = useTodo();

const todoController = (todo: ReturnType<typeof useTodo>) => {
    // 비즈니스 로직이 들어갈겁니다
    for (let todos of todo.todoState) {
        if(todos.state === TodoState.Complete) {

        }
    }
    console.log(todo.todoState)
};

todoController(todo);