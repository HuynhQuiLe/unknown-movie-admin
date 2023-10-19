import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// user
import { loginReducer } from "./reducers/user/loginReducer";
import { allUsersReducer } from "./reducers/user/allUsersReducer";
import { createNewUserReducer } from "./reducers/user/createNewUserReducer";
import { getUserByIDReducer } from "./reducers/user/getUserByIDReducer";
import { updateUserReducer } from "./reducers/user/updateUserReducer";

// carousel
import { getAllCarouselsReducer } from "./reducers/carousel/getAllCarouselsReducer";
import { createNewCarouselReducer } from "./reducers/carousel/createNewCarouselReducer";
import { getCarouselByIDReducer } from "./reducers/carousel/getCarouselByIDReducer";
import { deleteCarouselReducer } from "./reducers/carousel/deleteCarouselReducer";
import { updateCarouselReducer } from "./reducers/carousel/updateCarouselReducer";

// movie
import { getAllMoviesReducer } from "./reducers/movie/getAllMoviesReducer";
import { createNewMovieReducer } from "./reducers/movie/createNewMovieReducer";
import { getMovieByIDReducer } from "./reducers/movie/getMovieByIDReducer";
import { deleteMovieReducer } from "./reducers/movie/deleteMovieReducer";
import { updateMovieReducer } from "./reducers/movie/updateMovieReducer";

// theater
import { getAllTheatersReducer } from "./reducers/theater/getAllTheatersReducer";
import { createNewTheaterReducer } from "./reducers/theater/createNewTheaterReducer";
import { getTheaterByMaHeThongReducer } from "./reducers/theater/getTheaterByMaHeThongReducer";
import { deleteTheaterReducer } from "./reducers/theater/deleteTheaterReducer";
import { updateTheaterReducer } from "./reducers/theater/updateTheaterReducer";

// branch
import { getAllBranchesReducer } from "./reducers/branch/getAllBranchesReducer";
import { createNewBranchReducer } from "./reducers/branch/createNewBranchReducer";
import { getBranchByMaCumRapReducer } from "./reducers/branch/getBranchByMaCumRapReducer";
import { deleteBranchReducer } from "./reducers/branch/deleteBranchReducer";
import { updateBranchReducer } from "./reducers/branch/updateBranchReducer";

// schedule
import { getAllSchedulesReducer } from "./reducers/schedule/getAllSchedulesReducer";
import { createNewScheduleReducer } from "./reducers/schedule/createNewScheduleReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  // user
  loginReducer,
  allUsersReducer,
  createNewUserReducer,
  getUserByIDReducer,
  updateUserReducer,

  // carousel
  getAllCarouselsReducer,
  createNewCarouselReducer,
  getCarouselByIDReducer,
  deleteCarouselReducer,
  updateCarouselReducer,

  // movie
  getAllMoviesReducer,
  createNewMovieReducer,
  getMovieByIDReducer,
  deleteMovieReducer,
  updateMovieReducer,

  // theater
  getAllTheatersReducer,
  createNewTheaterReducer,
  getTheaterByMaHeThongReducer,
  deleteTheaterReducer,
  updateTheaterReducer,

  // branch
  getAllBranchesReducer,
  createNewBranchReducer,
  getBranchByMaCumRapReducer,
  deleteBranchReducer,
  updateBranchReducer,

  // schedule
  getAllSchedulesReducer,
  createNewScheduleReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
