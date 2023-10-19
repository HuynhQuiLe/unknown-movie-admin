import axios from "axios";
import { MOVIE_BASE_URL } from "../configService";

const createNewMovieAPI = (movie) => {
  return axios.post(MOVIE_BASE_URL, movie);
};

export default createNewMovieAPI;
