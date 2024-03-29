import Button from "components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import TodoList from "./components/List/TodoList";
import TodoFormModal from "./components/Modal/TodoForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast} from 'react-toastify';
import { useState } from "react";

export const print = () => {
    console.log('반갑습니다');
};

function TodoPage() {

  // state
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);  // 모달창의 활성화를 관리하는 state함수
  const [todoList, setTodoList] = useState([  // todoList의 데이터를 관리하는 state함수 초기값은 아래와 같다(더미데이터 채워놓기)
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
  ])

  // toast
  const handleAddTodo = (title, content) => {
    return new Promise((resolve, reject) => {
      if(!title || !content){
        return reject("need fullfilled");
      }

      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          title,
          content
        };
        resolve(newTodo)
      }, 1000)
      
    }).then((res)=>{
      // 성공하면
      // const newTodoList = [...todoList].push(res)
      setTodoList([res, ...todoList]); // state의 불변성을 지키기 위해 깊은복사를 한 얕은비교를 함 ⭐⭐⭐⭐⭐ (res를 앞에 붙인 것은 최신순으로 Todo카드를 추가하기 위함 )
      setIsOpenAddTodoModal(false);
    })
  }

  // handle
  const showAddTodoToastMessage = (title, content) => {    // 화살표 함수
    toast.promise(handleAddTodo(title, content), {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });  
  };


  const handleOpenTodoAddModal = () => {
    setIsOpenAddTodoModal(true);
  }

  const handleCloseTodoAddModal = () => {
    setIsOpenAddTodoModal(false);
  }


    return (
      <>
        {isOpenAddTodoModal && (
          <TodoFormModal
            showAddTodoToastMessage={showAddTodoToastMessage}
            onClose={handleCloseTodoAddModal}
          />
        )}
        <S.Wrapper>
          <S.Container>
            <S.Title>List</S.Title>
            <S.Content>
              <TodoList todoList={todoList} setTodoList={setTodoList} />
            </S.Content>
            <S.ButtonBox>
              <Button
                variant={"primary"}
                size={"full"}
                onClick={handleOpenTodoAddModal}
              >
                추가
              </Button>
            </S.ButtonBox>
          </S.Container>
          <ToastContainer autoClose={2000} theme="colored" />
        </S.Wrapper>
      </>
    );
}
export default TodoPage;

// const test = 'test';
// export default test;
// export default 되어있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있구요
// export 되어있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명 등을 이용하여 key값으로 가지고온다.

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};