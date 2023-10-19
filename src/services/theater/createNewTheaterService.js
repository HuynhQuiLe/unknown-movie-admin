import axios from "axios";
import { THEATER_BASE_URL } from "../configService";

const createNewTheaterAPI = (theater) => {
  return axios.post(THEATER_BASE_URL, theater);
};

export default createNewTheaterAPI;
