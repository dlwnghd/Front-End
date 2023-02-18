import { useSelector } from "react-redux";

const UserList = () => {
    
    const userList = useSelector((state) => state.user)
    console.log(userList);
    
    return (
      <>
        {userList.map((user, index) => (
          <div key={index}>
            {index + 1}. {user.name}
          </div>
        ))}
      </>
    );
};
export default UserList;
