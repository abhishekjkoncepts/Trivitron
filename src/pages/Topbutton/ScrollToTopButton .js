import React from "react";
import "./ScrollToTopButton.css"; // Optional for styling
import { Box, Button, Typography } from "@mui/material";
import img from "../../assets/images/backToTop/up-arrow.png";

const ScrollToTopButton = () => {
  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className="scroll-to-top">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "170px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "30px",
        }}
        onClick={scrollToTop}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "18px",
            letterSpacing: "4%",
            color: "#0BAEB2",
            fontFamily: "Poppins, sans-serif",
            cursor: "pointer",
          }}
        >
          BACK TO TOP
        </Typography>
        <Box
          component="img"
          src={img}
          sx={{
            width: "10px",
            height: "7px",
            marginLeft: "5px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollToTopButton;
