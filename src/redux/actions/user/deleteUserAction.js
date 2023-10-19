import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../../constants/user/deleteUserConstants";
import { deleteUserAPI } from "../../../services/user/deleteUserService";
import { getAllUsers } from "./getAllUsersAction";
import { message } from "antd";

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      const { data } = await deleteUserAPI(id);
      dispatch({ type: DELETE_USER_SUCCESS, payload: data.message });
      dispatch(getAllUsers());
      document.querySelector("#close-delete").click();
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);

      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
