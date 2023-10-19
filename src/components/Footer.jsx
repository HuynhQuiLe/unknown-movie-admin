import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
          Copyright © Unknown® 2023
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          A product of &nbsp;
          <a href="https://lehuynhqui.vercel.app/" target="_blank">
            HUYNHQUI
          </a>
          &nbsp;from lehuynhqui.vercel.app
        </span>
      </div>
    </footer>
  );
};

export default Footer;
