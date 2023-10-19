import {
  CREATE_NEW_SCHEDULE_FAILURE,
  CREATE_NEW_SCHEDULE_REQUEST,
  CREATE_NEW_SCHEDULE_SUCCESS,
} from "../../constants/schedule/createNewScheduleConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewScheduleReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_SCHEDULE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_NEW_SCHEDULE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case CREATE_NEW_SCHEDULE_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
