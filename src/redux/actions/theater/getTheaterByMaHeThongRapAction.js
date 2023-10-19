import getTheaterByMaHeThongRapAPI from "../../../services/theater/getTheaterByMaHeThongRapService";
import {
  GET_THEATER_BY_MA_HE_THONG_RAP_FAILURE,
  GET_THEATER_BY_MA_HE_THONG_RAP_REQUEST,
  GET_THEATER_BY_MA_HE_THONG_RAP_SUCCESS,
} from "../../constants/theater/getTheaterByMaHeThongRapConstants";

export const getTheaterByMaHeThongRap = (maHeThongRap) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_THEATER_BY_MA_HE_THONG_RAP_REQUEST });
    try {
      const { data } = await getTheaterByMaHeThongRapAPI(maHeThongRap);
      dispatch({
        type: GET_THEATER_BY_MA_HE_THONG_RAP_SUCCESS,
        payload: data.theater,
      });
    } catch (error) {
      dispatch({
        type: GET_THEATER_BY_MA_HE_THONG_RAP_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
