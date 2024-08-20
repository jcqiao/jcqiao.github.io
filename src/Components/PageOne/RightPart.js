import React from "react";
import { Typography, Grid, Box } from "@mui/material";

function RightPart() {
  return (
    <Grid item xs={12} sm={6}>
      <Box pl={3}>
        <Typography variant="h4" component="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I'm a passionate Front-End Developer with a knack for building
          user-friendly and efficient web applications.
        </Typography>

        <Typography variant="body1" paragraph>
          My development philosophy is user-centric, aiming to find the perfect
          balance between visual design and user experience. I focus on
          maintainable and scalable code in projects, always eager to explore
          new technologies and continuously improve my skills.
        </Typography>
      </Box>
    </Grid>
  );
}

export default RightPart;
