import React from "react";
import { getUser } from "../../redux/actions/user/getUserByIDAction";
import { useDispatch } from "react-redux";
import moment from "moment";
const User = ({ user }) => {
  const dispatch = useDispatch();
  const handleSelectedUser = (id) => {
    dispatch(getUser(id));
  };

  let statusClass = "";
  if (user.trangThai === "Active") {
    statusClass = "badge badge-outline-success";
  } else if (user.trangThai === "Deactive") {
    statusClass = "badge badge-outline-danger";
  } else {
    statusClass = "badge badge-outline-warning";
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
        <img src={user.hinhAnh} alt="avatar" style={{ objectFit: "cover" }} />
        <span className="pl-2">{user.ten}</span>
      </td>
      <td>{user.email}</td>
      <td>{user.chucVu}</td>
      <td>{user.tinhAnh}</td>
      <td>{moment(user.created_at).format("DD/MM/YYYY - HH:MM ")}</td>
      <td>
        <div className={statusClass}>{user.trangThai}</div>
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
          data-target="#userUpdate"
          onClick={() => handleSelectedUser(user._id)}
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => handleSelectedUser(user._id)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default User;
