import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const deleteBranchAPI = (maCumRap) => {
  return axios.delete(`${BRANCH_BASE_URL}/${maCumRap}`);
};

export default deleteBranchAPI;
