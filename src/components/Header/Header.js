// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import { Typography, Menu, MenuItem } from "@mui/material";
// import Popover from "@mui/material/Popover";

// // IMAGES
// import trivitronlogo from "../../assets/images/header/trivtron.png";
// import dropdownarrow from "../../assets/images/header/DropdownArrow.png";
// import searchlens from "../../assets/images/Searchlens.png";

// import "./Header.css";

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// function Header(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   // DropDown for products-------------------------------------------------------
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMouseEnter = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   // Dropdown for Speciallists-------------------------------------------------------
//   const [anchorEl2, setAnchorEl2] = useState(null);

//   const handleMouseEnter2 = (event) => {
//     setAnchorEl2(event.currentTarget);
//   };

//   const handleMouseLeave2 = () => {
//     setAnchorEl2(null);
//   };

//   const open2 = Boolean(anchorEl2);

//   // Dropdown for Media-------------------------------------------------------
//   const [anchorEl3, setAnchorEl3] = useState(null);

//   const handleMouseEnter3 = (event) => {
//     setAnchorEl3(event.currentTarget);
//   };

//   const handleMouseLeave3 = () => {
//     setAnchorEl3(null);
//   };

//   const open3 = Boolean(anchorEl3);

//   // Dropdown for Buy-------------------------------------------------------
//   const [anchorEl4, setAnchorEl4] = useState(null);

//   const handleMouseEnter4 = (event) => {
//     setAnchorEl4(event.currentTarget);
//   };

//   const handleMouseLeave4 = () => {
//     setAnchorEl4(null);
//   };

//   const open4 = Boolean(anchorEl4);

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* UpperHeader */}
//       <AppBar
//         component="nav"
//         elevation={0}
//         sx={{
//           backgroundColor: "#E7E5E5",
//           height: "21px",
//           display: { xs: "none", sm: "none", md: "block", lg: "block" },
//         }}
//       >
//         <Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//               alignItems: "center",
//               marginTop: "3px",
//             }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "40px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 About Us
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "40px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Global Presence
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Knowledge Centre
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Support
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Careers
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </AppBar>

//       {/* Main Header */}
//       <AppBar
//         component="nav"
//         sx={{
//           backgroundColor: "#FFFFFF",
//           // backgroundColor: "magenta",
//           marginTop: { xs: "0px", sm: "0px", md: "21px", lg: "21px" },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Box
//             sx={{
//               display: "flex",
//               // backgroundColor: "orange",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               width: "100%",
//               alignItems: "center",
//             }}
//           >
//             {/* Logo Box */}
//             <Box>
//               <Box
//                 component="img"
//                 sx={{
//                   height: "50px",
//                   width: "130px",
//                   cursor: "pointer",
//                 }}
//                 alt="The house from the offer."
//                 src={trivitronlogo}
//               />
//             </Box>
//             {/* Headers text  */}
//             <Box
//               sx={{
//                 height: "20px",
//                 // backgroundColor: "yellow  ",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 width: "700px",
//               }}
//             >
//               {/* Products */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: "22px",
//                   paddingBottom: "22px",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     PRODUCTS
//                   </Typography>

//                   <Menu
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleMouseLeave}
//                     MenuListProps={{ onMouseLeave: handleMouseLeave }}
//                   >
//                     <MenuItem onClick={handleMouseLeave}>Product 1</MenuItem>
//                     <MenuItem onClick={handleMouseLeave}>Product 2</MenuItem>
//                     <MenuItem onClick={handleMouseLeave}>Product 3</MenuItem>
//                   </Menu>
//                 </Box>

//                 <Box
//                   component="img"
//                   sx={{
//                     height: "4px",
//                     width: "8px",
//                     marginLeft: "4px",
//                   }}
//                   alt="The house from the offer."
//                   src={dropdownarrow}
//                 />
//               </Box>
//               {/* Specialties */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: "22px",
//                   paddingBottom: "22px",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     SPECIALITIES
//                   </Typography>
//                   <Menu
//                     anchorEl={anchorEl2}
//                     open={open2}
//                     onClose={handleMouseLeave2}
//                     MenuListProps={{ onMouseLeave: handleMouseLeave2 }}
//                   >
//                     <MenuItem onClick={handleMouseLeave2}>
//                       Speciality 1
//                     </MenuItem>
//                     <MenuItem onClick={handleMouseLeave2}>
//                       Speciality 2
//                     </MenuItem>
//                     <MenuItem onClick={handleMouseLeave2}>
//                       Speciality 3
//                     </MenuItem>
//                   </Menu>
//                 </Box>

//                 <Box
//                   component="img"
//                   sx={{
//                     height: "4px",
//                     width: "8px",
//                     marginLeft: "4px",
//                   }}
//                   alt="The house from the offer."
//                   src={dropdownarrow}
//                 />
//               </Box>
//               {/* Ek sahi shuruaat */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     EK SAHI SHURUAAT
//                   </Typography>
//                 </Box>
//               </Box>
//               {/* Media */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: "22px",
//                   paddingBottom: "22px",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     MEDIA
//                   </Typography>

//                   <Menu
//                     anchorEl={anchorEl3}
//                     open={open3}
//                     onClose={handleMouseLeave3}
//                     MenuListProps={{ onMouseLeave3: handleMouseLeave3 }}
//                   >
//                     <MenuItem onClick={handleMouseLeave3}>Media 1</MenuItem>
//                     <MenuItem onClick={handleMouseLeave3}>Media 2</MenuItem>
//                     <MenuItem onClick={handleMouseLeave3}>Media 3</MenuItem>
//                   </Menu>
//                 </Box>

//                 <Box
//                   component="img"
//                   sx={{
//                     height: "4px",
//                     width: "8px",
//                     marginLeft: "4px",
//                   }}
//                   alt="The house from the offer."
//                   src={dropdownarrow}
//                 />
//               </Box>
//               {/* Buy */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingTop: "22px",
//                   paddingBottom: "22px",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     BUY
//                   </Typography>

//                   <Menu
//                     anchorEl={anchorEl4}
//                     open={open4}
//                     onClose={handleMouseLeave4}
//                     MenuListProps={{ onMouseLeave: handleMouseLeave4 }}
//                   >
//                     <MenuItem onClick={handleMouseLeave4}>Buy 1</MenuItem>
//                     <MenuItem onClick={handleMouseLeave4}>Buy 2</MenuItem>
//                     <MenuItem onClick={handleMouseLeave4}>Buy 3</MenuItem>
//                   </Menu>
//                 </Box>

//                 <Box
//                   component="img"
//                   sx={{
//                     height: "4px",
//                     width: "8px",
//                     marginLeft: "4px",
//                   }}
//                   alt="The house from the offer."
//                   src={dropdownarrow}
//                 />
//               </Box>
//               {/* Reach Us */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     REACH US
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box>
//                 <Box
//                   src={searchlens}
//                   component="img"
//                   sx={{
//                     width: "16px",
//                     height: "16px",
//                   }}
//                 />
//               </Box>

//               {/* lOGIN */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#685D5C",
//                       fontFamily: "Poppins, sans-serif",
//                       cursor: "pointer",
//                     }}
//                   >
//                     LOGIN
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Header;

// ------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import { Typography } from "@mui/material";

// // IMAGES
// import trivitronlogo from "../../assets/images/header/trivtron.png";
// import dropdownarrow from "../../assets/images/header/DropdownArrow.png";
// import searchlens from "../../assets/images/Searchlens.png";

// // antd
// import { Menu } from "antd";
// import Products from "../../pages/HeaderComponent/Products/Products";

// import "./Header.css";
// import Specialities from "../../pages/HeaderComponent/Specialities/Specialities";

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// function Header(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* UpperHeader */}
//       <AppBar
//         component="nav"
//         elevation={0}
//         sx={{
//           backgroundColor: "#E7E5E5",
//           height: "21px",
//           display: { xs: "none", sm: "none", md: "block", lg: "block" },
//         }}
//       >
//         <Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//               alignItems: "center",
//               marginTop: "3px",
//             }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "40px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 About Us
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "40px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Global Presence
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Knowledge Centre
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Support
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "9px",
//                   fontWeight: "500",
//                   color: "#685D5C",
//                   marginRight: "20px",
//                   cursor: "pointer",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Careers
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </AppBar>

//       {/* Main Header */}
//       <AppBar
//         component="nav"
//         sx={{
//           backgroundColor: "#FFFFFF",
//           // backgroundColor: "magenta",
//           marginTop: { xs: "0px", sm: "0px", md: "21px", lg: "21px" },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               // alignItems: "center",
//               width: "100%",
//               justifyContent: "space-between",
//               // backgroundColor: "red",
//             }}
//           >
//             {/* Logo Box */}
//             <Box>
//               <Box
//                 component="img"
//                 sx={{
//                   height: "50px",
//                   width: "130px",
//                   cursor: "pointer",
//                 }}
//                 alt="The house from the offer."
//                 src={trivitronlogo}
//               />
//             </Box>

//             {/* Headers text  */}

//             <Box
//               sx={{
//                 display: "flex",
//                 marginLKeft: "10px",
//                 justifyContent: "flex-end",
//                 alignItems: "center",
//               }}
//             >
//               {/* Products */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 115,
//                   //  backgroundColor: "red"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         PRODUCTS
//                         <Box
//                           component="img"
//                           src={dropdownarrow}
//                           sx={{
//                             height: "4px",
//                             width: "8px",
//                             marginLeft: "3px",
//                           }}
//                         />
//                       </span>
//                     ),
//                     key: "products",
//                     children: [
//                       {
//                         label: <Products />,
//                         key: "Megamenu",
//                         style: {
//                           height: "fit-content",
//                           // marginTop:"20px"
//                         },
//                       },
//                     ],
//                   },
//                 ]}
//               ></Menu>
//               {/* Specialities */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 125,
//                   // backgroundColor: "green"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         SPECIALITIES
//                         <Box
//                           component="img"
//                           src={dropdownarrow}
//                           sx={{
//                             height: "4px",
//                             width: "8px",
//                             marginLeft: "3px",
//                           }}
//                         />
//                       </span>
//                     ),
//                     key: "specialties",
//                     children: [
//                       {
//                         label: <Specialities />,
//                         key: "Megamenu",
//                         style: {
//                           height: "fit-content",
//                           // backgroundColor:"red",
//                           padding:"0px"
//                         },
//                       },
//                     ],
//                   },
//                 ]}
//               ></Menu>
//               {/* Ek sahi shuruaat */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 155,
//                   //  backgroundColor: "yellow"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         EK SAHI SHURUAAT
//                       </span>
//                     ),
//                     key: "Electronics",
//                     // children: [
//                     //   {
//                     //     label: <Products />,
//                     //     key: "Megamenu",
//                     //     style: {
//                     //       height: "fit-content",
//                     //     },
//                     //   },
//                     // ],
//                   },
//                 ]}
//               ></Menu>
//               {/* Media */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 85,
//                   // backgroundColor:"orange"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         MEDIA
//                         <Box
//                           component="img"
//                           src={dropdownarrow}
//                           sx={{
//                             height: "4px",
//                             width: "8px",
//                             marginLeft: "3px",
//                           }}
//                         />
//                       </span>
//                     ),
//                     key: "media",
//                     children: [
//                       {
//                         label: <Products />,
//                         key: "Megamenu",
//                         style: {
//                           height: "fit-content",
//                         },
//                       },
//                     ],
//                   },
//                 ]}
//               ></Menu>
//               {/* Buy */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 70,
//                   // backgroundColor:"pink"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         BUY
//                         <Box
//                           component="img"
//                           src={dropdownarrow}
//                           sx={{
//                             height: "4px",
//                             width: "8px",
//                             marginLeft: "3px",
//                           }}
//                         />
//                       </span>
//                     ),
//                     key: "media",
//                     children: [
//                       {
//                         label: <Products />,
//                         key: "Megamenu",
//                         style: {
//                           height: "fit-content",
//                         },
//                       },
//                     ],
//                   },
//                 ]}
//               ></Menu>
//               {/* Reachus */}
//               <Menu
//                 mode="horizontal"
//                 style={{
//                   width: 100,
//                   // backgroundColor:"brown"
//                 }}
//                 items={[
//                   {
//                     label: (
//                       <span
//                         style={{
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#685D5C",
//                           fontFamily: "Poppins, sans-serif",
//                           display: "flex",
//                           flexDirection: "row",
//                           alignItems: "center",
//                         }}
//                       >
//                         REACH US
//                       </span>
//                     ),
//                     key: "media",
//                     // children: [
//                     //   {
//                     //     label: <Products />,
//                     //     key: "Megamenu",
//                     //     style: {
//                     //       height: "fit-content",
//                     //     },
//                     //   },
//                     // ],
//                   },
//                 ]}
//               ></Menu>
//               {/* lens */}
//               <Box sx={{ marginRight: "30px" }}>
//                 <Box
//                   src={searchlens}
//                   component="img"
//                   sx={{
//                     width: "16px",
//                     height: "16px",
//                   }}
//                 />
//               </Box>
//               {/* Login */}
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "13px",
//                     fontWeight: "500",
//                     color: "#685D5C",
//                     fontFamily: "Poppins, sans-serif",
//                     cursor: "pointer",
//                   }}
//                 >
//                   LOGIN
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Header;

import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Bounce, Fade } from "react-awesome-reveal";

// IMAGES
import trivitronlogo from "../../assets/images/header/trivtron.png";
import dropdownarrow from "../../assets/images/header/DropdownArrow.png";
import searchlens from "../../assets/images/Searchlens.png";

// antd
import { Menu } from "antd";
import Products from "../../pages/HeaderComponent/Products/Products";

import "./Header.css";
import Specialities from "../../pages/HeaderComponent/Specialities/Specialities";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
  //  1-- PRODUCTS
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

  //  1-- SPECIALITIES
  const [isOpen2, setIsOpen2] = useState(false);
  const timeoutRef2 = useRef(null);

  const handleMouseEnterTypography2 = () => {
    clearTimeout(timeoutRef2.current);
    setIsOpen2(true);
  };

  const handleMouseLeaveTypography2 = () => {
    timeoutRef2.current = setTimeout(() => {
      setIsOpen2(false);
    }, 100);
  };

  const handleMouseEnterMegaMenu2 = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveMegaMenu2 = () => {
    setIsOpen2(false);
  };

  //  1-- MEDIA
  const [isOpen3, setIsOpen3] = useState(false);
  const timeoutRef3 = useRef(null);

  const handleMouseEnterTypography3 = () => {
    clearTimeout(timeoutRef2.current);
    setIsOpen3(true);
  };

  const handleMouseLeaveTypography3 = () => {
    timeoutRef2.current = setTimeout(() => {
      setIsOpen3(false);
    }, 100);
  };

  const handleMouseEnterMegaMenu3 = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveMegaMenu3 = () => {
    setIsOpen3(false);
  };

  //  1-- BUY
  const [isOpen4, setIsOpen4] = useState(false);
  const timeoutRef4 = useRef(null);

  const handleMouseEnterTypography4 = () => {
    clearTimeout(timeoutRef4.current);
    setIsOpen4(true);
  };

  const handleMouseLeaveTypography4 = () => {
    timeoutRef4.current = setTimeout(() => {
      setIsOpen4(false);
    }, 100);
  };

  const handleMouseEnterMegaMenu4 = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeaveMegaMenu4 = () => {
    setIsOpen4(false);
  };

  // --------------------------------------------------------
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* UpperHeader */}
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "#E7E5E5",
          height: "21px",
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "3px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#685D5C",
                  marginRight: "40px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                About Us
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#685D5C",
                  marginRight: "40px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Global Presence
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#685D5C",
                  marginRight: "20px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Knowledge Centre
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#685D5C",
                  marginRight: "20px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Support
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#685D5C",
                  marginRight: "20px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Careers
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>

      {/* Main Header */}

      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFFFFF",
          // backgroundColor: "magenta",
          marginTop: { xs: "0px", sm: "0px", md: "21px", lg: "21px" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              // backgroundColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Logo Box */}
            <Box>
              <Box
                component="img"
                sx={{
                  height: "50px",
                  width: "130px",
                  cursor: "pointer",
                }}
                alt="The house from the offer."
                src={trivitronlogo}
              />
            </Box>
            {/* Headers text  */}
            <Box
              sx={{
                height: "20px",
                // backgroundColor: "yellow  ",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "700px",
              }}
            >
              {/* Products */}
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  onMouseEnter={handleMouseEnterTypography}
                  onMouseLeave={handleMouseLeaveTypography}
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#685D5C",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  PRODUCTS
                </Typography>
                <Box
                  component="img"
                  src={dropdownarrow}
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "3px",
                  }}
                />
                {isOpen && (
                  <Box
                    sx={{
                      position: "fixed",
                      marginTop: "20px",
                      left: 0,
                      width: "100vw",
                      backgroundColor: "green",
                      zIndex: 1000,
                      transform: "translateY(-100%)", // Adjust position to be below the typography
                    }}
                    onMouseEnter={handleMouseEnterMegaMenu}
                    onMouseLeave={handleMouseLeaveMegaMenu}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        maxWidth: "1200px",
                        height: "100%",
                        position:"fixed"
                      }}
                    >
                      <Box sx={{ marginTop: "30px", marginBottom:"30px" }}>
                        <Box sx={{display:"flex" , flexDirection:"row"}}>
                        {/* redBox */}
                        
                        <Box sx={{ display:"flex" , flexDirection:"column"}}>
                        <Bounce>
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "red",
                              marginLeft: "20px",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography>TRIVITRON</Typography>
                          </Box>
                          </Bounce>
                          <Fade direction="left">
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#0BAEB2",
                              marginLeft: "20px",
                              borderRadius: "5px",
                              marginTop:"5px",
                              marginBottom:"5px",
                            }}
                          >
                            <Typography sx={{color:"black"}}>TRIVITRON</Typography>
                          </Box>
                          </Fade>
                          <Fade direction="right">
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#0BAEB2",
                              marginLeft: "20px",
                              borderRadius: "5px",
                              marginTop:"5px",
                              marginBottom:"5px",
                            }}
                          >
                            <Typography sx={{color:"black"}}>TRIVITRON</Typography>
                          </Box>
                          </Fade>
                          <Fade direction="left">
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#0BAEB2",
                              marginLeft: "20px",
                              borderRadius: "5px",
                              marginTop:"5px",
                              marginBottom:"5px",
                            }}
                          >
                            <Typography sx={{color:"black"}}>TRIVITRON</Typography>
                          </Box>
                          </Fade>
                          <Fade direction="right">
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#0BAEB2",
                              marginLeft: "20px",
                              borderRadius: "5px",
                              marginTop:"5px",
                              marginBottom:"5px",
                            }}
                          >
                            <Typography sx={{color:"black"}}>TRIVITRON</Typography>
                          </Box>
                          </Fade>
                          <Fade direction="left">
                          <Box
                            sx={{
                              width: "200px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor: "#0BAEB2",
                              marginLeft: "20px",
                              borderRadius: "5px",
                              marginTop:"5px",
                              marginBottom:"5px",
                            }}
                          >
                            <Typography sx={{color:"black"}}>TRIVITRON</Typography>
                          </Box>
                          </Fade>
                         
                        </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
              {/* Specialties */}
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  onMouseEnter={handleMouseEnterTypography2}
                  onMouseLeave={handleMouseLeaveTypography2}
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#685D5C",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  SPECIALITIES
                </Typography>
                <Box
                  component="img"
                  src={dropdownarrow}
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "3px",
                  }}
                />
                {isOpen2 && (
                  <Box
                    sx={{
                      position: "fixed",
                      // top: "10%",
                      marginTop: "640px",
                      left: 0,
                      width: "100vw",
                      backgroundColor: "BLUE",
                      zIndex: 1000,
                      transform: "translateY(-100%)", // Adjust position to be below the typography
                    }}
                    onMouseEnter={handleMouseEnterMegaMenu2}
                    onMouseLeave={handleMouseLeaveMegaMenu2}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        maxWidth: "1200px",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ color: "red" }}>helSDVSoo</Typography>
                      <Typography sx={{ color: "red" }}>helSDVSoo</Typography>
                      <Typography sx={{ color: "red" }}>heSDVloo</Typography>
                      <Typography sx={{ color: "red" }}>helSDVoo</Typography>
                      <Typography sx={{ color: "red" }}>helSDoo</Typography>
                      <Typography sx={{ color: "red" }}>helDSoo</Typography>
                      <Typography sx={{ color: "red" }}>helDSDVVoo</Typography>
                      <Typography sx={{ color: "red" }}>helSDVSDoo</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              {/* Ek sahi shuruaat */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#685D5C",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    EK SAHI SHURUAAT
                  </Typography>
                </Box>
              </Box>
              {/* Media */}
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  onMouseEnter={handleMouseEnterTypography3}
                  onMouseLeave={handleMouseLeaveTypography3}
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#685D5C",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  MEDIA
                </Typography>
                <Box
                  component="img"
                  src={dropdownarrow}
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "3px",
                  }}
                />
                {isOpen3 && (
                  <Box
                    sx={{
                      position: "fixed",
                      // top: "10%",
                      marginTop: "640px",
                      left: 0,
                      width: "100vw",
                      backgroundColor: "yellow",
                      zIndex: 1000,
                      transform: "translateY(-100%)", // Adjust position to be below the typography
                    }}
                    onMouseEnter={handleMouseEnterMegaMenu3}
                    onMouseLeave={handleMouseLeaveMegaMenu3}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        maxWidth: "1200px",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              {/* Buy */}
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  onMouseEnter={handleMouseEnterTypography4}
                  onMouseLeave={handleMouseLeaveTypography4}
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#685D5C",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  BUY
                </Typography>
                <Box
                  component="img"
                  src={dropdownarrow}
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "3px",
                  }}
                />
                {isOpen4 && (
                  <Box
                    sx={{
                      position: "fixed",
                      // top: "10%",
                      marginTop: "640px",
                      left: 0,
                      width: "100vw",
                      backgroundColor: "orange",
                      zIndex: 1000,
                      transform: "translateY(-100%)", // Adjust position to be below the typography
                    }}
                    onMouseEnter={handleMouseEnterMegaMenu4}
                    onMouseLeave={handleMouseLeaveMegaMenu4}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        maxWidth: "1200px",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                      <Typography sx={{ color: "red" }}>heloo</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              {/* Reach Us */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#685D5C",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    REACH US
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  src={searchlens}
                  component="img"
                  sx={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </Box>

              {/* lOGIN */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#685D5C",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    LOGIN
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
