import { message } from "antd";
import {
  UPDATE_BRANCH_FAILURE,
  UPDATE_BRANCH_REQUEST,
  UPDATE_BRANCH_SUCCESS,
} from "../../constants/branch/updateBranchConstants";
import updateBranchAPI from "../../../services/branch/updateBranchService";
import { getAllBranches } from "./getAllBranchesAction";

export const updateBranch = (id, carousel) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_BRANCH_REQUEST });
    try {
      const { data } = await updateBranchAPI(id, carousel);
      dispatch({ type: UPDATE_BRANCH_SUCCESS });
      document.querySelector("#close-btn-update-branch").click();
      dispatch(getAllBranches());
      message.success(data.message);
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: UPDATE_BRANCH_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
