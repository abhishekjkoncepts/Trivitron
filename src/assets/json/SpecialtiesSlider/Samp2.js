import specialties1 from "../../images/Specialties/Specialties1.png";
import specialties2 from "../../images/Specialties/Specialties2.png";
import specialties3 from "../../images/Specialties/Specialties3.png";
import specialties4 from "../../images/Specialties/Specialties4.gif";
import relationshipImage from "../../images/RelationShip/RelationshipImage.png";

import { Grid, Box, Typography } from "@mui/material";

export const Samp2 = [
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Box sx={{ height: "400px", width: "100%", backgroundColor: "orange" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Hello1</Typography>
        </Box>
        <Box
          component="img"
          src={relationshipImage}
          sx={{
            height: "200px",
            width: "300px",
          }}
        />
      </Box>
    </Box>
  </Grid>,
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Box sx={{ height: "400px", width: "100%", backgroundColor: "green" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
        <Box>
          <Typography>Hello2</Typography>
        </Box>
        <Box
          component="img"
          src={specialties1}
          sx={{
            height: "200px",
            width: "300px",
          }}
        />
      </Box>
    </Box>
  </Grid>,
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Box sx={{ height: "400px", width: "100%", backgroundColor: "blue" }}>
      <Box sx={{ display: "flex", flexDirection: "row",  justifyContent: "space-between", }}>
        <Box>
          <Typography>Hello3</Typography>
        </Box>
        <Box
          component="img"
          src={specialties2}
          sx={{
            height: "200px",
            width: "300px",
          }}
        />
      </Box>
    </Box>
  </Grid>,
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Box sx={{ height: "400px", width: "100%", backgroundColor: "red" }}>
      <Box sx={{ display: "flex", flexDirection: "row" , justifyContent: "space-between", }}>
        <Box>
          <Typography>Hello4</Typography>
        </Box>
        <Box
          component="img"
          src={specialties3}
          sx={{
            height: "200px",
            width: "300px",
          }}
        />
      </Box>
    </Box>
  </Grid>,
];
