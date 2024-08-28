import React from "react";
import { Typography, Avatar, Grid, Box, IconButton } from "@mui/material";
import avatar from "../../assets/avatar.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

function LeftPart() {
  const baseStyle = {
    display: "flex",
    alignContent: "center",
    alignItems: "center"
  };
  const goto = () => {
    window.location.href = "https://github.com/jcqiao";
  };
  return (
    <Grid item xs={12} sm={5} sx={baseStyle}>
      <Box textAlign="center">
        <Avatar
          alt="Chunqiao"
          src={avatar}
          sx={{ width: 120, height: 120, margin: "auto" }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Chunqiao Jiang
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Frontend Developer
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Blender & Game Developer
        </Typography>
        <IconButton aria-label="visit my github" onClick={goto}>
          <GitHubIcon
            sx={{
              position: "relative"
            }}
          />
        </IconButton>
      </Box>
    </Grid>
  );
}

export default LeftPart;
