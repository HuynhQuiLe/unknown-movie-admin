import { message } from "antd";
import {
  DELETE_CAROUSEL_FAILURE,
  DELETE_CAROUSEL_REQUEST,
  DELETE_CAROUSEL_SUCCESS,
} from "../../constants/carousel/deleteCarouelConstants";
import { getAllCarousels } from "./getAllCarouselsAction";
import deleteCarouselAPI from "../../../services/carousel/deleteCarouselService";

export const deleteCarousel = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_CAROUSEL_REQUEST });
    try {
      const { data } = await deleteCarouselAPI(id);
      dispatch({ type: DELETE_CAROUSEL_SUCCESS });
      document.querySelector("#close-delete-carousel").click();
      dispatch(getAllCarousels());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: DELETE_CAROUSEL_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
