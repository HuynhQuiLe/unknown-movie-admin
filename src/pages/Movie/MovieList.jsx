import React, { useEffect } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/actions/movie/getAllMoviesAction";

const MovieList = () => {
  const { movies } = useSelector((state) => state.getAllMoviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Danh sách phim</h4>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Hình ảnh</th>
                  <th>Mã phim</th>
                  <th>Tên Phim</th>
                  <th>Đối tượng</th>
                  <th>Thởi lượng</th>
                  <th>Khởi chiếu</th>
                  <th>Tình trạng</th>
                  <th>Hiển thị</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies?.map((movie, index) => {
                  return <Movie key={index} movie={movie} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
