import { message } from "antd";
import createCarouselAPI from "../../../services/carousel/createNewCarouselSevice";
import {
  CREATE_NEW_CAROUSEL_FAILURE,
  CREATE_NEW_CAROUSEL_REQUEST,
  CREATE_NEW_CAROUSEL_SUCCESS,
} from "../../constants/carousel/createNewCarouselConstants";
import { getAllCarousels } from "./getAllCarouselsAction";

export const createCarousel = (carousel) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_CAROUSEL_REQUEST });
    try {
      const { data } = await createCarouselAPI(carousel);
      dispatch({ type: CREATE_NEW_CAROUSEL_SUCCESS });
      message.success(data.message);
      dispatch(getAllCarousels());
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_CAROUSEL_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
