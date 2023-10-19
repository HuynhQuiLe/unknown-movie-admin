import {
  CREATE_NEW_THEATER_FAILURE,
  CREATE_NEW_THEATER_REQUEST,
  CREATE_NEW_THEATER_SUCCESS,
} from "../../constants/theater/createNewTheaterConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewTheaterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_THEATER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_NEW_THEATER_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case CREATE_NEW_THEATER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
