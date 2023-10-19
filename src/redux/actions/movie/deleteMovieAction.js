import { message } from "antd";
import deleteMovieAPI from "../../../services/movie/deleteMovieService";
import {
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
} from "../../constants/movie/deleteMovieConstants";
import { getAllMovies } from "./getAllMoviesAction";

export const deleteMovie = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_MOVIE_REQUEST });
    try {
      const { data } = await deleteMovieAPI(id);
      dispatch({ type: DELETE_MOVIE_SUCCESS });
      document.querySelector("#close-delete-movie").click();
      dispatch(getAllMovies());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
