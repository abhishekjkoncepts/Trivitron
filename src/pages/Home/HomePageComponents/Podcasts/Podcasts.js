import React from "react";

import { Grid, Box, Typography } from "@mui/material";

import "./Podcasts.css";

// image
import podcast1 from "../../../../assets/images/Podcast/PodcastImg1.png";
import podcast2 from "../../../../assets/images/Podcast/PodcastImg2.png";
import podcast3 from "../../../../assets/images/Podcast/PodcastImg3.png";

const Podcasts = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              backgroundColor: "#D0ECED",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  marginTop: "80px",
                  marginBottom: "50px",
                  marginLeft: "30px",
                  width: "700px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      color: "#000000",
                      lineHeight: "24px",
                      letterSpacing: "2%",
                    }}
                  >
                    CONVERSATIONS TO INSPIRE YOU
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      color: "#0BAEB2",
                      lineHeight: "48px",
                      letterSpacing: "2%",
                    }}
                  >
                    PODCASTS
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "30px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      letterSpacing: "2%",
                      lineHeight: "24px",
                      letterSpacing: "2%",
                      color: "#000000",
                    }}
                  >
                    Welcome to Trivitron Health Talks, your go-to
                    <br /> destination for expert insights and invaluable <br />
                    knowledge in the realm of healthcare. <br />
                    <br />
                    Join us as we explore a wide array of topics. Our
                    <br /> podcasts are designed to educate, inform, and <br />
                    inspire, empowering listeners to take charge of their
                    <br /> health and well-being.
                    <br />
                    <br /> Tune in to Trivitron Health Talks and embark on a
                    <br />
                    journey towards a healthier, happier life.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      letterSpacing: "2%",
                      lineHeight: "24px",
                      letterSpacing: "2%",
                      color: "#0BAEB2",
                      cursor:"pointer"
                    }}
                  >
                    VIEW MORE PODCASTS
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ marginTop: "50px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop:"30px"
                  }}
                >
                  {/* 1 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "290px",
                        width: "250px",
                        marginRight: "10px",
                      }}
                      alt="The house from the offer."
                      src={podcast1}
                    />
                    <Box sx={{ width: "250px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "27px",
                          color: "#0BAEB2",
                        }}
                      >
                        TUBERCULOSIS - SYMPTOMS, CAUSES DIAGNOSOS & TREATMENT
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "10px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "18px",
                          color: "#000000",
                        }}
                      >
                        Tuberculosis (TB), a serious infection caused by the
                        bacteria Mycobacterium tuberculosis, poses a significant
                        health risk worldwide.{" "}
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "25px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "600",
                          // letterSpacing: "2%",
                          lineHeight: "21px",
                          color: "#000000",
                        }}
                      >
                        read more
                      </Typography>
                    </Box>
                  </Box>
                  {/* 2 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "290px",
                        width: "250px",
                        marginRight: "10px",
                      }}
                      alt="The house from the offer."
                      src={podcast2}
                    />
                    <Box sx={{ width: "250px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "27px",
                          color: "#0BAEB2",
                        }}
                      >
                        Facts everyone should know about HIV/AIDS
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "10px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "18px",
                          color: "#000000",
                        }}
                      >
                        we confront a virus covered in stigma: HIV, the Human
                        Immunodeficiency Virus. It's a name that can evoke fear,
                        but knowledge is power.
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "7px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "600",
                          // letterSpacing: "2%",
                          lineHeight: "21px",
                          color: "#000000",
                        }}
                      >
                        read more
                      </Typography>
                    </Box>
                  </Box>
                  {/* 3 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "290px",
                        width: "250px",
                        marginRight: "10px",
                      }}
                      alt="The house from the offer."
                      src={podcast3}
                    />
                    <Box sx={{ width: "250px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "27px",
                          color: "#0BAEB2",
                        }}
                      >
                        How to prepare for CT scan
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "35px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "400",
                          letterSpacing: "2%",
                          lineHeight: "18px",
                          color: "#000000",
                        }}
                      >
                        Here, we talk about how to prepare for a CT Scan and the
                        details associated to it, right from fasting do's and
                        don'ts to the ideal outfit for ease and comfort during
                        your scan.
                      </Typography>
                    </Box>
                    <Box sx={{ width: "250px", marginTop: "7px" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "600",
                          // letterSpacing: "2%",
                          lineHeight: "21px",
                          color: "#000000",
                        }}
                      >
                        read more
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Podcasts;
