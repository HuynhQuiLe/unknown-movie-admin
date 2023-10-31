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

      if (data.user.chucVu === "ADMIN" || data.user.chucVu === "Manager") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.user,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload:
            "Bạn không có quyền truy cập. Vui lòng liên hệ ADMIN để được phân quyền.",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
