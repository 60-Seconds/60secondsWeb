import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TitleImg1 from "../../../../assets/banner1.png";
import TitleImg2 from "../../../../assets/banner2.png";
import TitleImg3 from "../../../../assets/banner3.png";

import * as S from "./style";

export default function Slider() {
  const handleOnSlideChange = (event: any) => {
    const currentIndex = event.item; // Current slide index
    console.log("Slide changed to:", currentIndex);
  };

  return (
    <S.Slide>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        onSlideChanged={handleOnSlideChange}
      >
        <div>
          <img
            style={{ width: "100vw", overflow: "hidden" }}
            src={TitleImg1}
            alt="error"
          />
        </div>
        <div>
          <img style={{ width: "100vw" }} src={TitleImg2} alt="error" />
        </div>
        <div>
          <img style={{ width: "100vw" }} src={TitleImg3} alt="error" />
        </div>
      </AliceCarousel>
    </S.Slide>
  );
}
