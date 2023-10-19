import { message } from "antd";
import {
  UPDATE_THEATER_FAILURE,
  UPDATE_THEATER_REQUEST,
  UPDATE_THEATER_SUCCESS,
} from "../../constants/theater/updateTheaterConstants";
import updateTheaterAPI from "../../../services/theater/updateTheaterService";
import { getAllTheaters } from "./getAllTheatersAction";

export const updateTheater = (theaterUpdate) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_THEATER_REQUEST });
    try {
      const { data } = await updateTheaterAPI(theaterUpdate);
      dispatch({ type: UPDATE_THEATER_SUCCESS });
      document.querySelector("#close-btn-update-theater").click();
      dispatch(getAllTheaters());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: UPDATE_THEATER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
