import { message } from "antd";
import {
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
} from "../../constants/movie/updateMovieConstants";
import updateMovieAPI from "../../../services/movie/updateMovieService";
import { getAllMovies } from "./getAllMoviesAction";

export const updateMovie = (id, movie) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_MOVIE_REQUEST });
    try {
      const { data } = await updateMovieAPI(id, movie);
      dispatch({ type: UPDATE_MOVIE_SUCCESS });
      document.querySelector("#close-btn-update-movie").click();
      dispatch(getAllMovies());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: UPDATE_MOVIE_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
