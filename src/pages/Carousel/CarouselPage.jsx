import React from "react";
import CarouselForm from "./CarouselForm";
import CarouselList from "./CarouselList";
import ModalConfirmDeleteCarousel from "./ModalConfirmDeleteCarousel";
import ModalUpdateCarousel from "./ModalUpdateCarousel";

const CarouselPage = () => {
  return (
    <div className="content-wrapper">
      <CarouselForm />
      <CarouselList />
      <ModalConfirmDeleteCarousel />
      <ModalUpdateCarousel />
    </div>
  );
};

export default CarouselPage;
