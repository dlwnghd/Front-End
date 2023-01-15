import produce from "immer";

const initialState = {
  info: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,

  logoutLoading: false,
  logoutDone: false,
  logoutError: null,

  signinLoading: false,
  signinDone: false,
  signinError: null,
};

export const dummyUser = (data) => ({
  ...data,
  nickname: "성용님",
  id: 1,
  Posts: [{ id: 1 }],
});

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_IN_DONE_REQUEST = "SIGN_IN_DONE_REQUEST";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.info = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.info = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case SIGN_IN_REQUEST:
        draft.signinLoading = true;
        draft.signinDone = false;
        draft.signinError = null;
        break;
      case SIGN_IN_SUCCESS:
        draft.signinLoading = false;
        draft.signinDone = true;
        break;
      case SIGN_IN_FAILURE:
        draft.signinLoading = false;
        draft.signinError = action.error;
        break;

      default:
        return state;
    }
  });
export default reducer;
