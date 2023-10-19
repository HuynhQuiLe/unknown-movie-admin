import {
  GET_ALL_BRANCHES_FAILURE,
  GET_ALL_BRANCHES_REQUEST,
  GET_ALL_BRANCHES_SUCCESS,
} from "../../constants/branch/getAllBranchesConstants";

const initialState = {
  isLoading: false,
  branches: null,
  error: null,
};

export const getAllBranchesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_BRANCHES_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_BRANCHES_SUCCESS:
      return { ...state, isLoading: false, branches: payload, error: null };

    case GET_ALL_BRANCHES_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
