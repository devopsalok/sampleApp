import React from "react";
import "./index.css";
import LayoutHoc from "../../containers/Layout/Layout";
import CarouselContainer from "../../components/Carousel/Carousel";
import CardListComponent from "../../components/Customs/CardList/CardList";
import { cardData } from "../../fakedata/home";
import CardListComponentTwo from "../../components/Customs/CardList/CardListTwo";

function Home() {
  return (
    <LayoutHoc>
      <CarouselContainer />
      <CardListComponent data={cardData} />
      <CardListComponentTwo data={cardData} />
      <CardListComponent data={cardData} />
      <CardListComponentTwo data={cardData} />
    </LayoutHoc>
  );
}

export default Home;
