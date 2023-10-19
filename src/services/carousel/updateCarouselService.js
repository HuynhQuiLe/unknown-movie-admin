import axios from "axios";
import { CAROUSEL_BASE_URL } from "../configService";

const updateCarouselAPI = (id, carousel) => {
  return axios.put(`${CAROUSEL_BASE_URL}/${id}`, carousel);
};

export default updateCarouselAPI;
