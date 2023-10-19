import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCarousel } from "../../redux/actions/carousel/createNewCarouselAction";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";

const CarouselForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector(
    (state) => state.createNewCarouselReducer
  );
  const [carousel, setCarousel] = useState({
    maPhim: "",
    hinhAnh: "",
  });

  const handleChange = (e) => {
    setCarousel({ ...carousel, [e.target.name]: e.target.value });
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
        setCarousel({ ...carousel, hinhAnh: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(createCarousel(carousel)).then((result) => {
      if (result) {
        setCarousel({ maPhim: "", hinhAnh: "" });
      }
    });
  };
  return (
    <div className="col-12 grid-margin p-0">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm carousel</h4>
          <form onSubmit={submit} className="modal-body">
            <div className="form-group">
              <label>Mã phim</label>
              <input
                id="account-new"
                className="form-control"
                style={{ color: "white" }}
                name="maPhim"
                value={carousel.maPhim}
                onChange={handleChange}
                placeholder="Nhập mã phim"
              />
            </div>
            <div className="form-group ">
              <label>Hình ảnh</label>
              {carousel.hinhAnh && (
                <img
                  src={carousel.hinhAnh}
                  alt="carousel"
                  style={{
                    width: "300px",
                    height: "140px",
                    borderRadius: "3px",
                    objectFit: "cover",
                    border: "1px solid #dddd",
                    display: "block",
                  }}
                />
              )}
              {!carousel.hinhAnh && (
                <div>
                  <label
                    style={{
                      width: "300px",
                      height: "140px",
                      borderRadius: "3px",
                      border: "1px solid #dddd",
                      textAlign: "center",
                      lineHeight: "140px",
                      cursor: "pointer",
                      fontSize: "40px",
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

export default CarouselForm;
