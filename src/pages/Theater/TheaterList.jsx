import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theater from "./Theater";
import { getAllTheaters } from "../../redux/actions/theater/getAllTheatersAction";

const TheaterList = () => {
  const { theaters } = useSelector((state) => state.getAllTheatersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTheaters());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Danh sách hệ thống rạp phim</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th />
                    <th>Logo</th>
                    <th>Mã hệ thống</th>
                    <th>Tên hệ thống</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody id="tbody-user">
                  {theaters?.map((theater, index) => {
                    return <Theater key={index} theater={theater} />;
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

export default TheaterList;
