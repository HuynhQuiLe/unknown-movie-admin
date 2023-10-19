import {
  UPDATE_CAROUSEL_FAILURE,
  UPDATE_CAROUSEL_REQUEST,
  UPDATE_CAROUSEL_SUCCESS,
} from "../../constants/carousel/updateCarouselConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const updateCarouselReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_CAROUSEL_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_CAROUSEL_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case UPDATE_CAROUSEL_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
