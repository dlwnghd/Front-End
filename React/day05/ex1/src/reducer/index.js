export const reducer = function reducer(state, action) {
    switch (action.type ){
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
        default:
            return state;
    }
}



export const reducerState = function reducer(state, action) {
    switch (action.type){
        case "INCREMENT":
            return[...state, {id: action.id, name: action.name}]
        case "REMOVESTATE":
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}