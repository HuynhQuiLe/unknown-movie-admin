import axios from "axios";
import { MOVIE_BASE_URL } from "../configService";

const getAllMoviesAPI = () => {
  return axios.get(MOVIE_BASE_URL);
};

export default getAllMoviesAPI;
