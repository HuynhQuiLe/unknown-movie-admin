import getAllBranchesAPI from "../../../services/branch/getAllBranchesService";
import {
  GET_ALL_BRANCHES_FAILURE,
  GET_ALL_BRANCHES_REQUEST,
  GET_ALL_BRANCHES_SUCCESS,
} from "../../constants/branch/getAllBranchesConstants";

export const getAllBranches = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_BRANCHES_REQUEST });
    try {
      const { data } = await getAllBranchesAPI();
      dispatch({ type: GET_ALL_BRANCHES_SUCCESS, payload: data.branches });
    } catch (error) {
      dispatch({
        type: GET_ALL_BRANCHES_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
