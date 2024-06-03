import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Products from "./pages/Home/HomePageComponents/Products/Products";
import Eksahishuruaat from "./pages/Home/HomePageComponents/Eksahishuruaat/Eksahishuruaat";

const App = () => {
  return (
    <Box>
      {/* <Navigation /> */}
      <Eksahishuruaat/>
    </Box>
  );
};

export default App;
