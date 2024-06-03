// import * as React from "react";
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
// import Typography from "@mui/material/Typography";

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
//                     SPECIALTIES
//                   </Typography>
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
//                     width:"16px",
//                     height:"16px"
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
//                    LOGIN
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

import * as React from "react";
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
import Typography from "@mui/material/Typography";

// IMAGES
import trivitronlogo from "../../assets/images/header/trivtron.png";
import dropdownarrow from "../../assets/images/header/DropdownArrow.png";
import searchlens from "../../assets/images/Searchlens.png";

import "./Header.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
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
                    PRODUCTS
                  </Typography>
                </Box>

                <Box
                  component="img"
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "4px",
                  }}
                  alt="The house from the offer."
                  src={dropdownarrow}
                />
              </Box>
              {/* Specialties */}
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
                    SPECIALTIES
                  </Typography>
                </Box>

                <Box
                  component="img"
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "4px",
                  }}
                  alt="The house from the offer."
                  src={dropdownarrow}
                />
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
                    MEDIA
                  </Typography>
                </Box>

                <Box
                  component="img"
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "4px",
                  }}
                  alt="The house from the offer."
                  src={dropdownarrow}
                />
              </Box>
              {/* Buy */}
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
                    BUY
                  </Typography>
                </Box>

                <Box
                  component="img"
                  sx={{
                    height: "4px",
                    width: "8px",
                    marginLeft: "4px",
                  }}
                  alt="The house from the offer."
                  src={dropdownarrow}
                />
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
                    width:"16px",
                    height:"16px"
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

