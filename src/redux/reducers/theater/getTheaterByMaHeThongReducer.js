import {
  GET_THEATER_BY_MA_HE_THONG_RAP_FAILURE,
  GET_THEATER_BY_MA_HE_THONG_RAP_REQUEST,
  GET_THEATER_BY_MA_HE_THONG_RAP_SUCCESS,
} from "../../constants/theater/getTheaterByMaHeThongRapConstants";

const initialState = {
  isLoading: false,
  theaterByMaHeThong: null,
  error: null,
};

export const getTheaterByMaHeThongReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_THEATER_BY_MA_HE_THONG_RAP_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_THEATER_BY_MA_HE_THONG_RAP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        theaterByMaHeThong: payload,
        error: null,
      };

    case GET_THEATER_BY_MA_HE_THONG_RAP_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
