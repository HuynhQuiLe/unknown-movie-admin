import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "../../constants/user/getAllUsersConstants";

const initialState = {
  isLoading: false,
  users: null,
  error: null,
};

export const allUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_ALL_USERS_SUCCESS:
      return { ...state, users: payload, isLoading: false };
    case GET_ALL_USERS_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
