import getMovieByIDAPI from "../../../services/movie/getMovieByIDService";
import {
  GET_MOVIE_BY_ID_FAILURE,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
} from "../../constants/movie/getMovieByIDConstants";

export const getMovieByID = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_MOVIE_BY_ID_REQUEST });
    try {
      const { data } = await getMovieByIDAPI(id);
      dispatch({ type: GET_MOVIE_BY_ID_SUCCESS, payload: data.movie });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_BY_ID_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
