import React from "react";
import { Typography, Grid, Box } from "@mui/material";

function RightPart() {
  return (
    <Grid item xs={12} sm={6}>
      <Box paddingLeft={{ xs: 2, sm: 3 }} paddingRight={{ xs: 2, sm: 3 }}>
        <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          About Me
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          I am a frontend developer with over 4 years of experience, passionate
          about creating user-friendly and highly efficient web applications.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
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
