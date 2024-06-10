// import React, { useState } from 'react';
// import './MegaMenu.css'; // Stylesheet for MegaMenu

// const MegaMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="menu-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <span className="menu-text" onClick={handleMenuToggle}>
//         Hover Here
//       </span>
//       {isHovered && (
//         <div className={`mega-menu ${isMenuOpen ? 'open' : ''}`}>
//           {/* Content for your mega menu */}
//           <ul>
//             <li style={{cursor:"pointer"}}>
//             Menu Item 1
//             </li>
//             <li>Menu Item 2</li>
//             <li>Menu Item 3</li>
//             {/* Add more menu items as needed */}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MegaMenu;

// import React, { useState } from "react";
// import "./MegaMenu.css"; // Stylesheet for MegaMenu

// import { Box, Grid, Typography } from "@mui/material";

// const MegaMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Box
//       className="menu-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Typography sx={{ backgroundColor: "yellow" }} onClick={handleMenuToggle}>
//         Hover Here
//       </Typography>
//       {isHovered && (
//         <Grid
//           container
//           className={`mega-menu ${isMenuOpen ? "open" : ""}`}
//           sx={{ backgroundColor: "red"}}
//         >
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <Typography>Menu Item 3</Typography>
//             <Typography>Menu Item 3</Typography>
//             <Typography>Menu Item 3</Typography>
//             <Typography>Menu Item 3</Typography>
//             <Typography>Menu Item 3</Typography>
//             <Typography>Menu Item 3</Typography>
//           </Box>
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default MegaMenu;

// src/MegaMenu.js

// import React, { useState } from "react";
// import "./MegaMenu.css";
// import { Grid, Box, Typography } from "@mui/material";

// const MegaMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           width: "600px",
//         }}
//       >
//         {/* 1 */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: "600px",
//           }}
//         >
//           <Box sx={{ position: "relative", backgroundColor: "yellow" }}>
//             <Box
//               onMouseEnter={() => setIsOpen(true)}
//               onMouseLeave={() => !isOpen && setIsOpen(false)}
//             >
//               Typography
//             </Box>
//             {isOpen && (
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: "100vw",
//                   backgroundColor: "green",
//                   zIndex: "1000",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//                 onMouseEnter={() => setIsOpen(true)}
//                 onMouseLeave={() => setIsOpen(false)}
//               >
//                 <Box>
//                   <h2>Mega Menu</h2>
//                   <p>Here you can put all your menu items, images, and more.</p>
//                   <h2>Mega Menu</h2>
//                   <p>Here you can put all your menu items, images, and more.</p>
//                   <h2>Mega Menu</h2>
//                   <p>Here you can put all your menu items, images, and more.</p>
//                   <h2>Mega Menu</h2>
//                   <p>Here you can put all your menu items, images, and more.</p>
//                 </Box>
//               </Box>
//             )}
//           </Box>
//         </Box>

//         {/* 2 */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: "600px",
//           }}
//         >
//           <Box sx={{ position: "relative", backgroundColor: "orange" }}>
//             <Box
//               onMouseEnter={() => setIsOpen2(true)}
//               onMouseLeave={() => !isOpen2 && setIsOpen2(false)}
//             >
//               Typography
//             </Box>
//             {isOpen2 && (
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: "100vw",
//                   backgroundColor: "red",
//                   zIndex: "1000",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//                 onMouseEnter={() => setIsOpen2(true)}
//                 onMouseLeave={() => setIsOpen2(false)}
//               >
//                 <Box>
//                   <h2>Mega </h2>
//                   <p>Here</p>
//                   <h2>Mega </h2>
//                   <p>Here</p>
//                   <h2>Mega </h2>
//                   <p>Here</p>
//                   <h2>Mega </h2>
//                   <p>Here</p>
//                   <h2>Mega </h2>
//                   <p>Here</p>

//                 </Box>
//               </Box>
//             )}
//           </Box>
//         </Box>

//       </Box>
//     </>
//   );
// };

// export default MegaMenu;

// import React, { useState, useRef } from 'react';
// import { Box, Typography } from '@mui/material';

// const MegaMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const timeoutRef = useRef(null);

//   const handleMouseEnterTypography = () => {
//     clearTimeout(timeoutRef.current);
//     setIsOpen(true);
//   };

//   const handleMouseLeaveTypography = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsOpen(false);
//     }, 100);
//   };

//   const handleMouseEnterMegaMenu = () => {
//     clearTimeout(timeoutRef.current);
//   };

//   const handleMouseLeaveMegaMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         position: 'relative',
//         py: 2,
//       }}
//     >
//       <Typography
//         variant="h6"
//         onMouseEnter={handleMouseEnterTypography}
//         onMouseLeave={handleMouseLeaveTypography}
//         sx={{
//           cursor: 'pointer',
//           backgroundColor: '#333',
//           color: 'white',
//           p: 2,
//         }}
//       >
//         Typography
//       </Typography>
//       {isOpen && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '100%',
//             left: 0,
//             width: '100vw',
//             backgroundColor: 'red',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             py: 3,
//           }}
//           onMouseEnter={handleMouseEnterMegaMenu}
//           onMouseLeave={handleMouseLeaveMegaMenu}
//         >
//           <Box sx={{ width: '90%', maxWidth: '1200px', textAlign: 'center' }}>
//             <h2>Mega Menu</h2>
//             <p>Here you can put all your menu items, images, and more.</p>
//             <h2>Mega Menu</h2>
//             <p>Here you can put all your menu items, images, and more.</p>
//             <h2>Mega Menu</h2>
//             <p>Here you can put all your menu items, images, and more.</p>
//             <h2>Mega Menu</h2>
//             <p>Here you can put all your menu items, images, and more.</p>
//             <h2>Mega Menu</h2>
//             <p>Here you can put all your menu items, images, and more.</p>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default MegaMenu;

import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

const MegaMenu = () => {
  //  1
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnterTypography = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveTypography = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleMouseEnterMegaMenu = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveMegaMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* 1 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          py: 2,
        }}
      >
        <Typography
          variant="h6"
          onMouseEnter={handleMouseEnterTypography}
          onMouseLeave={handleMouseLeaveTypography}
          sx={{
            cursor: "pointer",
            backgroundColor: "#333",
            color: "white",
            p: 2,
          }}
        >
          Typography
        </Typography>
        {isOpen && (
          <Box
            sx={{
              position: "fixed",
              top: "80%",
              left: 0,
              width: "100vw",
              backgroundColor: "red",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 3,
              transform: "translateY(-100%)", // Adjust position to be below the typography
            }}
            onMouseEnter={handleMouseEnterMegaMenu}
            onMouseLeave={handleMouseLeaveMegaMenu}
          >
            <Box
              sx={{
                width: "90%",
                maxWidth: "1200px",
                textAlign: "center",
                height: "100%",
              }}
            >
              <h2>Mega Menu</h2>
              <p>Here you can put all your menu items, images, and more.</p>
              <h2>Mega Menu</h2>
              <p>Here you can put all your menu items, images, and more.</p>
              <h2>Mega Menu</h2>
              <p>Here you can put all your menu items, images, and more.</p>
              <h2>Mega Menu</h2>
              <p>Here you can put all your menu items, images, and more.</p>
              <h2>Mega Menu</h2>
              <p>Here you can put all your menu items, images, and more.</p>
             
            </Box>
          </Box>
        )}
      </Box>
     
    </Box>
  );
};

export default MegaMenu;
