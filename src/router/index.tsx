import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Common/Home/index";
import Details from "../components/Details";
import Remembrance from "../components/Remembrance";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/Remembrance" element={<Remembrance />} />
    </Routes>
  );
}
