import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { getMovieByID } from "../../redux/actions/movie/getMovieByIDAction";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  let hienThiClass = "";
  movie.hienThiPhim
    ? (hienThiClass = "badge badge-outline-success")
    : (hienThiClass = "badge badge-outline-danger");

  const handleSelectedMovie = (id) => {
    dispatch(getMovieByID(id));
  };

  return (
    <tr>
      <td>
        <div className="form-check form-check-muted m-0">
          <label className="form-check-label"></label>
          <input type="checkbox" className="form-check-input" />
        </div>
      </td>
      <td className="py-1">
        <img
          src={movie.hinhChinh}
          style={{
            width: "75px",
            height: "100px",
            borderRadius: "3px",
            objectFit: "cover",
            border: "1px solid gray",
          }}
          alt={movie.tenPhim}
        />
      </td>
      <td>
        <b>{movie.maPhim}</b>
      </td>
      <td
        style={{
          maxWidth: "175px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {movie.tenPhim.toUpperCase()}
      </td>
      <td>{movie.doiTuong}</td>
      <td> {movie.chiTiet.thoiLuong} Phút</td>
      <td>{moment(movie.khoiChieu).format("DD/MM/YYYY")}</td>
      <td>
        {moment(movie.khoiChieu).isSameOrBefore(new Date()) ? (
          <div className="badge badge-outline-info">Đang chiếu</div>
        ) : (
          <div className="badge badge-outline-warning">Sắp chiếu</div>
        )}
      </td>
      <td>
        <div className={hienThiClass}>
          {movie.hienThiPhim ? "Active" : "Deactive"}
        </div>
      </td>
      <td>
        <span
          style={{
            cursor: "pointer",
            color: "#0090e7",
            fontSize: "25px",
            marginRight: "10px",
          }}
          onClick={() => handleSelectedMovie(movie._id)}
          data-toggle="modal"
          data-target="#movieUpdate"
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          onClick={() => handleSelectedMovie(movie._id)}
          data-toggle="modal"
          data-target="#movieModal"
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Movie;
