import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createNewMovie } from "../../redux/actions/movie/createNewMovieAction";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";

const MovieForm = () => {
  const { isLoading, error } = useSelector(
    (state) => state.createNewMovieReducer
  );

  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    maPhim: "",
    tenPhim: "",
    moTa: "",
    trailer: "",
    theLoai: "",
    khoiChieu: startDate.toString(),
    doiTuong: "",
    hinhChinh: "",
    hinhNhanVat: "",
    hinhChu: "",
    hinhPhu: null,
  });
  const [chiTiet, setChiTiet] = useState({
    daoDien: "",
    dienVien: "",
    thoiLuong: "",
    xuatXu: "",
  });
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleChangeChiTiet = (e) => {
    setChiTiet({ ...chiTiet, [e.target.name]: e.target.value });
  };

  const uploadHinhChinh = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await uploadImagesAPI(data);
        setMovie({ ...movie, hinhChinh: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadHinhNhanVat = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await uploadImagesAPI(data);
        setMovie({ ...movie, hinhNhanVat: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadHinhChu = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await uploadImagesAPI(data);
        setMovie({ ...movie, hinhChu: res.data.links[0] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadHinhPhu = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      try {
        const res = await uploadImagesAPI(data);
        setMovie({
          ...movie,
          hinhPhu: movie.hinhPhu
            ? [...movie.hinhPhu, ...res.data.links]
            : res.data.links,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieObject = { ...movie, chiTiet: chiTiet };
    dispatch(createNewMovie(movieObject)).then((result) => {
      if (result) {
        setMovie({
          maPhim: "",
          tenPhim: "",
          moTa: "",
          trailer: "",
          theLoai: "",
          khoiChieu: startDate.toString(),
          doiTuong: "",
          hinhChinh: "",
          hinhPhu: null,
        });
        setChiTiet({ daoDien: "", dienVien: "", thoiLuong: "", xuatXu: "" });
      }
    });
  };

  const showDanhSachHinhPhu = () => {
    return movie.hinhPhu.map((src, index) => {
      return (
        <img
          src={src}
          key={index}
          style={{
            width: "75px",
            height: "100px",
            borderRadius: "3px",
            objectFit: "cover",
            border: "1px solid #dddd",
            display: "block",
            marginRight: "5px",
          }}
          alt="hinh phu"
        />
      );
    });
  };

  return (
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm phim</h4>

          <form onSubmit={handleSubmit} className="form-sample">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Mã phim</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="maPhim"
                      value={movie.maPhim}
                      className="form-control"
                      onChange={handleChange}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Tên phim</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="tenPhim"
                      onChange={handleChange}
                      value={movie.tenPhim}
                      className="form-control"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Mô tả</label>
                  <div className="col-sm-9">
                    <textarea
                      name="moTa"
                      onChange={handleChange}
                      value={movie.moTa}
                      className="form-control"
                      rows={3}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Trailer</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="trailer"
                      onChange={handleChange}
                      value={movie.trailer}
                      className="form-control"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Thể loại</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="theLoai"
                      onChange={handleChange}
                      value={movie.theLoai}
                      style={{ color: "white" }}
                    >
                      <option value="">--Chọn thể loại phim--</option>
                      <option value="Phim hành động">Phim hành động</option>
                      <option value="Phim kinh dị">Phim kinh dị</option>
                      <option value="Phim phiêu lưu">Phim phiêu lưu</option>
                      <option value="Phim hài kịch">Phim hài kịch</option>
                      <option value="Phim cổ trang">Phim cổ trang</option>
                      <option value="Phim thể thao">Phim thể thao</option>
                      <option value="Phim khoa học viễn tưởng">
                        Phim khoa học viễn tưởng
                      </option>
                      <option value="Phim lịch sử">Phim lịch sử</option>
                      <option value="Phim hoạt hình">Phim hoạt hình</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Khởi chiếu</label>
                  <div className="col-sm-9">
                    <DatePicker
                      selected={startDate}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="dd-MM-yyyy"
                      onChange={(date) => {
                        setStartDate(date);
                        setMovie({ ...movie, khoiChieu: date.toString() });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Đối tượng</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="doiTuong"
                      onChange={handleChange}
                      value={movie.doiTuong}
                      style={{ color: "white" }}
                    >
                      <option value="">--Chọn đối tượng--</option>
                      <option value="Mọi lứa tuổi">Mọi lứa tuổi</option>
                      <option value="Trẻ em">Trẻ em</option>
                      <option value="Trên 18 tuổi">Trên 18 tuổi</option>
                      <option value="Trên 16 tuổi">Trên 16 tuổi</option>
                      <option value="Gia đình">Gia đình</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Hình chính</label>
                  {movie.hinhChinh && (
                    <div className="col-sm-9">
                      <img
                        src={movie.hinhChinh}
                        alt="carousel"
                        style={{
                          width: "75px",
                          height: "100px",
                          borderRadius: "3px",
                          objectFit: "cover",
                          border: "1px solid #dddd",
                          display: "block",
                        }}
                      />
                    </div>
                  )}
                  {!movie.hinhChinh && (
                    <div className="col-sm-9">
                      <label
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "3px",
                          border: "1px solid #dddd",
                          textAlign: "center",
                          lineHeight: "50px",
                          cursor: "pointer",
                        }}
                      >
                        +
                        <input
                          type="file"
                          name="hinhChinh"
                          className="form-control"
                          style={{ display: "none" }}
                          onChange={uploadHinhChinh}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Hình phụ</label>
                  <div className="col-sm-9 d-flex justify-content-start align-items-center">
                    {movie.hinhPhu && showDanhSachHinhPhu()}

                    <label
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "3px",
                        border: "1px solid #dddd",
                        textAlign: "center",
                        lineHeight: "50px",
                        cursor: "pointer",
                      }}
                    >
                      +
                      <input
                        type="file"
                        name="hinhPhu"
                        className="form-control"
                        style={{ display: "none" }}
                        onChange={uploadHinhPhu}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Hình nhân vật
                  </label>
                  {movie.hinhNhanVat && (
                    <div className="col-sm-9">
                      <img
                        src={movie.hinhNhanVat}
                        alt="carousel"
                        style={{
                          width: "75px",
                          height: "100px",
                          borderRadius: "3px",
                          objectFit: "cover",
                          border: "1px solid #dddd",
                          display: "block",
                        }}
                      />
                    </div>
                  )}
                  {!movie.hinhNhanVat && (
                    <div className="col-sm-9">
                      <label
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "3px",
                          border: "1px solid #dddd",
                          textAlign: "center",
                          lineHeight: "50px",
                          cursor: "pointer",
                        }}
                      >
                        +
                        <input
                          type="file"
                          name="hinhChinh"
                          className="form-control"
                          style={{ display: "none" }}
                          onChange={uploadHinhNhanVat}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Hình chữ</label>
                  {movie.hinhChu && (
                    <div className="col-sm-9">
                      <img
                        src={movie.hinhChu}
                        alt="carousel"
                        style={{
                          width: "75px",
                          height: "100px",
                          borderRadius: "3px",
                          objectFit: "cover",
                          border: "1px solid #dddd",
                          display: "block",
                        }}
                      />
                    </div>
                  )}
                  {!movie.hinhChu && (
                    <div className="col-sm-9">
                      <label
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "3px",
                          border: "1px solid #dddd",
                          textAlign: "center",
                          lineHeight: "50px",
                          cursor: "pointer",
                        }}
                      >
                        +
                        <input
                          type="file"
                          name="hinhChinh"
                          className="form-control"
                          style={{ display: "none" }}
                          onChange={uploadHinhChu}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="card-description">Thông tin chi tiết phim</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Đạo diễn</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="daoDien"
                      value={chiTiet.daoDien}
                      className="form-control"
                      onChange={handleChangeChiTiet}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Diễn viên</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="dienVien"
                      onChange={handleChangeChiTiet}
                      value={chiTiet.dienVien}
                      className="form-control"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Thời lượng</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      name="thoiLuong"
                      value={chiTiet.thoiLuong}
                      className="form-control"
                      onChange={handleChangeChiTiet}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Xuất xứ</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="xuatXu"
                      onChange={handleChangeChiTiet}
                      value={chiTiet.xuatXu}
                      className="form-control"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-danger font-italic login-err mb-2 align-self-start">
              {error}
            </p>
            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
