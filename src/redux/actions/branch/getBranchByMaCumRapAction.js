import getBranchByMaCumRapAPI from "../../../services/branch/getBranchByMaCumRapService";
import {
  GET_BRANCH_BY_MA_CUM_RAP_FAILURE,
  GET_BRANCH_BY_MA_CUM_RAP_REQUEST,
  GET_BRANCH_BY_MA_CUM_RAP_SUCCESS,
} from "../../constants/branch/getBranchByMaCumRapConstants";

export const getBranchByMaCumRap = (maCumRap) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_BRANCH_BY_MA_CUM_RAP_REQUEST });
    try {
      const { data } = await getBranchByMaCumRapAPI(maCumRap);
      dispatch({
        type: GET_BRANCH_BY_MA_CUM_RAP_SUCCESS,
        payload: data.branchByMaCumRap,
      });
    } catch (error) {
      dispatch({
        type: GET_BRANCH_BY_MA_CUM_RAP_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
