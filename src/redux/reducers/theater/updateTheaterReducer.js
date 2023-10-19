import {
  UPDATE_THEATER_FAILURE,
  UPDATE_THEATER_REQUEST,
  UPDATE_THEATER_SUCCESS,
} from "../../constants/theater/updateTheaterConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const updateTheaterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_THEATER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case UPDATE_THEATER_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case UPDATE_THEATER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
