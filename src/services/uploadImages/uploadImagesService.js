import axios from "axios";
import { UPLOAD_IMAGES_URL } from "../configService";

const uploadImagesAPI = (data) => {
  return axios.post(UPLOAD_IMAGES_URL, data);
};

export default uploadImagesAPI;
