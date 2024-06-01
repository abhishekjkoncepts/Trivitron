import React from "react";

import "./Docuseries.css";

import { Grid, Box, Typography } from "@mui/material";

import Docuseriesr from "../../../../assets/videos/black.mp4";

import rightwhitearrow from "../../../../assets/images/right-arrow-white.png";

const Docuseries = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
              height: { xs: "50vh", sm: "50vh", md: "120vh", lg: "120vh" },
              marginTop: "-26px",
            }}
          >
            <video
              src={Docuseriesr}
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
                sx={{
                  //   backgroundColor: "pink",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
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
                    ></Typography>
                  </Box>
                  <Box sx={{ marginTop: "5px" }}>
                    <Typography
                      sx={{
                        color: "#0BAEB2",
                        fontSize: "40px",
                        fontWeight: "700",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "60px",
                        letterSpacing: "4%",
                        textAlign: "right",
                      }}
                    >
                      DOCUSERIES
                    </Typography>
                    {/* <Typography>INNOVATION CENTER</Typography> */}
                  </Box>

                  <Box sx={{ marginTop: "5px" }}>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "22px",
                        fontWeight: "300",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "33px",
                        letterSpacing: "8%",
                        textAlign: "right",
                      }}
                    >
                      ON THE FRONTLINES
                    </Typography>
                    {/* <Typography>INNOVATION CENTER</Typography> */}
                  </Box>

                  <Box sx={{ marginTop: "15px" }}>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: "300",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "19.5px",
                        letterSpacing: "4%",
                        textAlign: "right",
                        // color:"#000000"
                      }}
                    >
                      In this series, filmmaker Mikey Kay reports live from the
                      field <br />
                      on the latest healthcare news and stories worldwide, from{" "}
                      <br /> the ICUs of Europe to the clinics of India.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "40px",
                      marginLeft: "70px",
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
                      Know more
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
        </Grid>
      </Grid>
    </>
  );
};

export default Docuseries;
