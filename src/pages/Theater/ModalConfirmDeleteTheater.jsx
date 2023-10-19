import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTheater } from "../../redux/actions/theater/deleteTheaterAction";

const ModalConfirmDeleteTheater = () => {
  const dispatch = useDispatch();
  const { theaterByMaHeThong } = useSelector(
    (state) => state.getTheaterByMaHeThongReducer
  );
  const { isLoading } = useSelector((state) => state.deleteCarouselReducer);
  const removeTheater = () => {
    dispatch(deleteTheater(theaterByMaHeThong.maHeThongRap));
  };
  return (
    // {/* Modal confirm delete */}
    <div
      className="modal fade"
      id="theaterModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light text-black">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Xác nhận xoá Hệ thống rạp
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              id="close-delete-theater"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div id="delete-text" className="modal-body">
            Bạn chắc chắn muốn xoá hệ thống rạp{" "}
            <b className="text-danger">{theaterByMaHeThong?.tenHeThongRap}</b>
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
              onClick={removeTheater}
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

export default ModalConfirmDeleteTheater;
