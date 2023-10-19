import React from "react";
import { useDispatch } from "react-redux";
import { getCarouselByID } from "../../redux/actions/carousel/getCarouselByIDAction";
import moment from "moment";

const Carousel = ({ carousel }) => {
  const dispatch = useDispatch();
  const handleSelectedCarousel = (id) => {
    dispatch(getCarouselByID(id));
  };

  let statusClass = "";
  carousel.trangThai === "Active"
    ? (statusClass = "badge badge-outline-success")
    : (statusClass = "badge badge-outline-danger");

  return (
    <tr>
      <td>
        <div className="form-check form-check-muted m-0">
          <label className="form-check-label"></label>
          <input type="checkbox" className="form-check-input" />
        </div>
      </td>

      <td>
        <img
          src={carousel.hinhAnh}
          alt="carousel"
          style={{
            width: "150px",
            height: "60px",
            borderRadius: "3px",
            border: "1px solid #dddd",
            objectFit: "cover",
          }}
        />
      </td>
      <td>{carousel.maPhim}</td>
      <td>{moment(carousel.created_at).format("DD/MM/YYYY - HH:MM")}</td>

      <td>
        <div className={statusClass}>{carousel.trangThai}</div>
      </td>
      <td>
        <span
          style={{
            cursor: "pointer",
            color: "#0090e7",
            fontSize: "25px",
            marginRight: "10px",
          }}
          data-toggle="modal"
          data-target="#carouselUpdate"
          onClick={() => handleSelectedCarousel(carousel._id)}
        >
          <i className="fa fa-pen-square"></i>
        </span>
        <span
          style={{ cursor: "pointer", color: "#fc424a", fontSize: "25px" }}
          data-toggle="modal"
          data-target="#carouselModal"
          onClick={() => handleSelectedCarousel(carousel._id)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default Carousel;
