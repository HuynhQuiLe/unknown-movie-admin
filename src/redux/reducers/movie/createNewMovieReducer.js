import {
  CREATE_NEW_MOVIE_FAILURE,
  CREATE_NEW_MOVIE_REQUEST,
  CREATE_NEW_MOVIE_SUCCESS,
} from "../../constants/movie/createNewMovieConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewMovieReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_MOVIE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_NEW_MOVIE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case CREATE_NEW_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
