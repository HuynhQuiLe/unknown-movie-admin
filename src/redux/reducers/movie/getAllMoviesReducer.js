import {
  GET_ALL_MOVIES_FAILURE,
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
} from "../../constants/movie/getAllMoviesConstants";

const initialState = {
  isLoading: false,
  movies: null,
  error: null,
};

export const getAllMoviesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_MOVIES_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: payload, error: null };

    case GET_ALL_MOVIES_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
