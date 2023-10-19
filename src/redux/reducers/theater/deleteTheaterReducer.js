import {
  DELETE_THEATER_FAILURE,
  DELETE_THEATER_REQUEST,
  DELETE_THEATER_SUCCESS,
} from "../../constants/theater/deleteTheaterConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const deleteTheaterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DELETE_THEATER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case DELETE_THEATER_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case DELETE_THEATER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
