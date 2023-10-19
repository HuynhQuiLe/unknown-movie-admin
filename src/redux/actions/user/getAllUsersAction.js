import { getAllUsersAPI } from "../../../services/user/getAllUsersService";
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from "../../constants/user/getAllUsersConstants";

export const getAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
    });
    try {
      let { data: users } = await getAllUsersAPI();
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: users,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload: error.response.message,
      });
    }
  };
};
