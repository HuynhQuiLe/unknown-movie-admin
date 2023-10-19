import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBranch } from "../../redux/actions/branch/updateBranchAction";

const ModalUpdateBranch = () => {
  const { isLoading } = useSelector((state) => state.updateBranchReducer);
  const dispatch = useDispatch();
  // get user sellected and binding into form input
  const { branchByMaCumRap } = useSelector(
    (state) => state.getBranchByMaCumRapReducer
  );

  const [rap, setRap] = useState(1);

  const [branchUpdate, setBranchUpdate] = useState({
    maHeThongRap: "",
    maCumRap: "",
    tenCumRap: "",
    diaChi: "",
    soDienThoai: "",
    trangThai: "",
    rap: null,
  });

  useEffect(() => {
    setBranchUpdate(branchByMaCumRap);
    setRap(branchByMaCumRap?.rap?.length);
  }, [branchByMaCumRap]);

  //

  const handleChange = (e) => {
    setBranchUpdate({ ...branchUpdate, [e.target.name]: e.target.value });
  };

  const handleChangeRap = (e) => {
    setRap(e.target.value);
  };

  const update = () => {
    const rapArray = [];
    for (var i = 1; i <= rap; i++) {
      rapArray.push({
        tenRap: `Rạp ${i}`,
        maRap: `${branchUpdate.maCumRap}_RAP_${i}`,
      });
    }
    // accept and update
    const branchUpdateObject = { ...branchUpdate, rap: rapArray };
    dispatch(updateBranch(branchUpdateObject));
  };
  return (
    // {/* MODAL UPDATE*/}
    <div
      className="modal fade"
      id="branchUpdate"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light text-black">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Cập nhật cụm rạp</h4>
            <button
              id="close-btn-update-branch"
              type="button"
              className="close text-black update-close-btn"
              data-dismiss="modal"
            >
              ×
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="form-group">
              <label>Hệ thống rạp</label>

              <div>
                <img
                  src={branchUpdate?.logoHeThongRap}
                  style={{ height: "50px", cursor: "not-allowed" }}
                  alt="logo"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mã cụm rạp</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  cursor: "not-allowed",
                  backgroundColor: "#cfc8c869",
                }}
                disabled
                value={branchUpdate?.maCumRap}
              />
            </div>

            <div className="form-group">
              <label>Tên cụm rạp</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="tenCumRap"
                placeholder="Nhập Tên cụm rạp"
                value={branchUpdate?.tenCumRap}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Địa chỉ</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="diaChi"
                placeholder="Nhập Địa chỉ"
                value={branchUpdate?.diaChi}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="soDienThoai"
                placeholder="Nhập Số điện thoại"
                value={branchUpdate?.soDienThoai}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Số rạp</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="rap"
                placeholder="Nhập số rạp"
                value={rap}
                onChange={handleChangeRap}
              />
            </div>

            <div className="form-group">
              <label>Trạng thái</label>
              <select
                name="trangThai"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={branchUpdate?.trangThai}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Deactive">Deactive</option>
              </select>
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              className="btn btn-primary update-btn"
              onClick={update}
              disabled={isLoading}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateBranch;
