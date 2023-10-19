import {
  DELETE_BRANCH_FAILURE,
  DELETE_BRANCH_REQUEST,
  DELETE_BRANCH_SUCCESS,
} from "../../constants/branch/deleteBranchConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const deleteBranchReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DELETE_BRANCH_REQUEST:
      return { ...state, isLoading: true, error: null };

    case DELETE_BRANCH_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case DELETE_BRANCH_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
