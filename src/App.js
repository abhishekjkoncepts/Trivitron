import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Products from "./pages/Home/HomePageComponents/Products/Products";
import Sample from "./pages/Home/HomePageComponents/Sample";

const App = () => {
  return (
    <Box>
      <Navigation />
    </Box>
  );
};

export default App;
