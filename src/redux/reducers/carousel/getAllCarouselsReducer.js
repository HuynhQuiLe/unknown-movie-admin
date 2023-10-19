import {
  GET_ALL_CAROUSELS_FAILURE,
  GET_ALL_CAROUSELS_REQUEST,
  GET_ALL_CAROUSELS_SUCCESS,
} from "../../constants/carousel/getAllCarouselsConstants";

const initialState = {
  isLoading: false,
  carousels: null,
  error: null,
};

export const getAllCarouselsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_CAROUSELS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_CAROUSELS_SUCCESS:
      return { ...state, isLoading: false, carousels: payload, error: null };
    case GET_ALL_CAROUSELS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
