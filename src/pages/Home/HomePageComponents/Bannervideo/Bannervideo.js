// import React from "react";

// // MUI
// import { Grid, Box, Typography } from "@mui/material";

// // VIDEO
// import HomePageVideo from "../../../../assets/videos/Trivitron.mp4";

// import rightwhitearrow from "../../../../assets/images/right-arrow-white.png";

// import "./Bannervideo.css";

// const Bannervideo = () => {
//   return (
//     <>
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Box
//             sx={{
//               width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//               height: { xs: "50vh", sm: "50vh", md: "120vh", lg: "120vh" },
//               marginTop: "-27px",
//             }}
//           >
//             <video
//               src={HomePageVideo}
//               autoPlay
//               loop
//               muted
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//             <Grid container sx={{ marginTop: "-500px" }}>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={1}
//                 lg={1}
//                 // sx={{ backgroundColor: "green" }}
//               ></Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={10}
//                 lg={10}
//                 // sx={{ backgroundColor: "pink" }}
//               >
//                 <Box>
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#FFFFFF",
//                         fontSize: "16px",
//                         fontWeight: "300",
//                         fontFamily: "Poppins, sans-serif",
//                         letterSpacing: "4%",
//                       }}
//                     >
//                       HEALTHCARE TECHNOLOGY
//                     </Typography>
//                   </Box>
//                   <Box sx={{ marginTop: "5px" }}>
//                     <Typography
//                       sx={{
//                         color: "white",
//                         fontSize: "30px",
//                         fontWeight: "275",
//                         fontFamily: "Poppins, sans-serif",
//                         lineHeight: "40px",
//                         color: "#0BAEB2",
//                         letterSpacing: "4%",
//                       }}
//                     >
//                       TRIVITRON TECHNOLOGIES & <br />
//                       INNOVATION CENTER
//                     </Typography>
//                     {/* <Typography>INNOVATION CENTER</Typography> */}
//                   </Box>
//                   <Box sx={{ marginTop: "15px" }}>
//                     <Typography
//                       sx={{
//                         color: "#FFFFFF",
//                         fontSize: "15px",
//                         fontWeight: "300",
//                         fontFamily: "Poppins, sans-serif",
//                         lineHeight: "24px",
//                         letterSpacing: "4%",
//                       }}
//                     >
//                       symbolizing Trivitron's commitment to <br />
//                       R&D and innovation in healthcare.
//                       <br />
//                       It serves as a technology hub to deliver on our mission.
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       marginTop: "40px",
//                       display: "flex",
//                       flexDirection: "row",
//                       // justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: "#FFFFFF",
//                         fontSize: "13px",
//                         fontWeight: "600",
//                         fontFamily: "Poppins, sans-serif",
//                         lineHeight: "19.5px",
//                         letterSpacing: "4%",
//                       }}
//                     >
//                       Discover more
//                     </Typography>
//                     <Box
//                       sx={{
//                         height: "1px",
//                         width: "170px",
//                         backgroundColor: "#FFFFFF",
//                         marginLeft: "15px",
//                       }}
//                     ></Box>
//                     <Box
//                       component="img"
//                       sx={{
//                         height: "9px",
//                         width: "9px",
//                         cursor: "pointer",
//                       }}
//                       alt="The house from the offer."
//                       src={rightwhitearrow}
//                     />
//                     <Box
//                       sx={{
//                         height: "46px",
//                         width: "46px",
//                         border: "1px solid white",
//                         borderRadius: "100px",
//                         marginLeft: "-25px",
//                       }}
//                     ></Box>
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Bannervideo;

import React, { useState, useEffect } from "react";

// MUI
import { Grid, Box, Typography } from "@mui/material";

// VIDEO
import HomePageVideo from "../../../../assets/videos/Trivitron.mp4";
import BlueVideo from "../../../../assets/videos/blue.mp4";
import BlackVideo from "../../../../assets/videos/black.mp4";

import rightwhitearrow from "../../../../assets/images/right-arrow-white.png";

import leftArrow from "../../../../assets/images/left-arrow.png";
import rightArrow from "../../../../assets/images/right-arrow.png";

import "./Bannervideo.css";

const Bannervideo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const BannerVideoSlide = [
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          height: { xs: "50vh", sm: "50vh", md: "120vh", lg: "120vh" },
          marginTop: "-27px",
        }}
      >
        <video
          src={HomePageVideo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Grid container sx={{ marginTop: "-500px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            // sx={{ backgroundColor: "pink" }}
          >
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "4%",
                  }}
                >
                  HEALTHCARE TECHNOLOGY
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "275",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "40px",
                    color: "#0BAEB2",
                    letterSpacing: "4%",
                  }}
                >
                  TRIVITRON TECHNOLOGIES & <br />
                  INNOVATION CENTER
                </Typography>
                {/* <Typography>INNOVATION CENTER</Typography> */}
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "24px",
                    letterSpacing: "4%",
                  }}
                >
                  symbolizing Trivitron's commitment to <br />
                  R&D and innovation in healthcare.
                  <br />
                  It serves as a technology hub to deliver on our mission.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "19.5px",
                    letterSpacing: "4%",
                  }}
                >
                  Discover more
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "170px",
                    backgroundColor: "#FFFFFF",
                    marginLeft: "15px",
                  }}
                ></Box>
                <Box
                  component="img"
                  sx={{
                    height: "9px",
                    width: "9px",
                    cursor: "pointer",
                    marginLeft: "-5px",
                  }}
                  alt="The house from the offer."
                  src={rightwhitearrow}
                />
                <Box
                  sx={{
                    height: "46px",
                    width: "46px",
                    border: "1px solid white",
                    borderRadius: "100px",
                    marginLeft: "-25px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
      </Box>
    </Grid>,

    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          height: { xs: "50vh", sm: "50vh", md: "120vh", lg: "120vh" },
          marginTop: "-27px",
        }}
      >
        <video
          src={BlueVideo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Grid container sx={{ marginTop: "-500px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            // sx={{ backgroundColor: "pink" }}
          >
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "4%",
                  }}
                >
                  HEALTHCARE TECHNOLOGY
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "275",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "40px",
                    color: "#0BAEB2",
                    letterSpacing: "4%",
                  }}
                >
                  TRIVITRON TECHNOLOGIES & <br />
                  INNOVATION CENTER
                </Typography>
                {/* <Typography>INNOVATION CENTER</Typography> */}
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "24px",
                    letterSpacing: "4%",
                  }}
                >
                  symbolizing Trivitron's commitment to <br />
                  R&D and innovation in healthcare.
                  <br />
                  It serves as a technology hub to deliver on our mission.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "19.5px",
                    letterSpacing: "4%",
                  }}
                >
                  Discover more
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "170px",
                    backgroundColor: "#FFFFFF",
                    marginLeft: "15px",
                  }}
                ></Box>
                <Box
                  component="img"
                  sx={{
                    height: "9px",
                    width: "9px",
                    cursor: "pointer",
                  }}
                  alt="The house from the offer."
                  src={rightwhitearrow}
                />
                <Box
                  sx={{
                    height: "46px",
                    width: "46px",
                    border: "1px solid white",
                    borderRadius: "100px",
                    marginLeft: "-25px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
      </Box>
    </Grid>,

    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          height: { xs: "50vh", sm: "50vh", md: "120vh", lg: "120vh" },
          marginTop: "-27px",
        }}
      >
        <video
          src={BlackVideo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Grid container sx={{ marginTop: "-500px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            // sx={{ backgroundColor: "pink" }}
          >
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "4%",
                  }}
                >
                  HEALTHCARE TECHNOLOGY
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "275",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "40px",
                    color: "#0BAEB2",
                    letterSpacing: "4%",
                  }}
                >
                  TRIVITRON TECHNOLOGIES & <br />
                  INNOVATION CENTER
                </Typography>
                {/* <Typography>INNOVATION CENTER</Typography> */}
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "24px",
                    letterSpacing: "4%",
                  }}
                >
                  symbolizing Trivitron's commitment to <br />
                  R&D and innovation in healthcare.
                  <br />
                  It serves as a technology hub to deliver on our mission.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "19.5px",
                    letterSpacing: "4%",
                  }}
                >
                  Discover more
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "170px",
                    backgroundColor: "#FFFFFF",
                    marginLeft: "15px",
                  }}
                ></Box>
                <Box
                  component="img"
                  sx={{
                    height: "9px",
                    width: "9px",
                    cursor: "pointer",
                  }}
                  alt="The house from the offer."
                  src={rightwhitearrow}
                />
                <Box
                  sx={{
                    height: "46px",
                    width: "46px",
                    border: "1px solid white",
                    borderRadius: "100px",
                    marginLeft: "-25px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
      </Box>
    </Grid>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerVideoSlide.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BannerVideoSlide.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Grid
        container
        //  sx={{ backgroundColor: "yellow" }}
      >
        {BannerVideoSlide[currentIndex]}
      </Grid>

      {/* Buttons */}
      <Grid container sx={{ position: "absolute", marginTop: "-72px" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItms: "center",
            }}
          >
            <Box
              sx={{
                width: "198px",
                height: "72px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* buttons */}
              <Box
                sx={{
                  position: "absolute",
                  width: "70px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                    src={leftArrow}
                    component="img"
                    sx={{
                      width: "6px",
                      height: "9px",
                      marginLeft: "-20px",
                    }}
                    onClick={prevSlide}
                  />
                  <Box
                    sx={{
                      height: "1px",
                      width: "10.5px",
                      backgroundColor: "#0BAEB2",
                      marginLeft: "-5px",
                    }}
                    onClick={prevSlide}
                  ></Box>
                </Box>

                {/* index No */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "17.07%",
                      letterSpacing: "5%",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    0
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "17.07%",
                      letterSpacing: "5%",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    {currentIndex + 1}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "12.19%",
                      letterSpacing: "9%",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    &nbsp;/&nbsp;
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "12.19%",
                      letterSpacing: "9%",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    0
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "12.19%",
                      letterSpacing: "9%",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    {BannerVideoSlide.length}
                  </Typography>
                </Box>

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
                      width: "10.5px",
                      backgroundColor: "#0BAEB2",
                      marginRight: "-5px",
                    }}
                    onClick={nextSlide}
                  ></Box>
                  <Box
                    src={rightArrow}
                    component="img"
                    sx={{
                      width: "6px",
                      height: "9px",
                      marginRight: "-20px",
                    }}
                    onClick={nextSlide}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </>
  );
};

export default Bannervideo;
