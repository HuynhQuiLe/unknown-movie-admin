import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getBranchByMaCumRap } from "../../redux/actions/branch/getBranchByMaCumRapAction";
const Branch = ({ branch }) => {
  const dispatch = useDispatch();
  const handleSelectedBranch = (maCumRap) => {
    dispatch(getBranchByMaCumRap(maCumRap));
  };

  let statusClass = "";
  if (branch.trangThai === "Active") {
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
        <img src={branch.logoHeThongRap} alt="logo" />
      </td>
      <td>{branch.maCumRap}</td>
      <td>{branch.tenCumRap}</td>
      <td>{branch.soDienThoai}</td>
      <td>{branch?.rap?.length}</td>
      <td>{moment(branch.created_at).format("DD/MM/YYYY - HH:MM ")}</td>
      <td>
        <div className={statusClass}>{branch.trangThai}</div>
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
          data-target="#branchUpdate"
          onClick={() => handleSelectedBranch(branch.maCumRap)}
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          data-toggle="modal"
          data-target="#branchModal"
          onClick={() => handleSelectedBranch(branch.maCumRap)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Branch;
