import getAllTheatersAPI from "../../../services/theater/getAllTheatersService";
import {
  GET_ALL_THEATERS_FAILURE,
  GET_ALL_THEATERS_REQUEST,
  GET_ALL_THEATERS_SUCCESS,
} from "../../constants/theater/getAllTheatersConstants";

export const getAllTheaters = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_THEATERS_REQUEST });
    try {
      const { data } = await getAllTheatersAPI();
      dispatch({ type: GET_ALL_THEATERS_SUCCESS, payload: data.theaters });
    } catch (error) {
      dispatch({
        type: GET_ALL_THEATERS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
