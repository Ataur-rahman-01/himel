import React from "react";
import Card from "./Card/Card";
import car from "../../images/car.jpg";
import shop from "../../images/rsz_shop.jpg";
import team from "../../images/team.jpg";
import bus from "../../images/screenshot-ataur-rahman-01.github.io-2021.06.03-21_15_53.jpg";
const Portfolio = () => {
  const img = [
    {
      img1: car,
      img2: shop,
      id: 1,
    },
    {
      img1: team,
      img2: bus,
      id: 2,
    },
  ];
  return (
    <div>
      <p className="text-center fs-2 m-5">RECENT WORKING PROJECTS LIST</p>
      {img.map((im) => (
        <Card img1={im.img1} img2={im.img2} id={im.id}>
          {" "}
        </Card>
      ))}
    </div>
  );
};

export default Portfolio;
