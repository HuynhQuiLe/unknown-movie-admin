import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Schedule from "./Schedule";
import { getAllSchedules } from "../../redux/actions/schedule/getAllSchedulesAction";

const ScheduleList = () => {
  const { schedules } = useSelector((state) => state.getAllSchedulesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSchedules());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Danh sách lịch chiếu phim - Theo phim{" "}
            </h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th />
                    <th>Mã phim</th>
                    <th>Mã hệ thống</th>
                    <th>Mã cụm rạp</th>
                    <th>Mã rạp</th>
                    <th>Suất chiếu phim</th>
                    <th>Tình trạng ghế</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody id="tbody-user">
                  {schedules?.map((schedule, index) => {
                    return <Schedule key={index} schedule={schedule} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
