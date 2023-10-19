import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";
import { updateCarousel } from "../../redux/actions/carousel/updateCarouselAction";

const ModalUpdateCarousel = () => {
  const { isLoading } = useSelector((state) => state.updateCarouselReducer);
  const dispatch = useDispatch();
  // get user sellected and binding into form input
  const { carouselByID } = useSelector((state) => state.getCarouselByIDReducer);

  const [carouselUpdate, setCarouselUpdate] = useState({
    maPhim: "",
    hinhAnh: "",
    trangThai: "",
  });

  useEffect(() => {
    setCarouselUpdate(carouselByID);
  }, [carouselByID]);

  //

  const handleChange = (e) => {
    setCarouselUpdate({ ...carouselUpdate, [e.target.name]: e.target.value });
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
        setCarouselUpdate({ ...carouselUpdate, hinhAnh: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const update = () => {
    const id = carouselUpdate._id;
    // accept and update
    dispatch(updateCarousel(id, carouselUpdate));
  };
  return (
    // {/* MODAL UPDATE*/}
    <div
      className="modal fade"
      id="carouselUpdate"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light text-black">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Cập nhật carousel</h4>
            <button
              id="close-btn-update-carousel"
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
              <label>Mã Phim</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  cursor: "not-allowed",
                  backgroundColor: "#cfc8c869",
                }}
                name="maPhim"
                placeholder="Nhập tài khoản"
                disabled
                value={carouselUpdate?.maPhim}
              />
            </div>

            <div className="form-group">
              <label>Ảnh poster</label>
              <input
                className="form-control bg-light email-update mb-2"
                style={{ color: "black" }}
                name="hinhAnh"
                placeholder="Nhập link ảnh đại diện"
                value={carouselUpdate?.hinhAnh}
                onChange={handleChange}
              />
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={carouselUpdate?.hinhAnh}
                  style={{
                    width: "200px",
                    height: "94px",
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
              <label>Trạng thái</label>
              <select
                name="trangThai"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={carouselUpdate?.trangThai}
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

export default ModalUpdateCarousel;
