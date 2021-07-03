import React from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e4i47c6",
        "template_2os06pi",
        e.target,
        "user_WqikkJK12IofQS6zjQC9A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container row m-5">
      <p className="text-center fs-1 m-5">Contact Me</p>
      <div className="col-12 col-sm-4 container">
        <div className="d-flex justify-content-center ">
          <div className="me-4 mt-4">
            <EmailIcon style={{ fontSize: 50, color: "#0d6efd" }}></EmailIcon>
          </div>
          <div className="container col-auto">
            <h3 className="fs-2">Email Address:</h3>
            <p className="fs-3">himel18ir019@gmail.com</p>
          </div>
        </div>
        <div className="d-flex justify-content-center container">
          <div className="me-4 mt-4">
            <PhoneIcon style={{ fontSize: 50, color: "#0d6efd" }}></PhoneIcon>
          </div>
          <div className="container col-auto">
            <p className="fs-2">Phone :</p>
            <p className="fs-3">+8801408442962</p>
          </div>
        </div>
        <div className="d-flex justify-content-center container">
          <div className="me-4 mt-4">
            <LocationOnIcon
              style={{ fontSize: 50, color: "#0d6efd" }}
            ></LocationOnIcon>
          </div>
          <div className="container col-auto">
            <p className="fs-2">My Location:</p>
            <p className="fs-3">Rangpur,Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-8">
        <div className="container-fluid border border-success rounded-3 m-5 col-auto">
          <form onSubmit={sendEmail}>
            <input type="hidden" placeholder="Number" name="contact_number" />
            <br />

            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="user_name"
            />
            <br />

            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="user_email"
            />
            <br />

            <textarea
              placeholder="Message"
              class="form-control"
              name="message"
            />
            <br />
            <input
              class="form-control btn btn-info mb-3"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
