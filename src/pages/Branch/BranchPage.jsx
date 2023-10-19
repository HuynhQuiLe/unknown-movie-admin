import React from "react";
import BranchForm from "./BranchForm";
import BranchList from "./BranchList";
import ModalConfirmDeleteBranch from "./ModalConfirmDeleteBranch";
import ModalUpdateBranch from "./ModalUpdateBranch";

const BranchPage = () => {
  return (
    <>
      <div className="content-wrapper">
        <BranchForm />
        <BranchList />
      </div>
      <ModalConfirmDeleteBranch />
      <ModalUpdateBranch />
    </>
  );
};

export default BranchPage;
