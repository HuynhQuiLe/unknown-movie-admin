import React from "react";

const Messages = () => {
  return (
    <div className="col-md-6 col-xl-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <h4 className="card-title">Messages</h4>
            <p className="text-muted mb-1 small">View all</p>
          </div>
          <div className="preview-list">
            <div className="preview-item border-bottom">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face6.jpg"
                  alt="example"
                  className="rounded-circle"
                />
              </div>
              <div className="preview-item-content d-flex flex-grow">
                <div className="flex-grow">
                  <div className="d-flex d-md-block d-xl-flex justify-content-between">
                    <h6 className="preview-subject">Leonard</h6>
                    <p className="text-muted text-small">5 minutes ago</p>
                  </div>
                  <p className="text-muted">
                    Well, it seems to be working now.
                  </p>
                </div>
              </div>
            </div>
            <div className="preview-item border-bottom">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face8.jpg"
                  alt="example"
                  className="rounded-circle"
                />
              </div>
              <div className="preview-item-content d-flex flex-grow">
                <div className="flex-grow">
                  <div className="d-flex d-md-block d-xl-flex justify-content-between">
                    <h6 className="preview-subject">Luella Mills</h6>
                    <p className="text-muted text-small">10 Minutes Ago</p>
                  </div>
                  <p className="text-muted">
                    Well, it seems to be working now.
                  </p>
                </div>
              </div>
            </div>
            <div className="preview-item border-bottom">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face9.jpg"
                  alt="example"
                  className="rounded-circle"
                />
              </div>
              <div className="preview-item-content d-flex flex-grow">
                <div className="flex-grow">
                  <div className="d-flex d-md-block d-xl-flex justify-content-between">
                    <h6 className="preview-subject">Ethel Kelly</h6>
                    <p className="text-muted text-small">2 Hours Ago</p>
                  </div>
                  <p className="text-muted">Please review the tickets</p>
                </div>
              </div>
            </div>
            <div className="preview-item border-bottom">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face11.jpg"
                  alt="example"
                  className="rounded-circle"
                />
              </div>
              <div className="preview-item-content d-flex flex-grow">
                <div className="flex-grow">
                  <div className="d-flex d-md-block d-xl-flex justify-content-between">
                    <h6 className="preview-subject">Herman May</h6>
                    <p className="text-muted text-small">4 Hours Ago</p>
                  </div>
                  <p className="text-muted">
                    Thanks a lot. It was easy to fix it .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
