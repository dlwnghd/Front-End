import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { flexAlignCenter, flexCenter } from "styles/common";
import { useState } from "react";
import useInput from "hooks/useInput";

function TodoCard(props) {
  const { onDelete, handleEdit } = props;
  const { id, state, title, content } = props.todo;

  const [isTodoEdit, setIsTodoEdit] = useState(false); // 수정상태를 관리
  const [editContent, onChangeEditContent] = useInput(content); // 수정될 내용 기억

  const onSetIsTodoEditTrue = () => {
    setIsTodoEdit(true);
  };

  const onClickTodoEditBtn = () => {
    if (editContent === content) return setIsTodoEdit(false);
    handleEdit(id, editContent, state);
    setIsTodoEdit(false);
  };

  const onClickTodoStateEditbtn = () => {
    handleEdit(id, content, !state);
  };

  return (
    <S.Wrapper state={state}>
      <S.Header>
        <S.StateBox state={state} onClick={onClickTodoStateEditbtn}>
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox>
        <S.Title state={state}>
          {title}
          <div>
            <FontAwesomeIcon
              icon={faPen}
              onClick={isTodoEdit ? onClickTodoEditBtn : onSetIsTodoEditTrue}
            />
            <FontAwesomeIcon icon={faBan} onClick={() => onDelete(id)} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={state}>
        {isTodoEdit ? (
          <textarea onChange={onChangeEditContent}>{content}</textarea>
        ) : (
          content
        )}
      </S.Content>
    </S.Wrapper>
  );
}
export default TodoCard;

// fontAwesome styled-components || emotion
/*
css -in -js
    js 파일 안에 css를 정의 가능

    css를 모듈단위로 나누어 관리할 수 있다는 장점과
    하나의 js 파일 안에 css를 관리할 수 있다는 장점

    만은 개발자들이 사용하고 있는 이유 : 유지보수가 쉽다는 점
    가독성이 굉장히 좋아짐

    따라서, reactJS 나 vueJS와 같은 js 프로트엔드 프레임워크를
    사용할 경우는 scss나 css 보다는 css -in -js를 많이 활용

*/

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#3CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
