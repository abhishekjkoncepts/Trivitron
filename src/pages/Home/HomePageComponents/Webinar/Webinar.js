import React from "react";

// MUI
import { Grid, Box, Typography } from "@mui/material";

import "./Webinar.css";

import medicalSampleImge from "../../../../assets/images/Webinar/medicalSampleImg.jpg";

import { Fade  } from "react-awesome-reveal";

const Webinar = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ backgroundColor: "#D0ECED", height: "300px" }}
          >
            <Box>
              <Box sx={{ marginTop: "30px" }}>
              <Fade direction="down">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "22px",
                    letterSpacing: "8%",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                  }}
                >
                  WEBINAR
                </Typography>
                </Fade>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
              <Fade direction="up">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "13px",
                    letterSpacing: "4%",
                    fontWeight: "300px",
                    fontFamily: "Poppins, sans-serif",
                    color: "#1B1817",
                  }}
                >
                  Discover more stories and podcasts from real patients in the
                  trivitron world .
                </Typography>
                </Fade>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ position: "absolute", marginTop: "-140px" }}>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* image 1 */}
              <Fade direction="left">
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: "330px",
                    height: "251px",
                  }}
                  alt="The house from the offer."
                  src={medicalSampleImge}
                />
                {/* TExt On Image */}
                <Box sx={{ position: "absolute", marginTop: "-240px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "330px",
                    }}
                  >
                    <Box sx={{ marginLeft: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        Register For Webinar
                      </Typography>
                    </Box>
                    <Box sx={{ marginRight: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "500",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        7th March 2024
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* text below Image */}
                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                    }}
                  >
                    Successful Bilateral Hand Transplant
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    by Dr. Mahesh Mangal - Chairman
                  </Typography>
                </Box>
                <Box sx={{ width: "330px", marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    In an unexpected turn of fate, Mr Raju (Name Changed),
                    45yr/male, a resident of Nangloi, found himself at the
                    crossroads of despair and hope after a tragic train
                    accident. In Oct 2020, Mr Raju (Name Changed) who was a
                    painter by profession, decided to cross the train tracks of
                    Nangloi...
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                      lineHeight: "16.5px",
                      cursor: "pointer",
                    }}
                  >
                    Know more
                  </Typography>
                </Box>
              </Box>
              </Fade>

              {/* image 2 */}
            <Fade direction="down">
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: "330px",
                    height: "251px",
                  }}
                  alt="The house from the offer."
                  src={medicalSampleImge}
                />
                {/* TExt On Image */}
                <Box sx={{ position: "absolute", marginTop: "-240px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "330px",
                    }}
                  >
                    <Box sx={{ marginLeft: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        {/* Register For Webinar */}
                      </Typography>
                    </Box>
                    <Box sx={{ marginRight: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "500",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        19th April 2024{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* text below Image */}
                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                    }}
                  >
                    Artificial Heart Implant for Heart Attack{" "}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    Treated by Dr. Pawan Sharma - Cardiology{" "}
                  </Typography>
                </Box>
                <Box sx={{ width: "330px", marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    Mr. Madan Mohan Singh had trouble breathing accompanied by
                    chest pain, which kept on recurring at a greater severity.
                    In critical condition, Mr. Singh was evaluated by Dr. Pawan
                    Sharma, Associate Director, Cardiology, Max Hospital,
                    Patparganj, Delhi, India, who confirmed Heart Attack, which
                    was progressing .....
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                      lineHeight: "16.5px",
                      cursor: "pointer",
                    }}
                  >
                    Know more
                  </Typography>
                </Box>
              </Box>
              </Fade>
              {/* image 3 */}
              <Fade direction="right">
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: "330px",
                    height: "251px",
                  }}
                  alt="The house from the offer."
                  src={medicalSampleImge}
                />
                {/* TExt On Image */}
                <Box sx={{ position: "absolute", marginTop: "-240px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "330px",
                    }}
                  >
                    <Box sx={{ marginLeft: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        podcast
                      </Typography>
                    </Box>
                    <Box sx={{ marginRight: "15px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "500",
                          fontFamily: "Poppins, sans-serif",
                          color: "#FFFFFF",
                        }}
                      >
                        24th April 2024{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* text below Image */}
                <Box sx={{ width: "300px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                    }}
                  >
                    Thyroid Disorders: Types, Symptoms, Causes, Diagnosis, and
                    Treatment{" "}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    By Dr. Anshu Alok in Endocrinology & Diabetes
                  </Typography>
                </Box>
                <Box sx={{ width: "330px", marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      color: "#041849",
                      lineHeight: "16.5px",
                    }}
                  >
                    The thyroid gland is a small, butterfly-shaped organ located
                    in the front of the neck, which produces thyroid hormones,
                    primarily thyroxine (T4) and triiodothyronine (T3) .....
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "5px" }}>
                  <Typography
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "11px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                      lineHeight: "16.5px",
                      cursor: "pointer",
                    }}
                  >
                    Know more
                  </Typography>
                </Box>
              </Box>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ backgroundColor: "#fff", height: "370px" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Webinar;
