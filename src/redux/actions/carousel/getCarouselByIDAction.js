import getCarouselByIDAPI from "../../../services/carousel/getCarouselByIDService";
import {
  GET_CAROUSEL_BY_ID_FAILURE,
  GET_CAROUSEL_BY_ID_REQUEST,
  GET_CAROUSEL_BY_ID_SUCCESS,
} from "../../constants/carousel/getCarouselByIDConstants";

export const getCarouselByID = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_CAROUSEL_BY_ID_REQUEST });
    try {
      const { data } = await getCarouselByIDAPI(id);
      dispatch({ type: GET_CAROUSEL_BY_ID_SUCCESS, payload: data.carousel });
    } catch (error) {
      dispatch({
        type: GET_CAROUSEL_BY_ID_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
