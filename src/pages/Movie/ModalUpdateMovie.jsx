import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uploadImagesAPI from "../../services/uploadImages/uploadImagesService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateMovie } from "../../redux/actions/movie/updateMovieAction";
import DeleteImageInUpdateModal from "./DeleteImageInUpdateModal";

const ModalUpdateMovie = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { isLoading } = useSelector((state) => state.updateMovieReducer);
  const dispatch = useDispatch();
  // get user sellected and binding into form input
  const { movieByID } = useSelector((state) => state.getMovieByIDReducer);

  const [movieUpdate, setMovieUpdate] = useState({
    maPhim: "",
    tenPhim: "",
    moTa: "",
    trailer: "",
    hinhChinh: "",
    hinhPhu: [],
    theLoai: "",
    doiTuong: "",
    phimHot: "",
    khoiChieu: "",
    hienThiPhim: "",
    hinhChu: "",
    hinhNhanVat: "",
    chiTiet: {
      daoDien: "",
      dienVien: "",
      thoiLuong: "",
      xuatXu: "",
    },
  });

  useEffect(() => {
    if (movieByID) {
      setMovieUpdate(movieByID);
      setStartDate(new Date(movieByID?.khoiChieu));
    }
  }, [movieByID]);

  //

  const handleChange = (e) => {
    if (e.target.name === "hienThiPhim" || e.target.name === "phimHot") {
      e.target.value === "true"
        ? setMovieUpdate({ ...movieUpdate, [e.target.name]: true })
        : setMovieUpdate({ ...movieUpdate, [e.target.name]: false });
      return;
    }

    setMovieUpdate({ ...movieUpdate, [e.target.name]: e.target.value });
  };

  const handleChangeChiTiet = (e) => {
    setMovieUpdate({
      ...movieUpdate,
      chiTiet: { ...movieUpdate.chiTiet, [e.target.name]: e.target.value },
    });
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
        setMovieUpdate({ ...movieUpdate, hinhChinh: res.data.links[0] });
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
        setMovieUpdate({ ...movieUpdate, hinhNhanVat: res.data.links[0] });
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
        setMovieUpdate({ ...movieUpdate, hinhChu: res.data.links[0] });
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
        setMovieUpdate({
          ...movieUpdate,
          hinhPhu: [...movieUpdate.hinhPhu, ...res.data.links],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeImg = (ind) => {
    movieUpdate.hinhPhu.splice(ind, 1);
    setMovieUpdate({ ...movieUpdate });
  };

  const update = () => {
    const id = movieByID._id;
    // accept and update
    dispatch(updateMovie(id, movieUpdate));
  };
  return (
    // {/* MODAL UPDATE*/}
    <div
      className="modal fade"
      id="movieUpdate"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light text-black">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Cập nhật phim</h4>
            <button
              id="close-btn-update-movie"
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
                placeholder="Nhập mã phim"
                disabled
                value={movieUpdate?.maPhim}
              />
            </div>

            <div className="form-group">
              <label>Tên Phim</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="tenPhim"
                placeholder="Nhập tên phim"
                value={movieUpdate?.tenPhim}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mô tả</label>
              <textarea
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                rows={5}
                name="moTa"
                placeholder="Nhập mô tả"
                value={movieUpdate?.moTa}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Trailer</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="trailer"
                placeholder="Nhập trailer phim"
                value={movieUpdate?.trailer}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Hình chính</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={movieUpdate?.hinhChinh}
                  style={{
                    width: "100px",
                    height: "135px",
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
                    onChange={uploadHinhChinh}
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Hình nhân vật</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={movieUpdate?.hinhNhanVat}
                  style={{
                    width: "100px",
                    height: "135px",
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
                    onChange={uploadHinhNhanVat}
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Hình chữ</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                  src={movieUpdate?.hinhChu}
                  style={{
                    width: "100px",
                    height: "135px",
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
                    onChange={uploadHinhChu}
                  />
                </label>
              </div>
            </div>

            <div className="form-group" style={{ overflow: "scroll" }}>
              <label>Hình phụ</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                {movieUpdate?.hinhPhu.map((src, index) => {
                  return (
                    <div
                      style={{
                        position: "relative",
                      }}
                      key={index}
                    >
                      <img
                        src={src}
                        style={{
                          height: "100px",
                          width: "auto",
                          objectFit: "cover",
                          borderRadius: "3px",
                          marginRight: "5px",
                        }}
                        alt="hinh phu"
                      />
                      <DeleteImageInUpdateModal
                        index={index}
                        removeImg={removeImg}
                      />
                    </div>
                  );
                })}
                <label
                  style={{
                    padding: "5px 10px",
                    borderRadius: "3px",
                    backgroundColor: "rgba(207, 200, 200, 0.8)",
                    cursor: "pointer",
                    marginBottom: 0,
                  }}
                >
                  Add
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={uploadHinhPhu}
                  />
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Thể loại</label>
              <select
                name="theLoai"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={movieUpdate?.theLoai}
                onChange={handleChange}
              >
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

            <div className="form-group">
              <label>Đối tượng</label>
              <select
                name="doiTuong"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={movieUpdate?.doiTuong}
                onChange={handleChange}
              >
                <option value="Mọi lứa tuổi">Mọi lứa tuổi</option>
                <option value="Trẻ em">Trẻ em</option>
                <option value="Trên 18 tuổi">Trên 18 tuổi</option>
                <option value="Trên 16 tuổi">Trên 16 tuổi</option>
                <option value="Gia đình">Gia đình</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phim hot</label>
              <select
                name="phimHot"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={movieUpdate?.phimHot}
                onChange={handleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Deactive</option>
              </select>
            </div>

            <div className="form-group">
              <label>Ngày khởi chiếu</label>
              <DatePicker
                selected={startDate}
                dateFormat="dd-MM-yyyy"
                placeholderText="dd-MM-yyyy"
                onChange={(date) => {
                  setStartDate(date);
                  setMovieUpdate({
                    ...movieUpdate,
                    khoiChieu: date.toString(),
                  });
                }}
              />
            </div>

            <div className="form-group">
              <label>Hiển thị phim</label>
              <select
                name="hienThiPhim"
                className="form-control bg-light status-update "
                style={{ border: "1px solid black", color: "black" }}
                value={movieUpdate?.hienThiPhim}
                onChange={handleChange}
              >
                <option value={true}>Active</option>
                <option value={false}>Deactive</option>
              </select>
            </div>

            <div className="form-group">
              <label>Đạo diễn</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="daoDien"
                placeholder="Nhập tên đạo diễn"
                value={movieUpdate?.chiTiet.daoDien}
                onChange={handleChangeChiTiet}
              />
            </div>

            <div className="form-group">
              <label>Diễn Viên</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="dienVien"
                placeholder="Nhập tên diễn viên"
                value={movieUpdate?.chiTiet.dienVien}
                onChange={handleChangeChiTiet}
              />
            </div>

            <div className="form-group">
              <label>Thời lượng</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="thoiLuong"
                placeholder="Nhập thời lượng"
                value={movieUpdate?.chiTiet.thoiLuong}
                onChange={handleChangeChiTiet}
              />
            </div>
            <div className="form-group">
              <label>Xuất xứ</label>
              <input
                className="form-control account-update"
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                name="xuatXu"
                placeholder="Nhập thời lượng"
                value={movieUpdate?.chiTiet.xuatXu}
                onChange={handleChangeChiTiet}
              />
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

export default ModalUpdateMovie;
