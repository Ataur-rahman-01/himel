import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import NoteIcon from "@material-ui/icons/Note";

const Services = () => {
  return (
    <>
      <div className="container m-5">
        <p className="text-center m-5 fs-1">WHAT I DO PROVIDE SERVICES</p>
        <div className="row justify-content-center ">
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card bg-transparent">
              <div class="card-body d-flex web justify-content-center me-3">
                <div className="col-2">
                  <NoteIcon
                    style={{ fontSize: 50, marginTop: 100, color: "#0d6efd" }}
                  />
                </div>
                <div className="col-10 container">
                  <p className="fs-1">Clean WebSite Design</p>
                  <p className="fs-5">
                    Nowadays modern design and clean design helps a lot to
                    fascinate the users. That is why modern design is very
                    important for our website
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card bg-transparent ">
              <div class="card-body d-flex web">
                <div className="col-2">
                  <CodeIcon
                    style={{ fontSize: 50, marginTop: 100, color: "#0d6efd" }}
                  />
                </div>
                <div className="col-10 container">
                  <p className="fs-1">Web Development</p>
                  <p className="fs-5 ">
                    We develop our site to give it full life of design because
                    our site has different kinds of dynamic work with our users
                    so we make a static site dynamic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card bg-transparent">
              <div class="card-body d-flex web">
                <div className="col-2">
                  <DeveloperModeIcon
                    style={{ fontSize: 50, marginTop: 100, color: "#0d6efd" }}
                  />
                </div>
                <div className="col-10 container">
                  <p className="fs-1">Clean Code</p>
                  <p className="fs-5">
                    Clean code is very important for our project because we
                    always have to maintain our web app. If our code is not
                    clean then we have to read a lot of problems so clean code
                    is very important for us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
