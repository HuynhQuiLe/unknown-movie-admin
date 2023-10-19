import React from "react";
import UserList from "./UserList";
import ModalConfirmDeleteUser from "./ModalConfirmDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import UserForm from "./UserForm";

const UserPage = () => {
  return (
    <>
      <div className="content-wrapper">
        <UserForm />
        <UserList />
      </div>
      <ModalUpdateUser />
      <ModalConfirmDeleteUser />
    </>
  );
};

export default UserPage;
