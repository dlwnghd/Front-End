import { useState } from "react";

function AddUser({ onAddUser }) {
  
  // 상태 관리
  const [userName, setUserName] = useState();
  
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onClickAddUserBtn = () => {
    onAddUser(userName);
    setUserName("");
  };

  return (
    <>
      <input onChange={onChangeUserName} />
      <button onClick={onClickAddUserBtn}>추가</button>
    </>
  );
}
export default AddUser;
