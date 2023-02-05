import TodoCard from "./Card/Card";

function TodoList() {
    const TODO_LIST = [
        {
            id: 1,
            title: 'example1',
            content: 'content1',
            state: false,
            edit:false,
        },
        {
            id: 2,
            title: 'example2',
            content: 'content2',
            state: true,
            edit:false,
        },
        {
            id: 3,
            title: 'example3',
            content: 'content3',
            state: false,
            edit:false,
        },
        {
            id: 4,
            title: 'example4',
            content: 'content4',
            state: false,
            edit:false,
        },
    ];

    return (
        <div>
            {/* {TODO_LIST.map((todo) => <TodoCard/>)} */}
            {TODO_LIST.map((todo) => {
                console.log(todo);
                return <TodoCard todo={todo} example={'test'} />
            })}
            {/*
            상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
            props(속성)을/를 이용하여 데이터를 전달 
             */}
        </div>
    );
}
export default TodoList;