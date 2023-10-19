import axios from "axios";
import { CAROUSEL_BASE_URL } from "../configService";

const getAllCarouselsAPI = () => {
  return axios.get(CAROUSEL_BASE_URL);
};

export default getAllCarouselsAPI;
