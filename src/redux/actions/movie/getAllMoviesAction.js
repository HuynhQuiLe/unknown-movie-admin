import { message } from "antd";
import {
  GET_ALL_MOVIES_FAILURE,
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
} from "../../constants/movie/getAllMoviesConstants";
import getAllMoviesAPI from "../../../services/movie/getAllMoviesService";

export const getAllMovies = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_MOVIES_REQUEST });
    try {
      const { data } = await getAllMoviesAPI();
      dispatch({ type: GET_ALL_MOVIES_SUCCESS, payload: data.movies });
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: GET_ALL_MOVIES_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
