import { message } from "antd";
import { getUserAPI } from "../../../services/user/getUserByIDService";
import {
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
} from "../../constants/user/getUserByIDConstants";

export const getUser = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_USER_BY_ID_REQUEST });
    try {
      const { data } = await getUserAPI(id);
      dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: data.user });
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: GET_USER_BY_ID_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
