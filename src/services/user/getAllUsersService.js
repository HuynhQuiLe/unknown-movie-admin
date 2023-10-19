import axios from "axios";
import { USER_BASE_URL } from "../configService";

export const getAllUsersAPI = () => {
  return axios.get(USER_BASE_URL);
};
