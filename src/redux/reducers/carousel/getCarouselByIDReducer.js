import {
  GET_CAROUSEL_BY_ID_FAILURE,
  GET_CAROUSEL_BY_ID_REQUEST,
  GET_CAROUSEL_BY_ID_SUCCESS,
} from "../../constants/carousel/getCarouselByIDConstants";

const initialState = {
  isLoading: false,
  carouselByID: null,
  error: null,
};

export const getCarouselByIDReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_CAROUSEL_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CAROUSEL_BY_ID_SUCCESS:
      return { ...state, isLoading: false, carouselByID: payload, error: null };
    case GET_CAROUSEL_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
