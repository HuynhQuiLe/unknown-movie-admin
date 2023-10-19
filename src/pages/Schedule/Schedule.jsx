import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
// import { getScheduleByMaCumRap } from "../../redux/actions/schedule/getScheduleByMaCumRapAction";
const Schedule = ({ schedule }) => {
  const dispatch = useDispatch();
  // const handleSelectedSchedule = (maCumRap) => {
  //   // dispatch(getScheduleByMaCumRap(maCumRap));
  // };

  let tinhTrangGhe = "";
  schedule.layoutGhe.map((ghe) => {
    ghe.danhSachGhe.map((item) => {
      if (!item.daDat) {
        tinhTrangGhe = "Còn Ghế";
      }
    });
  });

  let statusClass = "";

  if (tinhTrangGhe === "Còn Ghế") {
    statusClass = "badge badge-outline-success";
  } else {
    statusClass = "badge badge-outline-danger";
  }
  return (
    <tr>
      <td>
        <div className="form-check form-check-muted m-0">
          <label className="form-check-label"></label>
          <input type="checkbox" className="form-check-input" />
        </div>
      </td>
      <td>{schedule.maPhim}</td>
      <td>{schedule.maHeThongRap}</td>
      <td>{schedule.maCumRap}</td>
      <td>{schedule.maRap}</td>
      <td>{moment(schedule.suatChieuPhim).format("DD/MM/YYYY, LT")}</td>
      <td>
        <div className={statusClass}>{tinhTrangGhe}</div>
      </td>
      <td>
        <span
          style={{
            cursor: "pointer",
            color: "#0090e7",
            fontSize: "25px",
            marginRight: "10px",
          }}
          data-toggle="modal"
          data-target="#scheduleUpdate"
          // onClick={() => handleSelectedSchedule(schedule.maCumRap)}
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          data-toggle="modal"
          data-target="#scheduleModal"
          // onClick={() => handleSelectedSchedule(schedule.maCumRap)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Schedule;
