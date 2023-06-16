import React from "react";
import { Button, Stack } from "@mui/material/";

const sx = () => {
  const test = true;
  return (
    <>
      <Button
        sx={[
          {
            width: {
              // breakpoints (for responsiveness)
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500,
            },
            margin: 4,
            border: 5,
            borderColor: "secondary.main",
            "&.MuiButton-root": {
              height: "100px",
            },
          },
          test && {
            border: 10,
            borderColor: "primary.main",
          },
        ]}
        variant="contained"
      >
        Button 1
      </Button>
      <Button variant="contained">Button 2</Button>
    </>
  );
};

export default sx;
