import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../../constants/user/updateUserConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const updateUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UPDATE_USER_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case UPDATE_USER_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
