import {
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
} from "../../constants/user/getUserByIDConstants";

const initialState = {
  isLoading: false,
  userByID: null,
  error: null,
};

export const getUserByIDReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_USER_BY_ID_SUCCESS:
      return { ...state, userByID: payload, isLoading: false, error: null };
    case GET_USER_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
