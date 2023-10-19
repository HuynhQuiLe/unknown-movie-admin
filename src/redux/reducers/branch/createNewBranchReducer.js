import {
  CREATE_NEW_BRANCH_FAILURE,
  CREATE_NEW_BRANCH_REQUEST,
  CREATE_NEW_BRANCH_SUCCESS,
} from "../../constants/branch/createNewBranchConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewBranchReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_BRANCH_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_NEW_BRANCH_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case CREATE_NEW_BRANCH_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
