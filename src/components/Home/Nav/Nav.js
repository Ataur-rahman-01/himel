import React from "react";
import himel from "../../../images/Himel.png";

const Nav = () => {
  return (
    <nav
      style={{ backgroundColor: "#ff3e8a" }}
      className="navbar navbar-expand-lg navbar-light sticky-top"
    >
      <div className="container-fluid">
        <img style={{ height: "40px", width: "80px" }} src={himel} alt="" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5 me-5 fs-5">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item ms-5 me-5 fs-5">
              <a className="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li className="nav-item ms-5 me-5 fs-5">
              <a
                className="nav-link active"
                aria-current="page"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item ms-5 me-5 fs-5">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
