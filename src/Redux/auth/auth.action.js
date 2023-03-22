import { LoginApi } from "./auth.api";
import {
  ERROR_AUTH,
  LOADING_AUTH,
  LOGOUT_AUTH,
  SUCCESS_AUTH,
} from "./auth.type";

export const loginUser = (cred) => async (dispatch) => {
  dispatch({ type: LOADING_AUTH });
  try {
    const data = await LoginApi(cred);
    dispatch({ type: SUCCESS_AUTH, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_AUTH });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_AUTH });
};
