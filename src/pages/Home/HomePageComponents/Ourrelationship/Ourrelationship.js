// import React, { useState } from "react";
// import "./Ourrelationship.css";
// import { Grid, Box, Typography } from "@mui/material";

// import sample1 from "../../../../assets/images/RelationShip/sample1.0.png";
// import sample2 from "../../../../assets/images/RelationShip/sample1.1.png";
// import sample3 from "../../../../assets/images/RelationShip/Sample1.2.png";
// import reltionship from "../../../../assets/images/RelationShip/RelationshipImage.png";
// import leftArrow from "../../../../assets/images/left-arrow.png";
// import rightArrow from "../../../../assets/images/right-arrow.png";

// const Ourrelationship = () => {
//   // images
//   const slidy = [
//     // 1
//     <Grid container sx={{}}>
//       <Grid xs={12} sm={12} md={6} lg={6} sx={{ backgroundColor: "red" }}>
//         {/* <Box
//           sx={{
//             marginLeft:"35px",
//             marginTop:"20px",
//           }}
//         >
//             <Box sx={{ display:"flex",  flexDirection:"column",}}>
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

//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                   textAlign: "left",
//                 }}
//               >
//                 OUR RELATIONSHIP
//               </Typography>
//         </Box>
//         </Box> */}

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "green",
//             flexDirection:"column"
//           }}
//         >
//           <Box sx={{ display:"flex",  flexDirection:"column",}}>
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

//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "300",
//                   fontSize: "22px",
//                   lineHeight: "33px",
//                   letterSpacing: "8%",
//                   color: "#0BAEB2",
//                   textAlign: "left",
//                 }}
//               >
//                 OUR RELATIONSHIP
//               </Typography>
//         </Box>
//           <Box
//             sx={{
//               width: "90%",
//               marginTop:"20px",
//               marginBottom:"40px",
//               // backgroundColor:"red",
//               height:"100%"
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "300",
//                 fontSize: "24px",
//                 lineHeight: "36px",
//                 letterSpacing: "8%",
//                 color: "#6B6666",
//                 // marginTop: "30px",
//                 marginBottom: "0px",
//               }}
//             >
//               An inclusive culture is a pre-requisite if we aspire <br /> to
//               serve{" "}
//               <span
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   lineHeight: "36px",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 the eight billion people
//               </span>{" "}
//               on our planet. <br />
//               As a diverse organization, we can better relate to the people –
//               whether customers or patients <br />– their communities and the
//               specific <br />
//               challenges they face.
//               <span
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   lineHeight: "36px",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 {"  "}Diversity, equity, and inclusion
//               </span>{" "}
//               are therefore important aspects of <br />
//               our wider{" "}
//               <span
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   lineHeight: "36px",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#0BAEB2",
//                 }}
//               >
//                 responsibilities.
//               </span>
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>

//       <Grid
//         xs={12}
//         sm={12}
//         md={6}
//         lg={6}
//         // sx={{ backgroundColor: "green" }}
//       >
//         <Box
//           component="img"
//           sx={{
//             height: "100%",
//             width: "100%",
//           }}
//           src={reltionship}
//         />
//       </Grid>
//     </Grid>,
//     // 2

//     // 3

//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slidy.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slidy.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <Grid
//         container
//         //  sx={{ backgroundColor: "yellow" }}
//       >
//         {slidy[currentIndex]}
//       </Grid>

//       {/* buttons */}
//       <Box
//         sx={{
//           position: "absolute",
//           marginTop: "-40px",
//           width: "122px",
//           height: "32px",
//           // backgroundColor: "black",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginLeft: "35px",
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
//             onClick={prevSlide}
//           ></Box>
//           <Box
//             src={leftArrow}
//             component="img"
//             sx={{
//               width: "6px",
//               height: "9px",
//               marginLeft: "-20px",
//             }}
//             onClick={prevSlide}
//           />
//           <Box
//             sx={{
//               height: "1px",
//               width: "34px",
//               backgroundColor: "#0BAEB2",
//               marginLeft: "-5px",
//             }}
//             onClick={prevSlide}
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
//             onClick={nextSlide}
//           ></Box>
//         </Box>
//       </Box>

//       {/* <Typography
//           sx={{
//             fontSize: "16px",
//             fontWeight: "500",
//             fontFamily: "Poppins, sans-serif",
//             color: "#0BAEB2",
//             marginTop: "10px",
//             textAlign: "center",
//           }}
//         >
//           {currentIndex + 1} / {slidy.length}
//         </Typography> */}
//       {/* <div>
//           <button onClick={prevSlide}>Previous</button>
//           <button onClick={nextSlide}>Next</button>
//         </div> */}
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
    // 1
    <Grid container>
      <Grid
        xs={12}
        sm={12}
        md={6.5}
        lg={6.5}
        sx={{
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "75%",
            // backgroundColor: "green",
            marginTop: "-25px",
          }}
        >
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

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "22px",
              lineHeight: "33px",
              letterSpacing: "8%",
              color: "#0BAEB2",
              textAlign: "left",
            }}
          >
            OUR RELATIONSHIP
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "8%",
              color: "#6B6666",
              marginTop: "20px",
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
              {"  "}Diversity, equity, and inclusion
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
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={5.5}
        lg={5.5}
        // sx={{ backgroundColor: "green" }}
      >
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }}
          src={reltionship}
        />
      </Grid>
    </Grid>,
    // 2
    <Grid container>
    <Grid
      xs={12}
      sm={12}
      md={6.5}
      lg={6.5}
      sx={{
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "75%",
          // backgroundColor: "green",
          marginTop: "-25px",
        }}
      >
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

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: "22px",
            lineHeight: "33px",
            letterSpacing: "8%",
            color: "#0BAEB2",
            textAlign: "left",
          }}
        >
          OUR RELATIONSHIP
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "36px",
            letterSpacing: "8%",
            color: "#6B6666",
            marginTop: "20px",
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
            {"  "}Diversity, equity, and inclusion
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
    </Grid>

    <Grid
      xs={12}
      sm={12}
      md={5.5}
      lg={5.5}
      // sx={{ backgroundColor: "green" }}
    >
      <Box
        component="img"
        sx={{
          height: "100%",
          width: "100%",
        }}
        src={sample1}
      />
    </Grid>
  </Grid>,
    // 3
    <Grid container>
    <Grid
      xs={12}
      sm={12}
      md={6.5}
      lg={6.5}
      sx={{
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "75%",
          // backgroundColor: "green",
          marginTop: "-25px",
        }}
      >
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

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: "22px",
            lineHeight: "33px",
            letterSpacing: "8%",
            color: "#0BAEB2",
            textAlign: "left",
          }}
        >
          OUR RELATIONSHIP
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "36px",
            letterSpacing: "8%",
            color: "#6B6666",
            marginTop: "20px",
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
            {"  "}Diversity, equity, and inclusion
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
    </Grid>

    <Grid
      xs={12}
      sm={12}
      md={5.5}
      lg={5.5}
      // sx={{ backgroundColor: "green" }}
      
    >
      <Box
        component="img"
        sx={{
          height:{
            xs:"100%",
            sm:"100%",
            md:"100%",
            lg:"100%",
            xl:"80%"
          },
          width: "100%",
        }}
        src={sample2}
      />
    </Grid>
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
      <Grid container
        //  sx={{ backgroundColor: "yellow" }}
      >
        {slidy[currentIndex]}
      </Grid>

      {/* buttons */}
      <Grid
        container
        //  sx={{backgroundColor:"orange"}}
      >
        <Box
          sx={{
            marginTop: "-40px",
            width: "122px",
            height: "32px",
            // backgroundColor: "yellow",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "35px",
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
      </Grid>
    </>
  );
};

export default Ourrelationship;
