import axios from "axios";
import { USER_BASE_URL } from "../configService";

const loginAPI = (user) => {
  return axios.post(`${USER_BASE_URL}/login`, user);
};

export default loginAPI;
