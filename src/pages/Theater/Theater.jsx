import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getTheaterByMaHeThongRap } from "../../redux/actions/theater/getTheaterByMaHeThongRapAction";
const Theater = ({ theater }) => {
  const dispatch = useDispatch();
  const handleSelectedUser = (maHeThongRap) => {
    dispatch(getTheaterByMaHeThongRap(maHeThongRap));
  };

  let statusClass = "";
  if (theater.trangThai === "Active") {
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
      <td>
        <img src={theater.logo} alt="avatar" />
      </td>
      <td>{theater.maHeThongRap}</td>
      <td>{theater.tenHeThongRap}</td>
      <td>{moment(theater.created_at).format("DD/MM/YYYY - HH:MM ")}</td>
      <td>
        <div className={statusClass}>{theater.trangThai}</div>
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
          data-target="#theaterUpdate"
          onClick={() => handleSelectedUser(theater.maHeThongRap)}
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          data-toggle="modal"
          data-target="#theaterModal"
          onClick={() => handleSelectedUser(theater.maHeThongRap)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Theater;
