import React from "react";
import TheaterForm from "./TheaterForm";
import TheaterList from "./TheaterList";
import ModalConfirmDeleteTheater from "./ModalConfirmDeleteTheater";
import ModalUpdateTheater from "./ModalUpdateTheater";

const TheaterPage = () => {
  return (
    <>
      <div className="content-wrapper">
        <TheaterForm />
        <TheaterList />
      </div>
      <ModalConfirmDeleteTheater />
      <ModalUpdateTheater />
    </>
  );
};

export default TheaterPage;
