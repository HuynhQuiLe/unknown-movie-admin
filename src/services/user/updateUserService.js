import axios from "axios";
import { USER_BASE_URL } from "../configService";

export const updateUserAPI = (id, user) => {
  return axios.put(`${USER_BASE_URL}/${id}`, user);
};
