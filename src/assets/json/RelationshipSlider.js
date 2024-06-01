import reltionship from "../../assets/images/RelationShip/RelationshipImage.png";
import sample1 from "../../assets/images/RelationShip/sample1.0.png";
import sample2 from "../../assets/images/RelationShip/sample1.1.png";
import sample3 from "../../assets/images/RelationShip/Sample1.2.png";

import { Grid, Box, Typography } from "@mui/material";

export const relationSlider = [
  <Grid
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
    // sx={{ backgroundColor: "red" }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Text */}
      <Box
        sx={{
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {/* No */}
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              color: "#0BAEB2",
              letterSpacing: "4%",
              lineHeight: "19.5px",
              textAlign: "left",
            }}
          >
            01
          </Typography>
        </Box>
        {/* title */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "22px",
              lineHeight: "33px",
              letterSpacing: "8%",
              color: "#0BAEB2",
            }}
          >
            OUR RELATIONSHIP
          </Typography>
        </Box>
        {/* Description */}
        <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "8%",
              color: "#6B6666",
            }}
          >
            An inclusive culture is a pre-requisite if we aspire to serve{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              the eight billion people
            </span>{" "}
            on our planet. <br />
            As a diverse organization, we can better relate to the people –
            whether customers or patients <br />– their communities and the
            specific <br />
            challenges they face.
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              Diversity, equity, and inclusion
            </span>{" "}
            are therefore important aspects of <br />
            our wider{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              responsibilities.
            </span>
          </Typography>
        </Box>
      </Box>

      {/* image */}
      <Box
        component="img"
        sx={{
          height: "450px",
          width: "450px",
          // width: "720px",
        }}
        src={reltionship}
      />
    </Box>
  </Grid>,

    <Grid
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
    // sx={{ backgroundColor: "red" }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Text */}
      <Box
        sx={{
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {/* No */}
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              color: "#0BAEB2",
              letterSpacing: "4%",
              lineHeight: "19.5px",
              textAlign: "left",
            }}
          >
            0
          </Typography>
        </Box>
        {/* title */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "22px",
              lineHeight: "33px",
              letterSpacing: "8%",
              color: "#0BAEB2",
            }}
          >
            OUR RELATIONSHIP 0
          </Typography>
        </Box>
        {/* Description */}
        <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "8%",
              color: "#6B6666",
            }}
          >
            An inclusive culture is a pre-requisite if we aspire to serve{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              the eight billion people
            </span>{" "}
            on our planet. <br />
            As a diverse organization, we can better relate to the people –
            whether customers or patients <br />– their communities and the
            specific <br />
            challenges they face.
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              Diversity, equity, and inclusion
            </span>{" "}
            are therefore important aspects of <br />
            our wider{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              responsibilities.
            </span>
          </Typography>
        </Box>
      </Box>

      {/* image */}
      <Box
        component="img"
        sx={{
          // height: "10%",
          height: "450px",
          width: "450px",
          // width: "720px",
        }}
        alt="relationship image"
        src={sample1}
      />
    </Box>
  </Grid>,

    <Grid
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
    // sx={{ backgroundColor: "red" }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Text */}
      <Box
        sx={{
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {/* No */}
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              color: "#0BAEB2",
              letterSpacing: "4%",
              lineHeight: "19.5px",
              textAlign: "left",
            }}
          >
            02
          </Typography>
        </Box>
        {/* title */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "22px",
              lineHeight: "33px",
              letterSpacing: "8%",
              color: "#0BAEB2",
            }}
          >
            OUR RELATIONSHIP 2
          </Typography>
        </Box>
        {/* Description */}
        <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "8%",
              color: "#6B6666",
            }}
          >
            An inclusive culture is a pre-requisite if we aspire to serve{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              the eight billion people
            </span>{" "}
            on our planet. <br />
            As a diverse organization, we can better relate to the people –
            whether customers or patients <br />– their communities and the
            specific <br />
            challenges they face.
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              Diversity, equity, and inclusion
            </span>{" "}
            are therefore important aspects of <br />
            our wider{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              responsibilities.
            </span>
          </Typography>
        </Box>
      </Box>

      {/* image */}
      <Box
        component="img"
        sx={{
          // height: "10%",
          height: "450px",
          width: "450px",
          // width: "720px",
        }}
        alt="relationship image"
        src={sample2}
      />
    </Box>
  </Grid>,

    <Grid
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
    // sx={{ backgroundColor: "red" }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* Text */}
      <Box
        sx={{
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {/* No */}
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              color: "#0BAEB2",
              letterSpacing: "4%",
              lineHeight: "19.5px",
              textAlign: "left",
            }}
          >
            0
          </Typography>
        </Box>
        {/* title */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "22px",
              lineHeight: "33px",
              letterSpacing: "8%",
              color: "#0BAEB2",
            }}
          >
            OUR RELATIONSHIP 3
          </Typography>
        </Box>
        {/* Description */}
        <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "8%",
              color: "#6B6666",
            }}
          >
            An inclusive culture is a pre-requisite if we aspire to serve{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              the eight billion people
            </span>{" "}
            on our planet. <br />
            As a diverse organization, we can better relate to the people –
            whether customers or patients <br />– their communities and the
            specific <br />
            challenges they face.
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              Diversity, equity, and inclusion
            </span>{" "}
            are therefore important aspects of <br />
            our wider{" "}
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                fontFamily: "Poppins, sans-serif",
                color: "#0BAEB2",
              }}
            >
              responsibilities.
            </span>
          </Typography>
        </Box>
      </Box>

      {/* image */}
      <Box
        component="img"
        sx={{
          // height: "10%",
          height: "450px",
          width: "450px",
          // width: "720px",
        }}
        alt="relationship image"
        src={sample3}
      />
    </Box>
  </Grid>,
];
