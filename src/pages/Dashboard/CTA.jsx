import React from "react";

const CTA = () => {
  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card corona-gradient-card">
          <div className="card-body py-0 px-0 px-sm-3">
            <div className="row align-items-center">
              <div className="col-4 col-sm-3 col-xl-2">
                <img
                  src="assets/images/dashboard/Group126@2x.png"
                  className="gradient-corona-img img-fluid"
                  alt="example"
                />
              </div>
              <div className="col-5 col-sm-7 col-xl-8 p-0">
                <h4 className="mb-1 mb-sm-0">Want even more features?</h4>
                <p className="mb-0 font-weight-normal d-none d-sm-block">
                  Check out our Client version with real experience!
                </p>
              </div>
              <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                <span>
                  <a
                    href="https://www.bootstrapdash.com/product/corona-admin-template/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light btn-rounded get-started-btn"
                  >
                    Go to CLIENT Page
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
