import { message } from "antd";
import {
  DELETE_BRANCH_FAILURE,
  DELETE_BRANCH_REQUEST,
  DELETE_BRANCH_SUCCESS,
} from "../../constants/branch/deleteBranchConstants";
import deleteBranchAPI from "../../../services/branch/deleteBranchService";
import { getAllBranches } from "./getAllBranchesAction";

export const deleteBranch = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: DELETE_BRANCH_REQUEST });
    try {
      const { data } = await deleteBranchAPI(id);
      dispatch({ type: DELETE_BRANCH_SUCCESS });
      document.querySelector("#close-delete-branch").click();
      dispatch(getAllBranches());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: DELETE_BRANCH_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
