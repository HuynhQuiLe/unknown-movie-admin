import {
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
} from "../../constants/movie/updateMovieConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const updateMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UPDATE_MOVIE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case UPDATE_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
