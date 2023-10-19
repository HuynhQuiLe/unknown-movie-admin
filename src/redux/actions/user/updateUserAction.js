import { message } from "antd";
import { updateUserAPI } from "../../../services/user/updateUserService";
import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../../constants/user/updateUserConstants";
import { getAllUsers } from "./getAllUsersAction";

export const updateUser = (id, user) => {
  return async (dispatch, getState) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    try {
      const { data } = await updateUserAPI(id, user);
      document.querySelector(".update-close-btn").click();
      dispatch({
        type: UPDATE_USER_SUCCESS,
      });
      dispatch(getAllUsers());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
