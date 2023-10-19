import axios from "axios";
import { CAROUSEL_BASE_URL } from "../configService";

const createCarouselAPI = (carousel) => {
  return axios.post(CAROUSEL_BASE_URL, carousel);
};

export default createCarouselAPI;
