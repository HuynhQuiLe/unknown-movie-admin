import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions/user/deleteUserAction";

const ModalConfirmDeleteUser = () => {
  const dispatch = useDispatch();
  const { userByID } = useSelector((state) => state.getUserByIDReducer);
  const removeUser = () => {
    dispatch(deleteUser(userByID?._id));
  };
  return (
    // {/* Modal confirm delete */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light text-black">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Confirm delete
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              id="close-delete"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div id="delete-text" className="modal-body">
            Are you sure to delete account{" "}
            <b className="text-danger">{userByID?.taiKhoan}</b>
            ? <br />
            You <b>can not</b> undo this step.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              id="delete-confirm-btn"
              className="btn btn-danger"
              onClick={removeUser}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDeleteUser;
