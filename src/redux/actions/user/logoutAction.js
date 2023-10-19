import { LOGOUT } from "../../constants/user/logoutConstants";

export const logout = () => {
  return async (dispatch, getState) => {
    console.log("out");
    dispatch({
      type: LOGOUT,
    });
  };
};
