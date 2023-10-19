import axios from "axios";
import { SCHEDULE_BASE_URL } from "../configService";

const getAllSchedulesAPI = () => {
  return axios.get(SCHEDULE_BASE_URL);
};

export default getAllSchedulesAPI;
