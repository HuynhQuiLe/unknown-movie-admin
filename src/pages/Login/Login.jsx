import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/user/loginAction";

const Login = () => {
  const { error, user } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const logIn = async (event) => {
    event.preventDefault();

    dispatch(login(userLogin));
  };

  if (user) {
    return (window.location.href = "/");
  }

  return (
    <section id="login-page" className={!user ? "" : "d-none"}>
      <div>
        <a className="sidebar-brand brand-logo" href="/">
          <img src="assets/images/unknown-logo.svg" alt="logo" />
        </a>
      </div>
      <form
        className="d-flex flex-column align-items-center justify-content-between position-absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: 400,
          padding: "0 10px",
        }}
        onSubmit={logIn}
      >
        <input
          id="account"
          type="text"
          placeholder="Tài khoản"
          name="taiKhoan"
          value={userLogin.taiKhoan}
          style={{
            padding: "10px 15px",
            width: "100%",
            marginBottom: 10,
            borderRadius: 3,
            border: "none",
          }}
          onChange={handleChange}
        />
        <input
          id="password"
          type="text"
          placeholder="Mật khẩu"
          name="matKhau"
          value={userLogin.matKhau}
          style={{
            padding: "10px 15px",
            width: "100%",
            borderRadius: 3,
            border: "none",
            marginBottom: 10,
          }}
          onChange={handleChange}
        />
        <p className="text-danger font-italic login-err mb-0 align-self-start">
          {error}
        </p>

        <button
          type="submit"
          style={{
            padding: "7px 10px",
            width: 100,
            borderRadius: 3,
            border: "none",
            marginTop: 30,
          }}
        >
          Đăng nhập
        </button>
      </form>
    </section>
  );
};

export default Login;
