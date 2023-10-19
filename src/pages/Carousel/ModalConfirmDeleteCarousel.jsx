import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarousel } from "../../redux/actions/carousel/deleteCarouselAction";

const ModalConfirmDeleteCarousel = () => {
  const dispatch = useDispatch();
  const { carouselByID } = useSelector((state) => state.getCarouselByIDReducer);
  const { isLoading } = useSelector((state) => state.deleteCarouselReducer);
  const removeCarousel = () => {
    dispatch(deleteCarousel(carouselByID?._id));
  };
  return (
    // {/* Modal confirm delete */}
    <div
      className="modal fade"
      id="carouselModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light text-black">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Xác nhận xoá Carousel
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              id="close-delete-carousel"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div id="delete-text" className="modal-body">
            Bạn chắc chắn muốn xoá Carousel - mã phim{" "}
            <b className="text-danger">{carouselByID?.maPhim}</b>
            ? <br />
            Bạn <b>không thể</b> hoàn tác sau bước này.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              id="delete-confirm-btn"
              className="btn btn-danger"
              onClick={removeCarousel}
              disabled={isLoading}
            >
              Xoá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDeleteCarousel;
