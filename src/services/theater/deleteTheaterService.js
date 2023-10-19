import axios from "axios";
import { THEATER_BASE_URL } from "../configService";

const deleteTheaterAPI = (maHeThongRap) => {
  return axios.delete(`${THEATER_BASE_URL}/${maHeThongRap}`);
};

export default deleteTheaterAPI;
