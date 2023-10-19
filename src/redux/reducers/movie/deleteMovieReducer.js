import {
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
} from "../../constants/movie/deleteMovieConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const deleteMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case DELETE_MOVIE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case DELETE_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
