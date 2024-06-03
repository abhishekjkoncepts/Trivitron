import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Products from "./pages/Home/HomePageComponents/Products/Products";
import Eksahishuruaat from "./pages/Home/HomePageComponents/Eksahishuruaat/Eksahishuruaat";
import Ourrelationship from "./pages/Home/HomePageComponents/Ourrelationship/Ourrelationship";

const App = () => {
  return (
    <Box>
      <Navigation />
      {/* <Eksahishuruaat/> */}
      {/* <Ourrelationship/> */}
    </Box>
  );
};

export default App;
