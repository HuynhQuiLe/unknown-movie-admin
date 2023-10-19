import axios from "axios";
import { THEATER_BASE_URL } from "../configService";

const getTheaterByMaHeThongRapAPI = (maHeThongRap) => {
  return axios.get(`${THEATER_BASE_URL}/${maHeThongRap}`);
};

export default getTheaterByMaHeThongRapAPI;
