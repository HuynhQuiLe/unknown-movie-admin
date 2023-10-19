import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../redux/actions/movie/deleteMovieAction";

const ModalConfirmDeleteMovie = () => {
  const dispatch = useDispatch();
  const { movieByID } = useSelector((state) => state.getMovieByIDReducer);
  const { isLoading } = useSelector((state) => state.deleteMovieReducer);
  const removeMovie = () => {
    dispatch(deleteMovie(movieByID?._id));
  };
  return (
    // {/* Modal confirm delete */}
    <div
      className="modal fade"
      id="movieModal"
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
              id="close-delete-movie"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div id="delete-text" className="modal-body">
            Bạn chắc chắn muốn xoá phim{" "}
            <b className="text-danger">{movieByID?.tenPhim.toUpperCase()}</b>
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
              onClick={removeMovie}
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

export default ModalConfirmDeleteMovie;
