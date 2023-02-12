// import {useState } from "react";
import {
  ADD_STATE,
  REMOVE_STATE,
  useUserDisPatch,
  useUserState,
} from "../context/user";
import AddUser from "./addUser";
import UserList from "./userList";

function User(){

  // useContext()를 이용해서 만든 새롭게 만든 저장소를 가져옴
  const userList = useUserState();
  const dispatch = useUserDisPatch();
  
  // 내가 만든 context 사용하겠다
  // 그 context의 value? = [state, setState]

    // const [userList, setUserList] = useState([
    //   {
    //     id: 1,
    //     name: "김성용",
    //   },
    //   {
    //     id: 2,
    //     name: "구현서",
    //   },
    //   {
    //     id: 3,
    //     name: "김태기",
    //   },
    //   {
    //     id: 4,
    //     name: "김민식",
    //   },
    // ]);

    /*
    실습(쉬는시간 10분 + 10분)
    삭제 버튼을 누르면 해당 유저는 삭제되고
    추가 버튼을 누르면 최하단에 유저가 추가된다 
    
    id 값은 마지막 id 값의 + 1
    Math random
    */

    // 삭제 버튼 클릭
    const onDeleteUser = (id) => {
        dispatch(REMOVE_STATE({id}));
    };

    // 추가 버튼 클릭
    const onAddUser = (name) => {
      const id = userList[userList.length - 1].id + 1;
      dispatch(ADD_STATE({id, name}));
    //                      ⬆️ payload
    };

    return (
      <>
        <UserList onDeleteUser={onDeleteUser} />
        <AddUser onAddUser={onAddUser} />
      </>
    );
}
export default User;
