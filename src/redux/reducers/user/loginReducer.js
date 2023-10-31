import { userLocalStorage } from "../../../services/localService";
import {
  LOGIN_FAILURE,
  LOGIN_FAILURE_ROLE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../constants/user/loginConstants";
import { LOGOUT } from "../../constants/user/logoutConstants";

const initialState = {
  isLoading: false,
  user: userLocalStorage.get() || null,
  error: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      userLocalStorage.set(payload);
      return { ...state, user: payload, isLoading: false };

    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case LOGIN_FAILURE_ROLE:
      const user = userLocalStorage.get();
      if (user) {
        userLocalStorage.remove();
      }
      window.location.href = "/login";
      return {
        ...state,
        isLoading: false,
        user: null,
        error:
          "Bạn không có quyền truy cập. Vui lòng liên hệ ADMIN để được phân quyền.",
      };

    case LOGOUT:
      userLocalStorage.remove();
      window.location.href = "/login";
      return { ...state, user: null };
    default:
      return { ...state };
  }
};
