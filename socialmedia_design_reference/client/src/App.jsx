import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Box, Container, createTheme, Typography, styled } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

/*

  // create custom buttons
  // const BlueButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: "skyblue",
  //   color: "#888",
  //   margin: 5,
  //   "&:hover": {
  //     backgroundColor: "lightblue",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white",
  //   },
  // }));

 <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="otherColor"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>


*/
