import React from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const tutorial1 = () => {
  // creating modified components
  const MyCustomButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(10),
  }));
  return (
    <div>
      <Typography variant="myVariant">Timothy </Typography>
      <Typography sx={{ color: "myCustomColor.superDark" }} variant="h2">
        Joloh
      </Typography>
      <Typography variant="h3">Miggy</Typography>
      <Typography variant="h4">Lucky</Typography>
      <Typography variant="h5">Rhenzo</Typography>
      <Typography variant="h6">Andree</Typography>
      <Button sx={{ p: 1 }} variant="contained" color="secondary">
        Hello from MUI v5
      </Button>
      <MyCustomButton variant="contained">GG</MyCustomButton>
    </div>
  );
};

export default tutorial1;
