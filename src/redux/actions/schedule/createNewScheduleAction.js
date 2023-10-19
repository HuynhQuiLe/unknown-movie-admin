import { message } from "antd";
import {
  CREATE_NEW_SCHEDULE_FAILURE,
  CREATE_NEW_SCHEDULE_REQUEST,
  CREATE_NEW_SCHEDULE_SUCCESS,
} from "../../constants/schedule/createNewScheduleConstants";
import createNewScheduleAPI from "../../../services/schedule/createNewScheduleService";
import { getAllSchedules } from "./getAllSchedulesAction";

export const createNewSchedule = (schedule) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_SCHEDULE_REQUEST });
    try {
      const { data } = await createNewScheduleAPI(schedule);
      dispatch({ type: CREATE_NEW_SCHEDULE_SUCCESS });
      message.success(data.message);
      dispatch(getAllSchedules());
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_SCHEDULE_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
