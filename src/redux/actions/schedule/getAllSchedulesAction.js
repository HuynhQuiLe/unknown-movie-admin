import getAllSchedulesAPI from "../../../services/schedule/getAllSchedulesService";
import {
  GET_ALL_SCHEDULES_REQUEST,
  GET_ALL_SCHEDULES_SUCCESS,
  GET_ALL_SCHEDULES_FAILURE,
} from "../../constants/schedule/getAllSchedulesConstants";

export const getAllSchedules = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_SCHEDULES_REQUEST });
    try {
      const { data } = await getAllSchedulesAPI();
      dispatch({ type: GET_ALL_SCHEDULES_SUCCESS, payload: data.schedules });
    } catch (error) {
      dispatch({
        type: GET_ALL_SCHEDULES_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
