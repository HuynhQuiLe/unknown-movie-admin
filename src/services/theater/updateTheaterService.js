import axios from "axios";
import { THEATER_BASE_URL } from "../configService";

const updateTheaterAPI = (theaterUpdate) => {
  return axios.put(
    `${THEATER_BASE_URL}/${theaterUpdate.maHeThongRap}`,
    theaterUpdate
  );
};

export default updateTheaterAPI;
