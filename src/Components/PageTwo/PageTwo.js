import React from "react";
import { Container, Grid, Divider } from "@mui/material";
import LeftPart from "./RightPart";
import RightPart from "./LeftPart";

function PageTwo() {
  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Grid
        container
        spacing={2}
        sx={{ height: "100%" }}
        alignContent="center"
        justifyContent="center"
      >
        {/* Left Part */}
        <LeftPart />
        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderStyle: "dashed" }}
        />
        {/* Right Part */}
        <RightPart />
      </Grid>
    </Container>
  );
}

export default PageTwo;
