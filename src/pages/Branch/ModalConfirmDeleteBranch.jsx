import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBranch } from "../../redux/actions/branch/deleteBranchAction";

const ModalConfirmDeleteBranch = () => {
  const dispatch = useDispatch();
  const { branchByMaCumRap } = useSelector(
    (state) => state.getBranchByMaCumRapReducer
  );
  const { isLoading } = useSelector((state) => state.deleteBranchReducer);
  const removeBranch = () => {
    dispatch(deleteBranch(branchByMaCumRap?.maCumRap));
  };
  return (
    // {/* Modal confirm delete */}
    <div
      className="modal fade"
      id="branchModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light text-black">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Xác nhận xoá Cụm rạp
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              id="close-delete-branch"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div id="delete-text" className="modal-body">
            Bạn chắc chắn muốn xoá cụm rạp{" "}
            <b className="text-danger">{branchByMaCumRap?.tenCumRap}</b>
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
              onClick={removeBranch}
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

export default ModalConfirmDeleteBranch;
