import { SET_LOGIN } from "../../actions";

export const login = (state, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.value }
    default:
      return state;
  }
}

