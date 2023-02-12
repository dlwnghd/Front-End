import { useContext } from "react";
import { UserContext } from "../context/user";

function UserList({ onDeleteUser }) {
  const userList = useContext(UserContext);

  return userList.map((user, index) => (
    <div key={index}>
      {user.id}. {user.name}
      <button onClick={() => onDeleteUser(user.id)}>삭제</button>
    </div>
  ));
}
export default UserList;
