import axios from "axios";
import { SCHEDULE_BASE_URL } from "../configService";

const createNewScheduleAPI = (schedule) => {
  return axios.post(SCHEDULE_BASE_URL, schedule);
};

export default createNewScheduleAPI;
