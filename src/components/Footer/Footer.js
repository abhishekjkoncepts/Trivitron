import React from "react";

// MUI
import { Grid, Box, Typography } from "@mui/material";

import "./Footer.css";

// IMAGES
import facebook from "../../assets/images/Footer/facebook.png";
import instagram from "../../assets/images/Footer/instagram.png";
import whatsapp from "../../assets/images/Footer/whatsapp.png";
import youtube from "../../assets/images/Footer/youtube.png";
import linkedin from "../../assets/images/Footer/linkedin.png";
import x from "../../assets/images/Footer/x.png";

const Footer = () => {
  return (
    <>
      <Box>
        {/* part1 */}
        <Grid container sx={{ backgroundColor: "#EFF5F5", height: "107px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1.5}
            lg={1.5}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            // sx={{ backgroundColor: "green" }}
          >
            <Box sx={{ marginTop: "45px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* BRANDS */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    BRANDS
                  </Typography>
                </Box>
                {/* NEWS & INITIATIVE */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    NEWS & INITIATIVE
                  </Typography>
                </Box>
                {/* E-STORE */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    E-STORE
                  </Typography>
                </Box>
                {/* EVENTS */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    EVENTS
                  </Typography>
                </Box>
                {/* BRANCHES & NETWORK */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    BRANCHES & NETWORK
                  </Typography>
                </Box>
                {/* SERVICES */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    SERVICES
                  </Typography>
                </Box>
                {/* INVESTOR RELATIONS */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "22.5px",
                      color: "#0BAEB2",
                    }}
                  >
                    INVESTOR RELATIONS
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={1.5}
            lg={1.5}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
        </Grid>
        {/* part 2 */}
        <Grid container sx={{ backgroundColor: "#EFF5F5", height: "300px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            // sx={{ backgroundColor: "green" }}
          >
            <Grid container sx={{ marginTop: "50px" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                // sx={{ backgroundColor: "orange" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "150px",
                  }}
                >
                  <Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                          color: "#0BAEB2",
                        }}
                      >
                        +91-9876543210
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                          color: "#0BAEB2",
                        }}
                      >
                        info@trivitron.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                          color: "#0BAEB2",
                        }}
                      >
                        © 2024 Trivitron Healthcare
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                          color: "#0BAEB2",
                        }}
                      >
                        All rights reserved.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                //   backgroundColor: "pink",
                  display:"flex",
                  justifyContent:"center",
                  flexDirection:"column"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color:"#0BAEB2"
                      }}
                    >
                      Connect with us :
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop:"10px"
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={facebook}
                  />

                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={instagram}
                  />
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={whatsapp}
                  />
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={youtube}
                  />
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={linkedin}
                  />
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                      cursor: "pointer",
                    }}
                    alt="The house from the offer."
                    src={x}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={
                  {
                    //   backgroundColor: "orange",
                  }
                }
              >
                <Box>
                  {/* Privacy policy */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Privacy Policy
                    </Typography>
                  </Box>

                  {/* Privacy Policy COVIHome */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Privacy Policy COVIHome
                    </Typography>
                  </Box>
                  {/* Refund Policy */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Refund Policy
                    </Typography>
                  </Box>
                  {/* Disclaimers */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Disclaimers
                    </Typography>
                  </Box>
                  {/* Terms & Conditions */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Terms & Conditions
                    </Typography>
                  </Box>
                  {/* T&C of Purchase*/}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      Terms & Conditions
                    </Typography>
                  </Box>
                  {/* E-Waste */}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        color: "#0BAEB2",
                      }}
                    >
                      E-Waste
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
