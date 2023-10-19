import { message } from "antd";
import {
  CREATE_NEW_THEATER_FAILURE,
  CREATE_NEW_THEATER_REQUEST,
  CREATE_NEW_THEATER_SUCCESS,
} from "../../constants/theater/createNewTheaterConstants";
import { getAllTheaters } from "./getAllTheatersAction";
import createNewTheaterAPI from "../../../services/theater/createNewTheaterService";

export const createNewTheater = (theater) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_THEATER_REQUEST });
    try {
      const { data } = await createNewTheaterAPI(theater);
      dispatch({ type: CREATE_NEW_THEATER_SUCCESS });
      message.success(data.message);
      dispatch(getAllTheaters());
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_THEATER_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
