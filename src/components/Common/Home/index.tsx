import React from "react";
import Header from "../Header";
import Slide from "./Slide/index";
import PhotoWithTimelineMarker from "./PhotoWithTimelineMarker";

export default function Home() {
  return (
    <div>
      <Header />
      <Slide />
      <PhotoWithTimelineMarker />
    </div>
  );
}
