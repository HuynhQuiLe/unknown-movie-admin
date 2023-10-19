import React, { useEffect } from "react";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarousels } from "../../redux/actions/carousel/getAllCarouselsAction";

const CarouselList = () => {
  const { carousels } = useSelector((state) => state.getAllCarouselsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarousels());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Danh sách carousel</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th />
                    <th>Hình ảnh</th>
                    <th>Mã Phim</th>
                    <th>Ngày khởi tạo</th>
                    <th>Trạng thái</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="tbody-user">
                  {carousels?.map((carousel, index) => {
                    return <Carousel key={index} carousel={carousel} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselList;
