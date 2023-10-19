import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const createNewBranchAPI = (branch) => {
  return axios.post(BRANCH_BASE_URL, branch);
};

export default createNewBranchAPI;
