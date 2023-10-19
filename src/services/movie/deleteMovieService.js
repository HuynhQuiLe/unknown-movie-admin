import axios from "axios";
import { MOVIE_BASE_URL } from "../configService";

const deleteMovieAPI = (id) => {
  return axios.delete(`${MOVIE_BASE_URL}/${id}`);
};

export default deleteMovieAPI;
