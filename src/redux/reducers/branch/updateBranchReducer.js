import {
  UPDATE_BRANCH_FAILURE,
  UPDATE_BRANCH_REQUEST,
  UPDATE_BRANCH_SUCCESS,
} from "../../constants/branch/updateBranchConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const updateBranchReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_BRANCH_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UPDATE_BRANCH_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case UPDATE_BRANCH_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
