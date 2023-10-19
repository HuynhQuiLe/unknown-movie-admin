import { message } from "antd";
import {
  DELETE_THEATER_FAILURE,
  DELETE_THEATER_REQUEST,
  DELETE_THEATER_SUCCESS,
} from "../../constants/theater/deleteTheaterConstants";
import deleteTheaterAPI from "../../../services/theater/deleteTheaterService";
import { getAllTheaters } from "./getAllTheatersAction";

export const deleteTheater = (maHeThongRap) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_THEATER_REQUEST });
    try {
      const { data } = await deleteTheaterAPI(maHeThongRap);
      dispatch({ type: DELETE_THEATER_SUCCESS });
      document.querySelector("#close-delete-theater").click();
      dispatch(getAllTheaters());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: DELETE_THEATER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
