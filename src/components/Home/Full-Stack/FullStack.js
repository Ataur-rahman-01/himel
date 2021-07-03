import himel2 from "../../../images/my-bg2.png";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const TEXTS = [
  "Full Stack Web Developer",
  "React Native Developer",
  "Laravel Developer",
  "PHP Developer",
];

const FullStack = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            style={{ marginTop: "170px", color: "white" }}
            className="col-12 col-sm-6"
          >
            <div className="fs-2">Hi,I am Hasanur Rahman Himel</div>
            <div className="fs-2">
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </div>
            <button class="glow-on-hover mt-3" type="button">
              AVAILABLE NOW
            </button>
            <br />
            <FacebookIcon
              className="mt-3 icon"
              color="secondary"
              fontSize="large"
            />
            <LinkedInIcon
              className="mt-3 ms-3 icon"
              color="secondary"
              fontSize="large"
            />
            <GitHubIcon
              className="mt-3 ms-3 icon"
              color="secondary"
              fontSize="large"
            />
          </div>
          <div className="col-12 col-sm-6">
            <img
              style={{ marginTop: "50px" }}
              src={himel2}
              className="img-fluid rounded-3"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStack;
