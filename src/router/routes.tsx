import React from "react";
import { Routes as Routing, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";



const Routes: React.FC = () => {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routing>
  );
};

export default Routes;
