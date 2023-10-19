import axios from "axios";
import { THEATER_BASE_URL } from "../configService";

const getAllTheatersAPI = () => {
  return axios.get(THEATER_BASE_URL);
};

export default getAllTheatersAPI;
