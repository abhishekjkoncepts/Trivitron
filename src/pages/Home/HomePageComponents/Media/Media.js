import React, { useRef } from "react";
import { Grid, Box, Typography } from "@mui/material";

import "./Media.css";
import { Fade, Bounce } from "react-awesome-reveal";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { mediaSlider } from "../../../../assets/json/MediaSlider/MediaSlider";

import leftarrow from "../../../../assets/images/Media/White-left-arrow.png";
import rightarrow from "../../../../assets/images/Media/White-right-arrow.png";

const Media = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Grid container sx={{ marginTop: "80px", marginBottom: "80px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.5}
          lg={2.5}
          sx={{ backgroundColor: "#6B6666" }}
        >
          <Box sx={{ height: "320px" }}>
            <Box sx={{ marginTop: "80px" }}>
              <Fade direction="up">
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                    fontSize: "18px",
                    textAlign: "center",
                    lineHeight: "27px",
                    color: "#FFFFFF",
                  }}
                >
                  MEDIA
                </Typography>
              </Fade>
              <Box sx={{ marginTop: "40px" }}>
                <Fade direction="up">
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      textAlign: "center",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                    }}
                  >
                    Discover more stories from <br /> the trivitron world
                  </Typography>
                </Fade>
              </Box>
              <Box sx={{ marginTop: "40px" }}>
                <Fade direction="up">
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      textAlign: "center",
                      lineHeight: "18px",
                      // letterSpacing: "8%",
                      color: "#FFFFFF",
                    }}
                  >
                    Explore more here
                  </Typography>
                </Fade>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "80px",
                  }}
                >
                  <Fade direction="left">
                    <Box
                      component="img"
                      src={leftarrow}
                      sx={{ width: "20px", height: "20px" }}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                  </Fade>

                  <Fade direction="right">
                    <Box
                      component="img"
                      src={rightarrow}
                      sx={{ width: "20px", height: "20px" }}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                  </Fade>
                </Box>
              </Box>
              {/* </Box> */}
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={9.5}
          lg={9.5}
          // sx={{ backgroundColor: "green" }}
        >
            <Bounce>
          <Box sx={{ margin: "10px" }}>

            <Slider ref={sliderRef} {...settings}>
              {mediaSlider.map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "240px",
                      height: "236px",
                    }}
                    alt="The house from the offer."
                    src={item.image}
                  />
                  <Box sx={{ marginTop: "5px" }}>
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
                  <Box
                    sx={{
                      marginTop: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        lineHeight: "18px",
                        color: "#041849",
                        textAlign: "center",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "250px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "300",
                        lineHeight: "18px",
                        color: "#041849",
                        textAlign: "center",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>{" "}
                </Box>
              ))}
            </Slider>
          </Box>
            </Bounce>
        </Grid>
      </Grid>
    </>
  );
};

export default Media;
