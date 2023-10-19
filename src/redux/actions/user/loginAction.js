import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../constants/user/loginConstants";
import loginAPI from "../../../services/user/loginService";

export const login = (user) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    try {
      const { data } = await loginAPI(user);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
