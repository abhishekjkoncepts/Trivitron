
// import React, { useState } from "react";
// import "./Ourrelationship.css";
// import { Grid, Box, Typography } from "@mui/material";
// import relationshipImage from "../../../../assets/images/RelationShip/RelationshipImage.png";

// import { relationSlider } from "../../../../assets/json/RelationshipSlider";

// import leftArrow from "../../../../assets/images/left-arrow.png";
// import rightArrow from "../../../../assets/images/right-arrow.png";

// const Ourrelationship = () => {
//   const [value, setValue] = useState(0);

//   const next = () => {
//     setValue(value + 1);
//   };
//   const prev = () => {
//     setValue(value - 1);
//   };  
//   return (
//     <>
//       <Grid
//         container
//         //  sx={{ backgroundColor: "yellow" }}
//       >
//         {relationSlider[value]}
//       </Grid>

      
//       {/* buttons */}
//       <Box
//         sx={{
//           position: "absolute",
//           marginTop: "-60px",
//           width: "122px",
//           height: "32px",
//           // backgroundColor: "black",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginLeft: "30px",
//         }}
//       >
//         {/* left arrow */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             sx={{
//               width: "32px",
//               height: "32px",
//               border: "1px solid #0BAEB2",
//               borderRadius: "100px",
//             }}
//             onClick={() => {
//               setValue(prev);
//             }}
//           ></Box>
//           <Box
//             src={leftArrow}
//             component="img"
//             sx={{
//               width: "6px",
//               height: "9px",
//               marginLeft: "-20px",
//             }}
//             onClick={() => {
//               setValue(prev);
//             }}
//           />
//           <Box
//             sx={{
//               height: "1px",
//               width: "34px",
//               backgroundColor: "#0BAEB2",
//               marginLeft: "-5px",
//             }}
//             onClick={() => {
//               setValue(prev);
//             }}
//           ></Box>
//         </Box>

//         {/* right arrow */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             sx={{
//               height: "1px",
//               width: "34px",
//               backgroundColor: "#0BAEB2",
//               marginRight: "-5px",
//             }}
//           ></Box>
//           <Box
//             src={rightArrow}
//             component="img"
//             sx={{
//               width: "6px",
//               height: "9px",
//               marginRight: "-20px",
//             }}
//           />
//           <Box
//             sx={{
//               width: "32px",
//               height: "32px",
//               border: "1px solid #0BAEB2",
//               borderRadius: "100px",
//             }}
//             onClick={() => {
//               setValue(next);
//             }}
//           ></Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Ourrelationship;



// import React, { useState } from "react";
// import "./Ourrelationship.css";
// import { Grid, Box, Typography } from "@mui/material";

// import sample1 from "../../../../assets/images/RelationShip/sample1.0.png";
// import sample2 from "../../../../assets/images/RelationShip/sample1.1.png";
// import sample3 from "../../../../assets/images/RelationShip/Sample1.2.png";
// import reltionship from "../../../../assets/images/RelationShip/RelationshipImage.png";

// const Ourrelationship = () => {
//     // images
//     const slidy = [
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         // sx={{ backgroundColor: "red" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Text */}
//           <Box
//             sx={{
//               // alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               marginLeft: "30px",
//               marginRight: "30px",
//             }}
//           >
//             {/* No */}
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                   letterSpacing: "4%",
//                   lineHeight: "19.5px",
//                   textAlign: "left",
//                 }}
//               >
//                 01
//               </Typography>
//             </Box>
//             {/* title */}
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 OUR RELATIONSHIP
//               </Typography>
//             </Box>
//             {/* Description */}
//             <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "24px",
//                   lineHeight: "36px",
//                   letterSpacing: "8%",
//                   color: "#6B6666",
//                 }}
//               >
//                 An inclusive culture is a pre-requisite if we aspire to serve{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   the eight billion people
//                 </span>{" "}
//                 on our planet. <br />
//                 As a diverse organization, we can better relate to the people –
//                 whether customers or patients <br />– their communities and the
//                 specific <br />
//                 challenges they face.
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   Diversity, equity, and inclusion
//                 </span>{" "}
//                 are therefore important aspects of <br />
//                 our wider{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   responsibilities.
//                 </span>
//               </Typography>
//             </Box>
//           </Box>
  
//           {/* image */}
//           <Box
//             component="img"
//             sx={{
//               height: "450px",
//               width: "450px",
//               // width: "720px",
//             }}
//             src={reltionship}
//           />
//         </Box>
//       </Grid>,
  
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         // sx={{ backgroundColor: "red" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Text */}
//           <Box
//             sx={{
//               // alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               marginLeft: "30px",
//               marginRight: "30px",
//             }}
//           >
//             {/* No */}
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                   letterSpacing: "4%",
//                   lineHeight: "19.5px",
//                   textAlign: "left",
//                 }}
//               >
//                 0
//               </Typography>
//             </Box>
//             {/* title */}
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 OUR RELATIONSHIP 0
//               </Typography>
//             </Box>
//             {/* Description */}
//             <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "24px",
//                   lineHeight: "36px",
//                   letterSpacing: "8%",
//                   color: "#6B6666",
//                 }}
//               >
//                 An inclusive culture is a pre-requisite if we aspire to serve{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   the eight billion people
//                 </span>{" "}
//                 on our planet. <br />
//                 As a diverse organization, we can better relate to the people –
//                 whether customers or patients <br />– their communities and the
//                 specific <br />
//                 challenges they face.
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   Diversity, equity, and inclusion
//                 </span>{" "}
//                 are therefore important aspects of <br />
//                 our wider{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   responsibilities.
//                 </span>
//               </Typography>
//             </Box>
//           </Box>
  
//           {/* image */}
//           <Box
//             component="img"
//             sx={{
//               // height: "10%",
//               height: "450px",
//               width: "450px",
//               // width: "720px",
//             }}
//             alt="relationship image"
//             src={sample1}
//           />
//         </Box>
//       </Grid>,
  
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         // sx={{ backgroundColor: "red" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Text */}
//           <Box
//             sx={{
//               // alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               marginLeft: "30px",
//               marginRight: "30px",
//             }}
//           >
//             {/* No */}
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                   letterSpacing: "4%",
//                   lineHeight: "19.5px",
//                   textAlign: "left",
//                 }}
//               >
//                 02
//               </Typography>
//             </Box>
//             {/* title */}
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 OUR RELATIONSHIP 2
//               </Typography>
//             </Box>
//             {/* Description */}
//             <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "24px",
//                   lineHeight: "36px",
//                   letterSpacing: "8%",
//                   color: "#6B6666",
//                 }}
//               >
//                 An inclusive culture is a pre-requisite if we aspire to serve{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   the eight billion people
//                 </span>{" "}
//                 on our planet. <br />
//                 As a diverse organization, we can better relate to the people –
//                 whether customers or patients <br />– their communities and the
//                 specific <br />
//                 challenges they face.
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   Diversity, equity, and inclusion
//                 </span>{" "}
//                 are therefore important aspects of <br />
//                 our wider{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   responsibilities.
//                 </span>
//               </Typography>
//             </Box>
//           </Box>
  
//           {/* image */}
//           <Box
//             component="img"
//             sx={{
//               // height: "10%",
//               height: "450px",
//               width: "450px",
//               // width: "720px",
//             }}
//             alt="relationship image"
//             src={sample2}
//           />
//         </Box>
//       </Grid>,
  
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         // sx={{ backgroundColor: "red" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Text */}
//           <Box
//             sx={{
//               // alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               marginLeft: "30px",
//               marginRight: "30px",
//             }}
//           >
//             {/* No */}
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "13px",
//                   fontWeight: "700",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                   letterSpacing: "4%",
//                   lineHeight: "19.5px",
//                   textAlign: "left",
//                 }}
//               >
//                 0
//               </Typography>
//             </Box>
//             {/* title */}
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 OUR RELATIONSHIP 3
//               </Typography>
//             </Box>
//             {/* Description */}
//             <Box sx={{ width: "606px", height: "317px", marginTop: "0px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "24px",
//                   lineHeight: "36px",
//                   letterSpacing: "8%",
//                   color: "#6B6666",
//                 }}
//               >
//                 An inclusive culture is a pre-requisite if we aspire to serve{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   the eight billion people
//                 </span>{" "}
//                 on our planet. <br />
//                 As a diverse organization, we can better relate to the people –
//                 whether customers or patients <br />– their communities and the
//                 specific <br />
//                 challenges they face.
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   Diversity, equity, and inclusion
//                 </span>{" "}
//                 are therefore important aspects of <br />
//                 our wider{" "}
//                 <span
//                   style={{
//                     fontSize: "24px",
//                     fontWeight: "700",
//                     lineHeight: "36px",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#0BAEB2",
//                   }}
//                 >
//                   responsibilities.
//                 </span>
//               </Typography>
//             </Box>
//           </Box>
  
//           {/* image */}
//           <Box
//             component="img"
//             sx={{
//               // height: "10%",
//               height: "450px",
//               width: "450px",
//               // width: "720px",
//             }}
//             alt="relationship image"
//             src={sample3}
//           />
//         </Box>
//       </Grid>,
//     ];
    
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slidy.length);
//     };
  
//     const prevSlide = () => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? slidy.length - 1 : prevIndex - 1
//       );
//     };
//   return (
//     <>
//       <Grid
//         container
//         //  sx={{ backgroundColor: "yellow" }}
//       >
//         {slidy[currentIndex]}
//       </Grid>

//       <div>
//         <button onClick={prevSlide}>Previous</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//     </>
//   );
// };

// export default Ourrelationship;

import React, { useState } from "react";
import "./Ourrelationship.css";
import { Grid, Box, Typography } from "@mui/material";

import sample1 from "../../../../assets/images/RelationShip/sample1.0.png";
import sample2 from "../../../../assets/images/RelationShip/sample1.1.png";
import sample3 from "../../../../assets/images/RelationShip/Sample1.2.png";
import reltionship from "../../../../assets/images/RelationShip/RelationshipImage.png";
import leftArrow from "../../../../assets/images/left-arrow.png";
import rightArrow from "../../../../assets/images/right-arrow.png";

const Ourrelationship = () => {
    // images
    const slidy = [
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
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidy.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slidy.length - 1 : prevIndex - 1
      );
    };

    return (
      <>
        <Grid
          container
          //  sx={{ backgroundColor: "yellow" }}
        >
          {slidy[currentIndex]}
        </Grid>

   
         {/* buttons */}
      <Box
        sx={{
          position: "absolute",
          marginTop: "-60px",
          width: "122px",
          height: "32px",
          // backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "30px",
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
            sx={{
              width: "32px",
              height: "32px",
              border: "1px solid #0BAEB2",
              borderRadius: "100px",
            }}
            onClick={prevSlide}
          ></Box>
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
              width: "34px",
              backgroundColor: "#0BAEB2",
              marginLeft: "-5px",
            }}
            onClick={prevSlide}
          ></Box>
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
              width: "34px",
              backgroundColor: "#0BAEB2",
              marginRight: "-5px",
            }}
          ></Box>
          <Box
            src={rightArrow}
            component="img"
            sx={{
              width: "6px",
              height: "9px",
              marginRight: "-20px",
            }}
          />
          <Box
            sx={{
              width: "32px",
              height: "32px",
              border: "1px solid #0BAEB2",
              borderRadius: "100px",
            }}
            onClick={nextSlide}
          ></Box>
        </Box>
      </Box>

        {/* <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Poppins, sans-serif",
            color: "#0BAEB2",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {currentIndex + 1} / {slidy.length}
        </Typography> */}
        {/* <div>
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div> */}
      </>
    );
};

export default Ourrelationship;


