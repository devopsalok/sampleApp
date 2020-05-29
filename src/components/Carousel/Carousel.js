import React from "react";
import { Carousel } from "antd";
import { carousalData } from "../../fakedata/home";

function CarouselContainer() {
  return (
    <Carousel>
      {carousalData.map((data, index) => {
        return (
          <div>
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
