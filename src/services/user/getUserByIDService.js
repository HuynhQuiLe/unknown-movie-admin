import axios from "axios";
import { USER_BASE_URL } from "../configService";

export const getUserAPI = (id) => {
  return axios.get(`${USER_BASE_URL}/${id}`);
};
