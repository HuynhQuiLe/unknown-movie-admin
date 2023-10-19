import { message } from "antd";
import {
  CREATE_NEW_USER_FAILURE,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
} from "../../constants/user/createNewUserConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewUserReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_NEW_USER_SUCCESS:
      message.success("Tạo mới tài khoản thành công.");
      return { ...state, isLoading: false, error: null };
    case CREATE_NEW_USER_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
