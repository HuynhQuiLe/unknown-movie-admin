import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const updateBranchAPI = (branchUpdate) => {
  return axios.put(`${BRANCH_BASE_URL}/${branchUpdate.maCumRap}`, branchUpdate);
};

export default updateBranchAPI;
