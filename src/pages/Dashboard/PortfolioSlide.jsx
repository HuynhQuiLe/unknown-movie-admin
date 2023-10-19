import React from "react";

const PortfolioSlide = () => {
  return (
    <div className="col-md-6 col-xl-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Portfolio Slide</h4>
          <div
            className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel"
            id="owl-carousel-basic"
          >
            <div className="item">
              <img src="assets/images/dashboard/Rectangle.jpg" alt="ex" />
            </div>
            <div className="item">
              <img src="assets/images/dashboard/Img_5.jpg" alt="ex" />
            </div>
            <div className="item">
              <img src="assets/images/dashboard/img_6.jpg" alt="ex" />
            </div>
          </div>
          <div className="d-flex py-4">
            <div className="preview-list w-100">
              <div className="preview-item p-0">
                <div className="preview-thumbnail">
                  <img
                    src="assets/images/faces/face12.jpg"
                    className="rounded-circle"
                    alt="ex"
                  />
                </div>
                <div className="preview-item-content d-flex flex-grow">
                  <div className="flex-grow">
                    <div className="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 className="preview-subject">CeeCee Bass</h6>
                      <p className="text-muted text-small">4 Hours Ago</p>
                    </div>
                    <p className="text-muted">
                      Well, it seems to be working now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted">Well, it seems to be working now.</p>
          <div className="progress progress-md portfolio-progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlide;
