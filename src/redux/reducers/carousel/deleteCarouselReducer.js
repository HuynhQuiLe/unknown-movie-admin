import {
  DELETE_CAROUSEL_FAILURE,
  DELETE_CAROUSEL_REQUEST,
  DELETE_CAROUSEL_SUCCESS,
} from "../../constants/carousel/deleteCarouelConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const deleteCarouselReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DELETE_CAROUSEL_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_CAROUSEL_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case DELETE_CAROUSEL_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
