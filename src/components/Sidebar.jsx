import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.loginReducer);
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="/">
          <img src="assets/images/unknown-logo.svg" alt="logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="/">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-xs rounded-circle"
                  src={user ? user.hinhAnh : "assets/images/faces/face15.jpg"}
                  alt="avatar"
                />
                <span className="count bg-success" />
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">
                  {user ? user.ten : "Henry Klein"}
                </h5>
                <span>{user ? user.chucVu : "Gold Member"}</span>
              </div>
            </div>
            <a href="#" id="profile-dropdown" data-toggle="dropdown">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
              aria-labelledby="profile-dropdown"
            >
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-primary" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Account settings
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-onepassword text-info" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Change Password
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-calendar-today text-success" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    To-do list
                  </p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer" />
            </span>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="/users">
            <span className="menu-icon">
              <i className="mdi mdi-contacts" />
            </span>
            <span className="menu-title">Người dùng</span>
          </a>
        </li>

        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="menu-icon">
              <i className="mdi mdi-laptop" />
            </span>
            <span className="menu-title">Phim</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Phim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/carousels">
                  Carousel
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play" />
            </span>
            <span className="menu-title">Rạp phim</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="/theaters">
                  Hệ thống rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/branches">
                  Cụm rạp
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item menu-items">
          <a className="nav-link" href="/schedules">
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play" />
            </span>
            <span className="menu-title">Lịch chiếu phim</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
