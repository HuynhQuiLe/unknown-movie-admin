import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ModalConfirmLogOut from "../pages/User/ModalConfirmLogOut";

const Layout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "/login";
  }

  return (
    <div
      id="main-content"
      className={!user ? "container-scroller d-none" : "container-scroller"}
    >
      {/* partial:partials/_sidebar.html */}
      <Sidebar />
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_navbar.html */}
        <Header />
        {/* partial */}
        <div className="main-panel">
          <Outlet />
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <Footer />
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      <ModalConfirmLogOut />
      {/* page-body-wrapper ends */}
    </div>
  );
};

export default Layout;
