import { message } from "antd";
import createNewMovieAPI from "../../../services/movie/createNewMovieService";
import {
  CREATE_NEW_MOVIE_FAILURE,
  CREATE_NEW_MOVIE_REQUEST,
  CREATE_NEW_MOVIE_SUCCESS,
} from "../../constants/movie/createNewMovieConstants";
import { getAllMovies } from "./getAllMoviesAction";

export const createNewMovie = (movie) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_MOVIE_REQUEST });
    try {
      const { data } = await createNewMovieAPI(movie);
      dispatch({ type: CREATE_NEW_MOVIE_SUCCESS });
      message.success(data.message);
      dispatch(getAllMovies());
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_MOVIE_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
