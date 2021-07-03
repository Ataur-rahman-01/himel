import React from "react";

const MySkill = () => {
  return (
    <>
      <div className="container">
        <p className="text-center fs-1 m-5">My Skills Are Listed Below Here</p>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card border-success bg-transparent">
              <div class="card-body">
                <h5 class="card-title text-center m-2">Front End</h5>
                <button className="btn skill m-2"> React Native</button>
                <button className="btn skill m-2"> Vue js</button>
                <button className="btn skill m-2"> HTML</button>
                <button className="btn skill m-2"> CSS</button>
                <button className="btn skill m-2"> JavaScript</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card border-success bg-transparent">
              <div class="card-body">
                <h5 class="card-title text-center m-2">Back End</h5>
                <button className="btn skill m-2"> Laravel</button>
                <button className="btn skill m-2"> Php</button>
                <button className="btn skill m-2"> Rest api</button>
                <button className="btn skill m-2"> MySql</button>
                <button className="btn skill m-2"> MongoDB</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-3 mb-3">
            <div class="card border-success bg-transparent">
              <div class="card-body ">
                <h5 class="card-title text-center m-2">Other Skill</h5>
                <button className="btn skill m-2">Postman</button>
                <button className="btn skill m-2">PhpStrom</button>
                <button className="btn skill m-2">Vps Server</button>
                <button className="btn skill m-2"> C</button>
                <button className="btn skill m-2">C++ </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
