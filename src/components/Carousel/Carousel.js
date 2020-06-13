import React from "react";
import "./index.css";
import { Carousel } from "antd";
import { carousalData } from "../../fakedata/home";

function CarouselContainer() {
  return (
    <Carousel className="main-carousal" autoplay={true}>
      {carousalData.map((data, index) => {
        return (
          <div key={index}>
            <img
              alt={`carousal-${index}`}
              src={data.imgSrc}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselContainer;