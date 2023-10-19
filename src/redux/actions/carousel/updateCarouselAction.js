import { message } from "antd";
import updateCarouselAPI from "../../../services/carousel/updateCarouselService";
import {
  UPDATE_CAROUSEL_FAILURE,
  UPDATE_CAROUSEL_REQUEST,
  UPDATE_CAROUSEL_SUCCESS,
} from "../../constants/carousel/updateCarouselConstants";
import { getAllCarousels } from "./getAllCarouselsAction";

export const updateCarousel = (id, carousel) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_CAROUSEL_REQUEST });
    try {
      const { data } = await updateCarouselAPI(id, carousel);
      dispatch({ type: UPDATE_CAROUSEL_SUCCESS });
      document.querySelector("#close-btn-update-carousel").click();
      dispatch(getAllCarousels());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: UPDATE_CAROUSEL_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
