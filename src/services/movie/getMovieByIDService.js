import axios from "axios";
import { MOVIE_BASE_URL } from "../configService";

const getMovieByIDAPI = (id) => {
  return axios.get(`${MOVIE_BASE_URL}/${id}`);
};

export default getMovieByIDAPI;
