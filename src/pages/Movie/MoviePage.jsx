import React from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import ModalConfirmDeleteMovie from "./ModalConfirmDeleteMovie";
import ModalUpdateMovie from "./ModalUpdateMovie";

const Products = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="row">
          <MovieForm />
          <MovieList />
          <ModalConfirmDeleteMovie />
          <ModalUpdateMovie />
        </div>
      </div>
    </div>
  );
};

export default Products;
