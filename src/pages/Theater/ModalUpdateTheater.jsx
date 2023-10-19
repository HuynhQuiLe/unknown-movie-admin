import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";
import { updateTheater } from "../../redux/actions/theater/updateTheaterAction";

const ModalUpdateTheater = () => {
  const { isLoading } = useSelector((state) => state.updateTheaterReducer);
  const dispatch = useDispatch();
  // get user sellected and binding into form input
  const { theaterByMaHeThong } = useSelector(
    (state) => state.getTheaterByMaHeThongReducer
  );

  const [theaterUpdate, setTheaterUpdate] = useState({
    maHeThongRap: "",
    tenHeThongRap: "",
    logo: "",
    trangThai: "",
  });

  useEffect(() => {
    setTheaterUpdate(theaterByMaHeThong);
  }, [theaterByMaHeThong]);

  //

  const handleChange = (e) => {
    setTheaterUpdate({ ...theaterUpdate, [e.target.name]: e.target.value });
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
        setTheaterUpdate({ ...theaterUpdate, logo: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const update = () => {
    // accept and update
    dispatch(updateTheater(theaterUpdate));
  };
  return (
    // {/* MODAL UPDATE*/}
    <div
      className="modal fade"
      id="theaterUpdate"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light text-black">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Cập nhật hệ thống rạp</h4>
            <button
              id="close-btn-update-theater"
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
              <label>Mã hệ thống rạp</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  cursor: "not-allowed",
                  backgroundColor: "#cfc8c869",
                }}
                name="maHeThongRap"
                placeholder="Nhập mã hệ thống rạp"
                disabled
                value={theaterUpdate?.maHeThongRap}
              />
            </div>

            <div className="form-group">
              <label>Tên hệ thống rạp</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="tenHeThongRap"
                placeholder="Nhập tên hệ thống rạp"
                value={theaterUpdate?.tenHeThongRap}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Logo</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={theaterUpdate?.logo}
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    borderRadius: "3px",
                    objectFit: "cover",
                  }}
                  alt="logo"
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
              <label>Trạng thái</label>
              <select
                name="trangThai"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={theaterUpdate?.trangThai}
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

export default ModalUpdateTheater;
