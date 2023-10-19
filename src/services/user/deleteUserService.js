import axios from "axios";
import { USER_BASE_URL } from "../configService";

export const deleteUserAPI = (id) => {
  return axios.delete(`${USER_BASE_URL}/${id}`);
};
