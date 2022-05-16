import { GET_USERS } from "./action";
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "./action";

const inintState = {
  users: [],
  isLoading: false,
  isError: false,
  token: "",
  userData: {},
};

export const authReducer = (state = inintState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        users: [],
      };

    case GET_USERS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        users: [],
      };

    default:
      return state;
  }
};
