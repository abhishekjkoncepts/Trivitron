import React from "react";

import { Grid, Box, Typography } from "@mui/material";

import "./Newsletter.css";

import rightarrow from "../../../../assets/images/right-arrow.png"

const Newsletter = () => {
  return (
    <>
      <Grid container sx={{ borderTop: "1px solid #0BAEB2" }}>
        <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          //   sx={{ backgroundColor: "green" }}
        >
          <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  color: "#0BAEB2",
                  textAlign: "center",
                }}
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </Typography>
            </Box>

            <Box sx={{ marginTop: "40px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "300",
                  fontFamily: "Poppins, sans-serif",
                  color: "#0BAEB2",
                  textAlign: "center",
                }}
              >
                About Trivitron
              </Typography>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "300",
                  fontFamily: "Poppins, sans-serif",
                  color: "#0BAEB2",
                  textAlign: "center",
                }}
              >
                Since 1997, the journey of Trivitron Healthcare as a medical
                technology company providing affordable healthcare solutions
                weaves a <br /> fascinating thread of inspiration to many
                healthcare providers. Trivitron markets its products to
                hospitals, individual healthcare providers, and independent
                practitioners alike.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop:"50px",
                alignItems:"center"
              }}
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="inputField"
                style={{
                  padding: "20px",
                  borderRadius: "50px",
                  fontSize: "16px",
                  width: "444px",
                  height: "74",
                  boxSizing: "border-box",
                  border: "none",
                  borderColor: "#0BAEB2",
                  backgroundColor: "#ECEBEA", // Added background color
                  color: "#0BAEB2", // Added text color for better contrast

                }}
              />
              <Box sx={{alignItems:"center" , display:"flex" , flexDirection:"row" , }}>
                <Box sx={{height:"1px" , width:"100px" , backgroundColor:"#0BAEB2" , marginLeft:"-50px"}}></Box>
                <Box
                    component="img"
                    sx={{
                      height: "10px",
                      width: "10px",
                      cursor: "pointer",
                      marginLeft:"-7px"
                    }}
                    alt="The house from the offer."
                    src={rightarrow}
                  />
              </Box>


            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
      </Grid>
    </>
  );
};

export default Newsletter;
