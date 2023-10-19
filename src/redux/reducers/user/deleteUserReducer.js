import { message } from "antd";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../../constants/user/deleteUserConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const deleteUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case DELETE_USER_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case DELETE_USER_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
