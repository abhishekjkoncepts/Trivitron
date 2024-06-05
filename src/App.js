import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Specialties from "./pages/Home/HomePageComponents/Specialties/Specialties";
import Ourrelationship from "./pages/Home/HomePageComponents/Ourrelationship/Ourrelationship";
import Products from "./pages/Home/HomePageComponents/Products/Products";
import Strategy from "./pages/Home/HomePageComponents/Strategy/Strategy";
import Sample from "./pages/Home/HomePageComponents/Sample";

const App = () => {
  return (
    <Box>
      <Navigation />
      {/* <Eksahishuruaat/> */}
      {/* <Ourrelationship/> */}
      {/* <Products/> */}
      {/* <Specialties/> */}
      {/* <Strategy/> */}
      {/* <Sample/> */}
    </Box>
  );
};

export default App;
