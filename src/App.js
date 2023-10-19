import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/User/UserPage";
import MoviePage from "./pages/Movie/MoviePage";
import CarouselPage from "./pages/Carousel/CarouselPage";
import BranchPage from "./pages/Branch/BranchPage";
import TheaterPage from "./pages/Theater/TheaterPage";
import SchedulePage from "./pages/Schedule/SchedulePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UserPage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="carousels" element={<CarouselPage />} />
        <Route path="theaters" element={<TheaterPage />} />
        <Route path="branches" element={<BranchPage />} />
        <Route path="schedules" element={<SchedulePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
