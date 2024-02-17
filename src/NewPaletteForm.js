import React, { useState, useEffect, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DraggableColorBox from "./DraggableColorBox";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",//this 64 is the height of the AppBar
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: "64px",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NewPaletteForm() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colors, setColors] = useState([]);
  const [newName, setNewName]= useState("");
  const formRef = useRef(null);
//instead of componentDidMount in documentation of react validation material ui
// componentDidMount() {
//   ValidatorForm.addValidationRule("isColorNameUnique", value =>
//     this.state.colors.every(
//       ({ name }) => name.toLowerCase() !== value.toLowerCase()
//     )
//   );
//   ValidatorForm.addValidationRule("isColorUnique", value =>
//     this.state.colors.every(({ color }) => color !== this.state.currentColor)
//   );
// }
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every(({ color }) => color !== currentColor)
    );

    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      ValidatorForm.removeValidationRule("isColorUnique");
    };
  }, [colors, currentColor]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };
    const addNewColor = () => {
      const newColor = {
        color: currentColor,
        name: newName
      };
      setColors([...colors, newColor]); 
      setNewName("") };
      

  const handleChange = (evt) =>{
      setNewName (evt.target.value)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button varient="contained" color="secondary">
            CLEAR PALETTE
          </Button>
          <Button varient="contained" color="primary">
            RANDOM COLOR{" "}
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit ={addNewColor} ref={formRef}>
          <TextValidator 
          value ={newName}
          onChange = {handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Joe says that : Color name must be unique",
              "Joe says that : Color already used!", 
              //order matters
              ]}/>
<Button
          style={{ backgroundColor: currentColor}}
          varient="contained"
          color="primary"
          // onClick={addNewColor}
          type="submit"

        >
          ADD COLOR{" "}
        </Button>
        </ValidatorForm>
        
      </Drawer>
      <Main  open={open}>
        <DrawerHeader />
        
          {colors.map(color => (
           <DraggableColorBox key = {color.name} color={color.color} name={color.name}/>
          ))}
      
      </Main>
    </Box>
  );
}
