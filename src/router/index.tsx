import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/index";
import Details from "../pages/DetailsPage/index";
import Remembrance from "../pages/RemembrancePage/index";
import Accident from "../pages/AccidentPage/index";
import Victim from "../pages/VictimPage/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/Remembrance" element={<Remembrance />} />
      <Route path="/Accident" element={<Accident />} />
      <Route path="/Victim" element={<Victim />} />
    </Routes>
  );
}
