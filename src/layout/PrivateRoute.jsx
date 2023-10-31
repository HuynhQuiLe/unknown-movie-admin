import React from "react";
import { userLocalStorage } from "../services/localService";
import { useDispatch } from "react-redux";
import { LOGIN_FAILURE_ROLE } from "../redux/constants/user/loginConstants";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  let user = userLocalStorage.get();

  if (user?.chucVu == "ADMIN" || user?.chucVu == "Manager") {
    return children;
  }
  dispatch({ type: LOGIN_FAILURE_ROLE });
};

export default PrivateRoute;
