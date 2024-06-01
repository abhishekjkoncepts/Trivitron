import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";

import eksahishuruaat from "../../../../assets/images/EkSahiShuruaat/eksahishuruaat.png";
import eksahishuruaat2 from "../../../../assets/images/EkSahiShuruaat/eksahishuruaat2.png";

import leftArrow from "../../../../assets/images/left-arrow.png";
import rightArrow from "../../../../assets/images/right-arrow.png";

import whiteArrow from "../../../../assets/images/right-arrow-white.png";

import "./Eksahishuruaat.css";

const Eksahishuruaat = () => {
  const EksahishuruSlider = [
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      // sx={{ backgroundColor: "green" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Box
              sx={{
                width: "215px",
                backgroundColor: "#FFFEFE",
                height: "255px",
                borderTop: "2px solid #0BAEB2",
                borderRight: "2px solid #0BAEB2",
                borderLeft: "2px solid #0BAEB2",
              }}
            >
              <Box sx={{ marginTop: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                    textAlign: "center",
                    lineHeight: "21px",
                    letterSpacing: "1%",
                  }}
                >
                  FOR EXPECTING <br /> PARENTS
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  Your Baby's
                  <br />
                  #EkSahiShuruat
                  <br />
                  Starts Here :
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  Newborn Screening for
                  <br />
                  Expecting Parents
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "37px",
                    height: "3px",
                    backgroundColor: "#0BAEB2",
                    alignItems: "center",
                    borderRadius: "3px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                width: "215px",
                backgroundColor: "#FFFEFE",
                height: "255px",
                border: "2px solid #0BAEB2",
              }}
            >
              <Box sx={{ marginTop: "50px" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                    textAlign: "center",
                    lineHeight: "21px",
                    letterSpacing: "1%",
                  }}
                >
                  FOR DOCTORS
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  #EkSahiShuruat
                  <br />
                  for Neonatal Health
                  <br />
                  newborn Screening :
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  A Scope For Optimal Newborn
                  <br />
                  Healthcare
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* image */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={eksahishuruaat}
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right, black, transparent)",
                pointerEvents: "none", // Makes sure the overlay doesn't interfere with clicking the image
              }}
            />
          </Box>

          {/* text on image */}
          <Box
            sx={{
              // marginLeft: "215px",
              position: "absolute",
              marginTop: "15px",
              marginLeft: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
              }}
            >
              #EkSahiShuruat,{" "}
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#FFFFFF",
                  textAlign: "left",
                  lineHeight: "18px",
                }}
              >
                for expecting parents
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "20px",
              }}
            >
              SECURE NEWBORN'S HEALTH FROM DAY ONE with
            </Typography>
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "51px",
                marginTop: "50px",
                color: "#0BAEB2",
              }}
            >
              #EKSAHISHURUAT
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "10px",
                color: "#FFFFFF",
              }}
            >
              With #EkSahiShuruat, we're committed to safeguarding the health of
              every newborn <br /> right from the beginning, setting the
              foundation for a thriving life.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "40px",
                color: "#FFFFFF",
              }}
            >
              NEWBORN SCREENING SOLUTIONS - FOR EXPECTING PARENTS
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "10px",
                color: "#FFFFFF",
              }}
            >
              Ensure the journey begins with a healthy start for your Little One
              Every parent's dream ,<br /> is to bring their child into the
              world healthy and strong, - a simple yet crucial step in <br />
              securing your baby's health and future.
            </Typography>

            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor:"red"
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
                Read more
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "170px",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "13px",
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
                src={whiteArrow}
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
        </Box>
      </Box>
    </Grid>,

    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      // sx={{ backgroundColor: "green" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Box
              sx={{
                width: "215px",
                backgroundColor: "#FFFEFE",
                height: "255px",
                borderTop: "2px solid #0BAEB2",
                borderRight: "2px solid #0BAEB2",
                borderLeft: "2px solid #0BAEB2",
              }}
            >
              <Box sx={{ marginTop: "20px" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                    textAlign: "center",
                    lineHeight: "21px",
                    letterSpacing: "1%",
                  }}
                >
                  FOR EXPECTING <br /> PARENTS
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  Your Baby's
                  <br />
                  #EkSahiShuruat
                  <br />
                  Starts Here :
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  Newborn Screening for
                  <br />
                  Expecting Parents
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "37px",
                    height: "3px",
                    backgroundColor: "#0BAEB2",
                    alignItems: "center",
                    borderRadius: "3px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                width: "215px",
                backgroundColor: "#FFFEFE",
                height: "255px",
                border: "2px solid #0BAEB2",
              }}
            >
              <Box sx={{ marginTop: "50px" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                    textAlign: "center",
                    lineHeight: "21px",
                    letterSpacing: "1%",
                  }}
                >
                  FOR DOCTORS
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  #EkSahiShuruat
                  <br />
                  for Neonatal Health
                  <br />
                  newborn Screening :
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                  }}
                >
                  A Scope For Optimal Newborn
                  <br />
                  Healthcare
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* image */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={eksahishuruaat2}
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right, black, transparent)",
                pointerEvents: "none", // Makes sure the overlay doesn't interfere with clicking the image
              }}
            />
          </Box>

          {/* text on image */}
          <Box
            sx={{
              // marginLeft: "215px",
              position: "absolute",
              marginTop: "15px",
              marginLeft: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
              }}
            >
              #EkSahiShuruat,{" "}
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#FFFFFF",
                  textAlign: "left",
                  lineHeight: "18px",
                }}
              >
                for expecting parents
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "20px",
              }}
            >
              SECURE NEWBORN'S HEALTH FROM DAY ONE with
            </Typography>
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "51px",
                marginTop: "50px",
                color: "#0BAEB2",
              }}
            >
              #EKSAHISHURUAT
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "10px",
                color: "#FFFFFF",
              }}
            >
              With #EkSahiShuruat, we're committed to safeguarding the health of
              every newborn <br /> right from the beginning, setting the
              foundation for a thriving life.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "40px",
                color: "#FFFFFF",
              }}
            >
              NEWBORN SCREENING SOLUTIONS - FOR EXPECTING PARENTS
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Poppins, sans-serif",
                color: "#FFFFFF",
                textAlign: "left",
                lineHeight: "18px",
                marginTop: "10px",
                color: "#FFFFFF",
              }}
            >
              Ensure the journey begins with a healthy start for your Little One
              Every parent's dream ,<br /> is to bring their child into the
              world healthy and strong, - a simple yet crucial step in <br />
              securing your baby's health and future.
            </Typography>

            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor:"red"
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
                Read more
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "170px",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "13px",
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
                src={whiteArrow}
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
        </Box>
      </Box>
    </Grid>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % EksahishuruSlider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? EksahishuruSlider.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Grid container>{EksahishuruSlider[currentIndex]}</Grid>

      {/* Buttons */}
      <Grid container sx={{ position: "absolute", marginTop: "-72px" , marginLeft:"60px" }}>
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
                    {EksahishuruSlider.length}
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

export default Eksahishuruaat;
