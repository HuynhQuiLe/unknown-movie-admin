import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/user/createNewUserAction";

const UserForm = () => {
  const { error, isLoading } = useSelector(
    (state) => state.createNewUserReducer
  );
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    ten: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(createUser(user)).then((result) => {
      if (result) {
        setUser({ taiKhoan: "", matKhau: "", ten: "", email: "" });
      }
    });
  };
  return (
    <div className="col-12 grid-margin p-0">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm người dùng</h4>
          <form onSubmit={submit} className="modal-body">
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                id="account-new"
                className="form-control"
                style={{ color: "white" }}
                name="taiKhoan"
                value={user.taiKhoan}
                onChange={handleChange}
                placeholder="Nhập tài khoản"
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                id="password-new"
                name="matKhau"
                value={user.matKhau}
                onChange={handleChange}
                className="form-control"
                style={{ color: "white" }}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="form-group">
              <label>Họ tên</label>
              <input
                id="name-new"
                className="form-control"
                style={{ color: "white" }}
                value={user.ten}
                name="ten"
                onChange={handleChange}
                placeholder="Nhập họ tên"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                id="email-new"
                className="form-control"
                style={{ color: "white" }}
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Nhập email"
              />
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

export default UserForm;
