import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";
import { createNewTheater } from "../../redux/actions/theater/createNewTheaterAction";

const TheaterForm = () => {
  const { error, isLoading } = useSelector(
    (state) => state.createNewTheaterReducer
  );
  const dispatch = useDispatch();

  const [heThongRap, setHeThongRap] = useState({
    tenHeThongRap: "",
    maHeThongRap: "",
    logo: "",
  });

  const handleChange = (e) => {
    setHeThongRap({ ...heThongRap, [e.target.name]: e.target.value });
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
        setHeThongRap({ ...heThongRap, logo: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(createNewTheater(heThongRap)).then((result) => {
      if (result) {
        setHeThongRap({
          tenHeThongRap: "",
          maHeThongRap: "",
          logo: "",
        });
      }
    });
  };
  return (
    <div className="col-12 grid-margin p-0">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm hệ thống rạp</h4>
          <form onSubmit={submit} className="modal-body">
            <div className="form-group">
              <label>Tên hệ thống rạp</label>
              <input
                id="account-new"
                className="form-control"
                style={{ color: "white" }}
                name="tenHeThongRap"
                value={heThongRap.tenHeThongRap}
                onChange={handleChange}
                placeholder="Nhập Tên hệ thống rạp"
              />
            </div>
            <div className="form-group">
              <label>Mã hệ thống rạp</label>
              <input
                id="password-new"
                name="maHeThongRap"
                value={heThongRap.maHeThongRap}
                onChange={handleChange}
                className="form-control"
                style={{ color: "white" }}
                placeholder="Nhập Mã hệ thống rạp"
              />
            </div>
            <div className="form-group">
              <label>Logo</label>
              {heThongRap.logo && (
                <img
                  src={heThongRap.logo}
                  alt="logo"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "3px",
                    objectFit: "cover",
                    border: "1px solid #dddd",
                    display: "block",
                  }}
                />
              )}
              {!heThongRap.logo && (
                <div>
                  <label
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "3px",
                      border: "1px solid #dddd",
                      textAlign: "center",
                      lineHeight: "100px",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  >
                    +
                    <input
                      type="file"
                      name="hinhAnh"
                      className="form-control"
                      style={{ display: "none" }}
                      onChange={uploadImg}
                    />
                  </label>
                </div>
              )}
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

export default TheaterForm;
