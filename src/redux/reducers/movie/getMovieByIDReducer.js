import {
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
} from "../../constants/movie/getMovieByIDConstants";

const initialState = {
  isLoading: false,
  movieByID: null,
  error: null,
};

export const getMovieByIDReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_MOVIE_BY_ID_SUCCESS:
      return { ...state, isLoading: false, movieByID: payload, error: null };

    case GET_MOVIE_BY_ID_REQUEST:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
