import { useDispatch } from "react-redux";
import { useRef } from "react";

const UserAddForm = () => {
    const dispatch = useDispatch();
    const name = useRef(null);

    const onAddUser = () => {
        dispatch({
            type:"ADD_USER",
            payload: {
                id: Math.floor(Math.random() * 1000000),
                name: name.current.value
            }
        })
    }

    return (
      <>
        <input ref={name} />
        <button onClick={onAddUser}>추가</button>
      </>
    );
};
export default UserAddForm;
