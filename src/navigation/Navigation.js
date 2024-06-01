import React from "react";

//REACT-ROUTER-DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

//PAGES
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Scrolltotop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Scrolltotop>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
