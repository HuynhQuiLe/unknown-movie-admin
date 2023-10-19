import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/user/updateUserAction";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";

const ModalUpdateUser = () => {
  const dispatch = useDispatch();
  // get user sellected and binding into form input
  const { userByID } = useSelector((state) => state.getUserByIDReducer);
  const { isLoading } = useSelector((state) => state.updateUserReducer);

  const [userUpdate, setUserUpdate] = useState({
    taiKhoan: "",
    // matKhau: "",
    ten: "",
    hinhAnh: "",
    email: "",
    tinhAnh: "",
    chucVu: "",
    trangThai: "",
  });

  useEffect(() => {
    setUserUpdate(userByID);
  }, [userByID]);

  //

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  const uploadImg = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await uploadImagesAPI(data);
        setUserUpdate({ ...userUpdate, hinhAnh: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const update = () => {
    const id = userByID._id;

    // accept and update
    dispatch(updateUser(id, userUpdate));
  };
  return (
    // {/* MODAL UPDATE*/}
    <div
      className="modal fade"
      id="userUpdate"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light text-black">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Update User</h4>
            <button
              id="close-btn"
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
              <label>Tài khoản</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  cursor: "not-allowed",
                  backgroundColor: "#cfc8c869",
                }}
                name="taiKhoan"
                placeholder="Nhập tài khoản"
                disabled
                value={userUpdate?.taiKhoan}
              />
            </div>
            {/* <div className="form-group">
              <label>Mật khẩu</label>
              <input
                name="matKhau"
                className="form-control bg-light password-update"
                style={{ color: "black" }}
                placeholder="Nhập mật khẩu"
                value={userUpdate?.matKhau}
                onChange={handleChange}
              />
            </div> */}
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                className="form-control bg-light name-update"
                style={{ color: "black" }}
                name="ten"
                placeholder="Nhập họ và tên"
                value={userUpdate?.ten}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ảnh đại diện</label>
              <input
                className="form-control bg-light email-update mb-2"
                style={{ color: "black" }}
                name="hinhAnh"
                placeholder="Nhập link ảnh đại diện"
                value={userUpdate?.hinhAnh}
                onChange={handleChange}
              />
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={userUpdate?.hinhAnh}
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "block",
                    borderRadius: "3px",
                    objectFit: "cover",
                  }}
                  alt="avatar"
                />
                <label
                  style={{
                    padding: "5px 10px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(207, 200, 200, 0.8)",
                    marginLeft: "5px",
                    cursor: "pointer",
                    marginBottom: 0,
                  }}
                >
                  Change
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={uploadImg}
                  />
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control bg-light email-update"
                style={{ color: "black" }}
                name="email"
                placeholder="Nhập email"
                value={userUpdate?.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Tinh Anh</label>

              <input
                className="form-control bg-light balance-update"
                style={{ color: "black" }}
                name="tinhAnh"
                placeholder="Nhập số tinh anh"
                value={userUpdate?.tinhAnh}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Chức vụ</label>
              <select
                className="form-control bg-light role-update"
                style={{ border: "1px solid black", color: "black" }}
                name="chucVu"
                value={userUpdate?.chucVu}
                onChange={handleChange}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="Manager">Manager</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select
                name="trangThai"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={userUpdate?.trangThai}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Deactive">Deactive</option>
                <option value="Pending">Pending</option>
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateUser;
