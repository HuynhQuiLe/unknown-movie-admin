import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const getBranchByMaCumRapAPI = (maCumRap) => {
  return axios.get(`${BRANCH_BASE_URL}/${maCumRap}`);
};

export default getBranchByMaCumRapAPI;
