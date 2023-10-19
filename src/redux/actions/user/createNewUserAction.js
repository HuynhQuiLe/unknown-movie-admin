import { createUserAPI } from "../../../services/user/createNewUserService";
import {
  CREATE_NEW_USER_FAILURE,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
} from "../../constants/user/createNewUserConstants";
import { getAllUsers } from "./getAllUsersAction";

export const createUser = (user) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CREATE_NEW_USER_REQUEST,
    });
    try {
      await createUserAPI(user);
      dispatch(
        {
          type: CREATE_NEW_USER_SUCCESS,
        },

        dispatch(getAllUsers())
      );
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_USER_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
