import {
  CREATE_NEW_CAROUSEL_FAILURE,
  CREATE_NEW_CAROUSEL_REQUEST,
  CREATE_NEW_CAROUSEL_SUCCESS,
} from "../../constants/carousel/createNewCarouselConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewCarouselReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_CAROUSEL_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_NEW_CAROUSEL_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case CREATE_NEW_CAROUSEL_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
