import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheaters } from "../../redux/actions/theater/getAllTheatersAction";
import { createNewBranch } from "../../redux/actions/branch/createNewBranchAction";

const BranchForm = () => {
  const dispatch = useDispatch();

  const { theaters } = useSelector((state) => state.getAllTheatersReducer);

  const [isDisabled, setIsDisabled] = useState(true);

  const [rap, setRap] = useState("");

  useEffect(() => {
    dispatch(getAllTheaters());
  }, [dispatch]);

  const { error, isLoading } = useSelector(
    (state) => state.createNewBranchReducer
  );

  const [cumRap, setCumRap] = useState({
    maHeThongRap: "",
    maCumRap: "",
    tenCumRap: "",
    diaChi: "",
    soDienThoai: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "maHeThongRap" && e.target.value) {
      setIsDisabled(false);
    }
    if (e.target.name === "maHeThongRap" && !e.target.value) {
      setIsDisabled(true);
      setCumRap({
        maHeThongRap: "",
        maCumRap: "",
        tenCumRap: "",
        diaChi: "",
        soDienThoai: "",
      });
      return;
    }

    setCumRap({ ...cumRap, [e.target.name]: e.target.value });
  };

  const handleChangeRap = (e) => {
    setRap(e.target.value);
  };

  const submit = (event) => {
    const rapArray = [];
    event.preventDefault();
    for (var i = 1; i <= rap; i++) {
      rapArray.push({
        tenRap: `Rạp ${i}`,
        maRap: `${cumRap.maCumRap}_RAP_${i}`,
      });
    }

    const cumRapObject = { ...cumRap, rap: rapArray };

    dispatch(createNewBranch(cumRapObject)).then((result) => {
      if (result) {
        setCumRap({
          maHeThongRap: "",
          maCumRap: "",
          tenCumRap: "",
          diaChi: "",
          soDienThoai: "",
        });
        setRap("");
        setIsDisabled(true);
      }
    });
  };
  return (
    <div className="col-12 grid-margin p-0">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm cụm rạp</h4>
          <form onSubmit={submit} className="modal-body">
            <div className="form-group">
              <label className="">Hệ thống rạp</label>
              <select
                className="form-control"
                name="maHeThongRap"
                onChange={handleChange}
                style={{ color: "white" }}
                value={cumRap.maHeThongRap}
              >
                <option value="">--Chọn hệ thống rạp--</option>
                {theaters?.map((theater, index) => {
                  return (
                    <option value={theater.maHeThongRap} key={index}>
                      {theater.tenHeThongRap}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Tên cụm rạp</label>
              <input
                className="form-control"
                style={{
                  color: "white",
                  cursor: isDisabled ? "not-allowed" : "default",
                }}
                name="tenCumRap"
                value={cumRap.tenCumRap}
                onChange={handleChange}
                placeholder="Nhập Tên cụm rạp"
                disabled={isDisabled}
              />
            </div>
            <div className="form-group">
              <label>Mã cụm rạp</label>
              <input
                id="password-new"
                name="maCumRap"
                value={cumRap.maCumRap}
                onChange={handleChange}
                className="form-control"
                style={{
                  color: "white",
                  cursor: isDisabled ? "not-allowed" : "default",
                }}
                placeholder="Nhập Mã cụm rạp"
                disabled={isDisabled}
              />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <input
                id="password-new"
                name="diaChi"
                value={cumRap.diaChi}
                onChange={handleChange}
                className="form-control"
                style={{
                  color: "white",
                  cursor: isDisabled ? "not-allowed" : "default",
                }}
                placeholder="Nhập địa chỉ"
                disabled={isDisabled}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                id="password-new"
                name="soDienThoai"
                value={cumRap.soDienThoai}
                onChange={handleChange}
                className="form-control"
                style={{
                  color: "white",
                  cursor: isDisabled ? "not-allowed" : "default",
                }}
                placeholder="Nhập số điện thoại"
                disabled={isDisabled}
              />
            </div>

            <div className="form-group">
              <label>Số rạp</label>
              <input
                id="password-new"
                name="soDienThoai"
                value={rap}
                type="number"
                onChange={handleChangeRap}
                className="form-control"
                style={{
                  color: "white",
                  cursor: isDisabled ? "not-allowed" : "default",
                }}
                placeholder="Nhập số rạp"
                disabled={isDisabled}
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

export default BranchForm;
