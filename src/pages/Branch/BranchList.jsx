import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranches } from "../../redux/actions/branch/getAllBranchesAction";
import Branch from "./Branch";

const BranchList = () => {
  const { branches } = useSelector((state) => state.getAllBranchesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBranches());
  }, [dispatch]);
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Danh sách cụm rạp </h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th />
                    <th>Logo</th>
                    <th>Mã cụm rạp</th>
                    <th>Tên cụm rạp</th>
                    <th>Số điện thoại</th>
                    <th>Số rạp</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody id="tbody-user">
                  {branches?.map((branch, index) => {
                    return <Branch key={index} branch={branch} />;
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

export default BranchList;
