import {
  GET_BRANCH_BY_MA_CUM_RAP_FAILURE,
  GET_BRANCH_BY_MA_CUM_RAP_REQUEST,
  GET_BRANCH_BY_MA_CUM_RAP_SUCCESS,
} from "../../constants/branch/getBranchByMaCumRapConstants";

const initialState = {
  isLoading: false,
  branchByMaCumRap: null,
  error: null,
};

export const getBranchByMaCumRapReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_BRANCH_BY_MA_CUM_RAP_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_BRANCH_BY_MA_CUM_RAP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        branchByMaCumRap: payload,
        error: null,
      };

    case GET_BRANCH_BY_MA_CUM_RAP_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
