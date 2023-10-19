import {
  GET_ALL_THEATERS_FAILURE,
  GET_ALL_THEATERS_REQUEST,
  GET_ALL_THEATERS_SUCCESS,
} from "../../constants/theater/getAllTheatersConstants";

const initialState = {
  isLoading: false,
  theaters: null,
  error: null,
};

export const getAllTheatersReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_THEATERS_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_THEATERS_SUCCESS:
      return { ...state, isLoading: false, theaters: payload, error: null };

    case GET_ALL_THEATERS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
