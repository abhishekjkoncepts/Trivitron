import React from "react";
import "./Products.css";
import { Grid, Box, Typography } from "@mui/material";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// json
import { productSlider } from "../../../../assets/json/ProductsSlider/ProductsSlider";

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
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
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
    <Box sx={{marginTop:"40px" , marginBottom:"40px"}}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          lg={1}
        //   sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Box
          >
            <Box>
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  lineHeight: "19.5px",
                  letterSpacing: "4%",
                  fontWeight: "300",
                  fontFamily: "Poppins, sans-serif",
                  color: "#1B1817",
                }}
              >
                Trivitron bridges global medical technology gaps, offering vital
                solutions to healthcare providers worldwide. Leveraging diverse
                intellect,
                <br /> our range of products drives healthcare advancements
                across all societal strata and geographies.
              </Typography>
              <Box></Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          lg={1}
        //   sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      <Grid container>
        {/* <Grid item xs={12} sm={12} md={0.1} lg={0.1} sx={{backgroundColor:"red"}}></Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12} 
        // sx={{backgroundColor:"green"}}
        >

        <Box sx={{
          margin:"10px"
          }}
          >
          <Slider {...settings}>
            {productSlider.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:"25px",
                  marginLeft:"10px"
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
        </Grid>
        {/* <Grid item xs={12} sm={12} md={0.1} lg={0.1} sx={{backgroundColor:"red"}}></Grid> */}
      </Grid>
      </Box>
    </>
  );
};

export default Products;
