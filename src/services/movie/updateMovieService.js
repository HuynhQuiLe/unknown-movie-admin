import axios from "axios";
import { MOVIE_BASE_URL } from "../configService";

const updateMovieAPI = (id, movie) => {
  return axios.put(`${MOVIE_BASE_URL}/${id}`, movie);
};

export default updateMovieAPI;
