import axios from "axios";
import { CAROUSEL_BASE_URL } from "../configService";

const deleteCarouselAPI = (id) => {
  return axios.delete(`${CAROUSEL_BASE_URL}/${id}`);
};

export default deleteCarouselAPI;
