import React, { useEffect } from "react";
import Header from "../Header";
import Slide from "./Slide/index";
import PhotoWithTimelineMarker from "./PhotoWithTimelineMarker";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Slide />
      <PhotoWithTimelineMarker />
    </div>
  );
}
