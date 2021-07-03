import React from "react";
import himel from "../../../images/my-bg2.png";

const WhoIam = () => {
  return (
    <div>
      <p className="text-center fs-1 m-5">Who I am</p>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <img className="img-fluid rounded-3" src={himel} alt="" />
          </div>
          <div className="col-12 col-sm-6">
            <p className="fs-3">
              Hi. I am Himel from Rangpur, Bangladesh . I offering you to very
              low cost effective high quality professional website design and
              front end web devlopment for personal, Ecomerce , Portfolio and
              small to large businesses site. I always try to provide
              professional design for my clients to increase sales, build brand
              awareness and increase customer reliability. Always i try to
              deliver my service in a short time . I have 3 years of experienced
              , but i have gained huge of experience during this time. Already i
              worked in a software company about 2 year. But now i choose
              freelancing for my career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
