import getAllCarouselsAPI from "../../../services/carousel/getAllCarouselsService";
import {
  GET_ALL_CAROUSELS_FAILURE,
  GET_ALL_CAROUSELS_REQUEST,
  GET_ALL_CAROUSELS_SUCCESS,
} from "../../constants/carousel/getAllCarouselsConstants";

export const getAllCarousels = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_CAROUSELS_REQUEST });
    try {
      const { data } = await getAllCarouselsAPI();
      dispatch({ type: GET_ALL_CAROUSELS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_CAROUSELS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
