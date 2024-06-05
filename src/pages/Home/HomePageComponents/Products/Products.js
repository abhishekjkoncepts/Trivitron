import React, { useRef } from "react";
import "./Products.css";
import { Grid, Box, Typography } from "@mui/material";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from "../../../../assets/images/left-arrow.png";
import rightArrow from "../../../../assets/images/right-arrow.png";

// json
import { productSlider } from "../../../../assets/json/ProductsSlider/ProductsSlider";

import { Fade, Bounce } from "react-awesome-reveal";

// images

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         borderRadius: "20px",
//         marginTop: "-1px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         borderRadius: "20px",
//         marginTop: "-1px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

const Products = () => {
  const sliderRef = useRef(null);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <Box sx={{ marginTop: "30px", marginBottom: "60px" }}>
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
              <Fade direction="left">
                <Typography
                  sx={{
                    fontSize: "22px",
                    lineHeight: "33px",
                    letterSpacing: "8%",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                  }}
                >
                  PRODUCTS BY TRIVITRON
                </Typography>
              </Fade>
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
            md={8.5}
            lg={8.5}
            sx={{ backgroundColor: "#F9FAFA" }}
            // sx={{ backgroundColor: "blue" }}
          >
            <Box>
              <Fade direction="left">
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
                  vital solutions to healthcare providers worldwide. Leveraging
                  diverse intellect,
                  <br /> our range of products drives healthcare advancements
                  across all societal strata and geographies.
                </Typography>
              </Fade>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={1.5}
            lg={1.5}
            sx={{
              // backgroundColor: "pink",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{}}>
              <Box
                sx={{
                  width: "122px",
                  height: "32px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Fade direction="left">
                  {/* left arrow */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid #0BAEB2",
                        borderRadius: "100px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    ></Box>
                    <Box
                      src={leftArrow}
                      component="img"
                      sx={{
                        width: "6px",
                        height: "9px",
                        marginLeft: "-20px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                    <Box
                      sx={{
                        height: "1px",
                        width: "34px",
                        backgroundColor: "#0BAEB2",
                        marginLeft: "-5px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    ></Box>
                  </Box>
                </Fade>

                {/* <Fade direction="right"> */}
                {/* right arrow */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "1px",
                      width: "34px",
                      backgroundColor: "#0BAEB2",
                      marginRight: "-5px",
                    }}
                    onClick={() => sliderRef.current.slickNext()}
                  ></Box>
                  <Box
                    src={rightArrow}
                    component="img"
                    sx={{
                      width: "6px",
                      height: "9px",
                      marginRight: "-20px",
                    }}
                    onClick={() => sliderRef.current.slickNext()}
                  />
                  <Box
                    sx={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid #0BAEB2",
                      borderRadius: "100px",
                    }}
                    onClick={() => sliderRef.current.slickNext()}
                  ></Box>
                </Box>
                {/* </Fade> */}
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
          {/* <Grid item xs={12} sm={12} md={0.1} lg={0.1} sx={{backgroundColor:"red"}}></Grid> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // sx={{backgroundColor:"green"}}
          >
            <Bounce direction="bottom-left">
              <Box
                sx={{
                  margin: "0px",
                }}
              >
                <Slider ref={sliderRef} {...settings}>
                  {productSlider.map((item) => (
                    <Box
                      sx={{
                        display: "flex",
                        // flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "25px",
                        marginLeft: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: "239px",
                          width: "230px",
                          marginRight: "5px",
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
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Bounce>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={0.1} lg={0.1} sx={{backgroundColor:"red"}}></Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
