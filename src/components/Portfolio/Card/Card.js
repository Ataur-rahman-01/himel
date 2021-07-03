import React from "react";

const Card = ({ img1, img2 }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="card mb-3  border-3 border-primary">
              <div className="row g-0">
                <div className="col-md-8">
                  <img
                    style={{ height: "300px", width: "450px" }}
                    src={img1}
                    class="img-thumbnail rounded-start zoom"
                    alt="..."
                  />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">
                      Technology Use
                    </h5>
                    <button className="btn work m-2 "> React Native</button>
                    <button className="btn work m-2"> Vue js</button>
                    <button className="btn work m-2"> HTML</button>
                    <button className="btn work m-2"> CSS</button>
                    <button className="btn work m-2"> JavaScript</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="card mb-3 border-3 border-primary">
              <div className="row g-0">
                <div className="col-md-8">
                  <img
                    style={{ height: "300px", width: "450px" }}
                    src={img2}
                    className="img-thumbnail rounded-start zoom"
                    alt="..."
                  />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">
                      Technology Use
                    </h5>
                    <button className="btn work m-2">FireBase</button>

                    <button className="btn work m-2"> React js</button>
                    <button className="btn work m-2"> HTML</button>
                    <button className="btn work m-2"> CSS</button>
                    <button className="btn work m-2"> JavaScript</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
