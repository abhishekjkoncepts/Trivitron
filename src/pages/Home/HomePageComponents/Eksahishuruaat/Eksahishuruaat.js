import React, { useState } from "react";

import { Grid, Box, Typography } from "@mui/material";
import "./Eksahishuruaat.css";
import eksahishuruaat from "../../../../assets/images/EkSahiShuruaat/eksahishuruaat.png";
import eksahishuruaat2 from "../../../../assets/images/EkSahiShuruaat/eksahishuruaat2.png";

import leftArrow from "../../../../assets/images/left-arrow.png";
import rightArrow from "../../../../assets/images/right-arrow.png";

import whiteArrow from "../../../../assets/images/right-arrow-white.png";

import { Fade, Bounce } from "react-awesome-reveal";

const Eksahishuruaat = () => {
  const EksahishuruSlider = [
    // 1
    <Grid container sx={{ backgroundColor: "white" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        sx={{
          border: "2px solid #0BAEB2",
        }}
      >
        <Box>
          {/* 1 */}
          <Box
            sx={{
              borderBottom: "2px solid #0BAEB2",
            }}
          >
            <Box
              sx={{
                marginTop: "15%",
                marginBottom: "8%",
              }}
            >
              <Box>
                <Fade direction="up">
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "800",
                      fontSize: "14px",
                      lineHeight: "21px",
                      textAlign: "center",
                      color: "#0BAEB2",
                    }}
                  >
                    FOR EXPECTING
                    <br />
                    PARENTS
                  </Typography>
                </Fade>
              </Box>

              <Box
                sx={{
                  marginTop: "10%",
                }}
              >
                <Fade direction="up">
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      lineHeight: "18px",
                      textAlign: "center",
                      color: "#000000",
                    }}
                  >
                    Your Baby's
                    <br /> #EkSahiShuruat <br />
                    Starts Here:
                  </Typography>
                </Fade>
              </Box>

              <Box
                sx={{
                  marginTop: "10%",
                }}
              >
                <Fade direction="up">
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      lineHeight: "18px",
                      textAlign: "center",
                      color: "#000000",
                    }}
                  >
                    Newborn Screening for <br /> Expecting Parents
                  </Typography>
                </Fade>
              </Box>

              <Fade direction="up">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10%",
                  }}
                >
                  <Box
                    sx={{
                      width: "37px",
                      height: "3px",
                      borderRadius: "3px",
                      backgroundColor: "#0BAEB2",
                    }}
                  ></Box>
                </Box>
              </Fade>
            </Box>
          </Box>
          {/* 2 */}
          <Box
            sx={{
              width: "100%",
              marginTop: "20%",
              // marginBottom: "20%",
            }}
          >
            <Box>
            <Fade direction="down">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                  letterSpacing: "1%",
                  color: "#0BAEB2",
                  // marginTop: "15%",
                }}
              >
                FOR DOCTORS
              </Typography>
              </Fade>
            </Box>

            <Box
              sx={{
                marginTop: "10%",
              }}
            >
            <Fade direction="down">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                #EkSahiShuruat
                <br />
                for Neonatal Health
                <br />
                Newborn Screening:
              </Typography>
              </Fade>
            </Box>

            <Box
              sx={{
                marginTop: "10%",
              }}
            >
            <Fade direction="down">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                A Scope for Optimal Newborn <br />
                Healthcare
              </Typography>
              </Fade>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={10} lg={10}>
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
            <Fade direction="left">
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
            </Fade>

            <Fade direction="right">
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
            </Fade>
            <Fade direction="up">
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
            </Fade>

            <Fade direction="left">
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
                With #EkSahiShuruat, we're committed to safeguarding the health
                of every newborn <br /> right from the beginning, setting the
                foundation for a thriving life.
              </Typography>
            </Fade>

            <Fade direction="right">
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
            </Fade>

            <Fade direction="left">
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
                Ensure the journey begins with a healthy start for your Little
                One Every parent's dream ,<br /> is to bring their child into
                the world healthy and strong, - a simple yet crucial step in{" "}
                <br />
                securing your baby's health and future.
              </Typography>
            </Fade>

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
              <Fade direction="left">
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
              </Fade>

              <Fade direction="left">
                <Box
                  sx={{
                    height: "1px",
                    width: "170px",
                    backgroundColor: "#FFFFFF",
                    marginLeft: "13px",
                  }}
                ></Box>
              </Fade>

              <Bounce>
                <Box
                  component="img"
                  sx={{
                    height: "9px",
                    width: "9px",
                    cursor: "pointer",
                    marginLeft: "-7px",
                  }}
                  alt="The house from the offer."
                  src={whiteArrow}
                />
              </Bounce>

              <Fade direction="right">
                <Box
                  sx={{
                    height: "46px",
                    width: "46px",
                    border: "1px solid white",
                    borderRadius: "100px",
                    marginLeft: "-25px",
                  }}
                ></Box>
              </Fade>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>,
    // 2
    <Grid container sx={{ backgroundColor: "white" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        sx={{
          border: "2px solid #0BAEB2",
        }}
      >
        <Box>
          {/* 1 */}
          <Box
            sx={{
              borderBottom: "2px solid #0BAEB2",
            }}
          >
            <Box
              sx={{
                marginTop: "15%",
                marginBottom: "8%",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "21px",
                    textAlign: "center",
                    color: "#0BAEB2",
                  }}
                >
                  FOR EXPECTING
                  <br />
                  PARENTS
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    fontSize: "12px",
                    lineHeight: "18px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  Your Baby's
                  <br /> #EkSahiShuruat <br />
                  Starts Here:
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "10%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    fontSize: "12px",
                    lineHeight: "18px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  Newborn Screening for <br /> Expecting Parents
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10%",
                }}
              >
                <Box
                  sx={{
                    width: "37px",
                    height: "3px",
                    borderRadius: "3px",
                    backgroundColor: "#0BAEB2",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          {/* 2 */}
          <Box
            sx={{
              width: "100%",
              marginTop: "20%",
              // marginBottom: "20%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                  letterSpacing: "1%",
                  color: "#0BAEB2",
                  // marginTop: "15%",
                }}
              >
                FOR DOCTORS
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                #EkSahiShuruat
                <br />
                for Neonatal Health
                <br />
                Newborn Screening:
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                A Scope for Optimal Newborn <br />
                Healthcare
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={10}>
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
                  marginLeft: "-5px",
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
      </Grid>
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
      <Grid container sx={{ position: "absolute", marginTop: "-72px" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Fade direction="bottom-left" triggerOnce="true">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItms: "center",
              marginLeft: "60px",
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
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default Eksahishuruaat;
