import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const getAllBranchesAPI = () => {
  return axios.get(BRANCH_BASE_URL);
};

export default getAllBranchesAPI;
