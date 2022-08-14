import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Search from "./Search";
import DetailsPage from "./DetailsPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/details/:item" element={<DetailsPage />} />
    </Routes>
  );
}

export default Pages;
