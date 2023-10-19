import axios from "axios";
import { CAROUSEL_BASE_URL } from "../configService";

const getCarouselByIDAPI = (id) => {
  return axios.get(`${CAROUSEL_BASE_URL}/${id}`);
};

export default getCarouselByIDAPI;
