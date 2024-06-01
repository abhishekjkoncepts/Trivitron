import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import "./Specialties.css";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialties1 from "../../../../assets/images/Specialties/Specialties1.png";
import specialties2 from "../../../../assets/images/Specialties/Specialties2.png";
import specialties3 from "../../../../assets/images/Specialties/Specialties3.png";
import specialties4 from "../../../../assets/images/Specialties/Specialties4.gif";

import { SpecialtiesSlider } from "../../../../assets/json/SpecialtiesSlider/SpecialtiesSlider";

const Specialties = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
          //   nextArrow: <SampleNextArrow />,
          //   prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,

          //   nextArrow: <SampleNextArrow />,
          //   prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          //   nextArrow: <SampleNextArrow />,
          //   prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <>
      <Box>
        {/* Specialties */}
        <Grid container sx={{ backgroundColor: "#F9FAFA" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            sx={{ backgroundColor: "#F9FAFA" }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ 
                  // backgroundColor: "orange",
                   width: "300px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "22px",
                      lineHeight: "33px",
                      letterSpacing: "8%",
                      color: "#0BAEB2",
                    }}
                  >
                    SPECIALTIES BY TRIVITRON
                  </Typography>
                </Box>

                <Box sx={{ backgroundColor: "" }}>
                  <Box
                    sx={{
                      height: "1px",
                      width: "189px",
                      backgroundColor: "#C4C4C4",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "53%",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      MAMMOGRAPHY
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      |
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      RADIOLOGY
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      |
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#0BAEB2",
                      }}
                    >
                      RADIOLOGY
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      |
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "17px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      NEPHROLOGY
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "blue" }}
          >
            <Box>
              <Box
                sx={{
                  width: "70%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    fontSize: "13px",
                    lineHeight: "19.5px",
                    letterSpacing: "4%",
                    color: "#1B1817",
                  }}
                >
                  Trivitron bridges global medical technology gaps, offering
                  vital solutions to healthcare providers worldwide. <br />
                  Our range of products drives healthcare advancements across
                  all societal strata and geographies.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ margin: "10px" }}>
              <Slider {...settings}>
                {SpecialtiesSlider.map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "25px",
                      // backgroundColor: "green",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "252px",
                        width: "256px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                      }}
                      alt="The house from the offer."
                      src={item.image}
                    />
                    <Box sx={{ marginTop: "10px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "700",
                          lineHeight: "18px",
                          color: "#0BAEB2",
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "10px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "300",
                          lineHeight: "18px",
                          color: "#000000",
                          textAlign: "center",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Specialties;
