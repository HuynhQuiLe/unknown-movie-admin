import {
  GET_ALL_SCHEDULES_REQUEST,
  GET_ALL_SCHEDULES_SUCCESS,
  GET_ALL_SCHEDULES_FAILURE,
} from "../../constants/schedule/getAllSchedulesConstants";

const initialState = {
  isLoading: false,
  schedules: null,
  error: null,
};

export const getAllSchedulesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_SCHEDULES_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_SCHEDULES_SUCCESS:
      console.log(payload);
      return { ...state, isLoading: false, schedules: payload, error: null };

    case GET_ALL_SCHEDULES_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
