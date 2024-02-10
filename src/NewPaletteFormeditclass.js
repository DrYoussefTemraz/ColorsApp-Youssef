// import React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// const drawerWidth = 240;

// const main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// class NewPaletteForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//     };
//   }

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;
//     return (
//       <Box sx={{ display: "flex" }} className={classes.root}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           className={`${classes.appBar} ${open && classes.appBarShift}`}
//         >
//           <Toolbar>
//             <IconButton
//               className={`${classes.menuButton} ${open && classes.hide}`}
//               color="inherit"
//               aria-label="open drawer"
//               onClick={this.handleDrawerOpen}
//               edge="start"
//               sx={{ mr: 2, ...(this.state.open && { display: "none" }) }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Persistent drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           className={classes.drawer}
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//           variant="persistent"
//           anchor="left"
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           open={this.state.open}
//         >
//           <DrawerHeader>
//             <IconButton onClick={this.handleDrawerClose}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//         </Drawer>
//         <main className={`${classes.content} ${open && classes.contentShift}`}>
//           <div className={classes.drawerHeader} />
//         </main>
//       </Box>
//     );
//   }
// }

// export default NewPaletteForm;
