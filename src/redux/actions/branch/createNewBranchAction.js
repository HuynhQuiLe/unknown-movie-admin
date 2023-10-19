import { message } from "antd";
import {
  CREATE_NEW_BRANCH_FAILURE,
  CREATE_NEW_BRANCH_REQUEST,
  CREATE_NEW_BRANCH_SUCCESS,
} from "../../constants/branch/createNewBranchConstants";
import createNewBranchAPI from "../../../services/branch/createNewBranchService";
import { getAllBranches } from "./getAllBranchesAction";

export const createNewBranch = (carousel) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_BRANCH_REQUEST });
    try {
      const { data } = await createNewBranchAPI(carousel);
      dispatch({ type: CREATE_NEW_BRANCH_SUCCESS });
      message.success(data.message);
      dispatch(getAllBranches());
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_BRANCH_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
