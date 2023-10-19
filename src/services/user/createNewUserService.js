import axios from "axios";
import { USER_BASE_URL } from "../configService";

export const createUserAPI = (user) => {
  return axios.post(`${USER_BASE_URL}/register`, user);
};
