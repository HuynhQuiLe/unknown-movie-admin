import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheaters } from "../../redux/actions/theater/getAllTheatersAction";
import { getAllMovies } from "../../redux/actions/movie/getAllMoviesAction";
import { getAllBranches } from "../../redux/actions/branch/getAllBranchesAction";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { createNewSchedule } from "../../redux/actions/schedule/createNewScheduleAction";

const ScheduleForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(
    (state) => state.createNewScheduleReducer
  );

  const { theaters } = useSelector((state) => state.getAllTheatersReducer);
  const { movies } = useSelector((state) => state.getAllMoviesReducer);
  const { branches } = useSelector((state) => state.getAllBranchesReducer);

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledCumRap, setIsDisabledCumRap] = useState(true);
  const [isDisabledRap, setIsDisabledRap] = useState(true);

  const [schedule, setSchedule] = useState({
    maPhim: "",
    maHeThongRap: "",
    maCumRap: "",
    maRap: "",
    suatChieuPhim: "",
  });

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    dispatch(getAllTheaters());
    dispatch(getAllMovies());
    dispatch(getAllBranches());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "maHeThongRap") {
      e.target.value ? setIsDisabledCumRap(false) : setIsDisabledCumRap(true);
    }

    if (e.target.name === "maCumRap") {
      e.target.value ? setIsDisabledRap(false) : setIsDisabledRap(true);
    }

    if (e.target.name === "maRap") {
      e.target.value ? setIsDisabled(false) : setIsDisabled(true);
    }
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const renderRap = () => {
    if (!schedule.maCumRap) {
      return;
    }

    const cumRap = branches?.filter(
      (branch) => branch.maHeThongRap === schedule.maHeThongRap
    );
    const rap = cumRap?.filter((rap) => rap.maCumRap === schedule.maCumRap);
    if (rap?.length) {
      return rap[0].rap.map((item, index) => {
        return (
          <option key={index} value={item.maRap}>
            {item.tenRap}
          </option>
        );
      });
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const scheduleObject = { ...schedule, suatChieuPhim: value };
    dispatch(createNewSchedule(scheduleObject));
  };

  return (
    <div className="col-12 grid-margin p-0">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm lịch chiếu phim</h4>
          <form onSubmit={submit} className="modal-body">
            <div className="form-group">
              <label className="">Tên phim</label>
              <select
                className="form-control"
                name="maPhim"
                value={schedule.maPhim}
                onChange={handleChange}
                style={{ color: "white" }}
              >
                <option value="">--Chọn phim--</option>
                {movies?.map((movie, index) => {
                  return (
                    <option value={movie.maPhim} key={index}>
                      {movie.maPhim} - {movie.tenPhim}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label className="">Hệ thống rạp</label>
              <select
                className="form-control"
                name="maHeThongRap"
                onChange={handleChange}
                style={{ color: "white" }}
              >
                <option value="">--Chọn hệ thống rạp--</option>
                {theaters?.map((theater, index) => {
                  return (
                    <option value={theater.maHeThongRap} key={index}>
                      {theater.tenHeThongRap}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label className="">Cụm rạp</label>
              <select
                className="form-control"
                name="maCumRap"
                onChange={handleChange}
                style={{
                  color: isDisabledCumRap ? "black" : "white",
                  cursor: isDisabledCumRap ? "not-allowed" : "default",
                }}
                disabled={isDisabledCumRap}
              >
                <option value="">--Chọn cụm rạp--</option>

                {branches
                  ?.filter((bra) => bra.maHeThongRap === schedule.maHeThongRap)
                  ?.map((branch, index) => {
                    return (
                      <option value={branch.maCumRap} key={index}>
                        {branch.tenCumRap}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="form-group">
              <label className="">Rạp</label>
              <select
                className="form-control"
                name="maRap"
                onChange={handleChange}
                style={{
                  color: isDisabledRap ? "black" : "white",
                  cursor: isDisabledRap ? "not-allowed" : "default",
                }}
                disabled={isDisabledRap}
              >
                <option value="">--Chọn rạp--</option>
                {renderRap()}
              </select>
            </div>

            <div className="form-group">
              <label>Suất chiếu phim</label>
              <div>
                <DateTimePicker
                  format="dd-MM-y h:mm a"
                  onChange={onChange}
                  value={value}
                  amPmAriaLabel="24 hours"
                  disabled={isDisabled}
                />
              </div>
            </div>

            <p className="text-danger font-italic login-err mb-2 align-self-start">
              {error}
            </p>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              Thêm mới
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
