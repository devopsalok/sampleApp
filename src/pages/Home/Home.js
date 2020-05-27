import React from "react";
import LayoutHoc from "../../containers/Layout/Layout";
import CarouselContainer from "../../components/Carousel/Carousel";

function Home() {
  return (
    <LayoutHoc>
      <CarouselContainer></CarouselContainer>
    </LayoutHoc>
  );
}

export default Home;
