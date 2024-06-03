import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import neuron from "../../../../assets/images/Strategy/neuron.png";
import whiteArrow from "../../../../assets/images/right-arrow-white.png";

import "./Strategy.css";

const Strategy = () => {
  return (
    <>
      <Grid container>
        <Grid item x={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={neuron}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  // backgroundColor: "orange",
                  marginTop:"-40px",
                  position: "absolute",
                  width: "90%",
                  height: "390px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
               <Box sx={{display:"flex" , flexDirection:"column"}}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "300",
                    lineHeight: "33px",
                    letterSpacing: "8%",
                    textAlign: "left",
                    fontFamily: "Poppins, sans-serif",
                    color: "#0BAEB2",
                  }}
                >
                  OUR STRATEGY
                </Typography>
              
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* Lines */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {/* line 1 */}
                    <Box
                      sx={{
                        height: "160px",
                        width: "1px",
                        backgroundColor: "#FFFFFF",
                      }}
                    ></Box>

                    {/* ball and arrow*/}
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        marginTop: "30px",
                        marginBottom: "30px",
                      }}
                    ></Box>

                    {/* line 2 */}
                    <Box
                      sx={{
                        height: "160px",
                        width: "1px",
                        backgroundColor: "#FFFFFF",
                      }}
                    ></Box>
                  </Box>

                  {/* white arrow */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "10px",
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
                        sx={{
                          width: "29px",
                          height: "1.5px",
                          backgroundColor: "#fff",
                        }}
                      ></Box>

                      <Box sx={{ marginLeft: "-7.5px" }}>
                        <Box
                          component="img"
                          src={whiteArrow}
                          sx={{
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      marginLeft: "20px",
                    }}
                  >
                    {/* 1 */}
                    <Box
                      sx={{
                        marginTop: "70px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "300",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "275",
                          lineHeight: "25.5px",
                          letterSpacing: "3%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        ENABLING EFFICIENT <br />
                        OPERATIONS
                      </Typography>
                    </Box>

                    {/* 2 */}
                    <Box
                      sx={{
                        marginTop: "40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "19px",
                          fontWeight: "700",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        02
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "700",
                          lineHeight: "25.5px",
                          letterSpacing: "3%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        OVERCOMING THE
                        <br />
                        MOST THREATNING DISEASE
                      </Typography>
                    </Box>

                    {/* 3 */}
                    <Box
                      sx={{
                        marginTop: "65px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "300",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        03
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "275",
                          lineHeight: "25.5px",
                          letterSpacing: "3%",
                          textAlign: "left",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        EXPANDING
                        <br />
                        ACCESS TO CARE
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                </Box>
                {/* -------------------------------- */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{}}>
                    {/* 1 */}
                    <Box
                      sx={{
                        marginTop: "70px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "25px",
                          fontWeight: "700",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "right",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        02
                      </Typography>

                      <Box sx={{ marginTop: "5px" }}>
                        <Typography
                          sx={{
                            fontSize: "22px",
                            fontWeight: "300",
                            lineHeight: "33px",
                            letterSpacing: "8%",
                            textAlign: "right",
                            fontFamily: "Poppins, sans-serif",
                            color: "white",
                          }}
                        >
                          OVERCOMING THE MOST THREATENING DISEASES
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "right",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        Our ambition is to leverage our strong core in imaging
                        and <br />
                        robotics to expand our relevance in cardiovascular and
                        neurovascular care.
                      </Typography>
                    </Box>

                    {/* 3 */}
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "300",
                          lineHeight: "22.5px",
                          letterSpacing: "4%",
                          textAlign: "right",
                          fontFamily: "Poppins, sans-serif",
                          color: "white",
                        }}
                      >
                        And building on our oncology leadership by expanding
                        along <br />
                        the diagnostic and therapeutic disease pathway.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        marginTop: "40px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
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
                        Discover more
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
                          marginLeft:"-5px"
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Strategy;
