import React from "react";
import {
  Container,
  Typography,
  Avatar,
  Grid,
  Box,
  Divider,
  IconButton
} from "@mui/material";
import avatar from "../assets/avatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Profile = () => {
  const goto = () => {
    window.location.href = "https://github.com/jcqiao";
  };
  return (
    <Box className="profile-card">
      <Box
        sx={{
          position: "relative",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 柔和的阴影
          border: "1px solid #ddd",
          overflow: "hidden",
          height: "100%"
        }}
      >
        <Box>
          <div className="bubble bubble1" />
          <div className="bubble bubble2" />
          <div className="bubble bubble3" />
          <div className="bubble bubble4" />
          <div className="bubble bubble5" />
          <div className="bubble bubble3" />
        </Box>
        {/* coner */}
        <Box
          sx={{
            content: '""',
            position: "absolute",
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 0 60px 60px",
            borderColor: "transparent transparent #f5f5dc transparent",
            top: 0,
            right: 0,
            zIndex: 1,
            transform: "rotate(90deg)"
          }}
        />
        <Container maxWidth="md" sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%" }}
            alignContent="center"
            justifyContent="center"
          >
            {/* 左侧部分 */}
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center"
              }}
            >
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
                  Front-End Developer
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                  Blender & Game Developer
                </Typography>
                <IconButton aria-label="visit my github" onClick={goto}>
                  <GitHubIcon sx={{ position: "absolute" }} />
                </IconButton>
              </Box>
            </Grid>

            {/* 中间虚线分隔 */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderStyle: "dashed" }}
            />
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
                  My development philosophy is user-centric, aiming to find the
                  perfect balance between visual design and user experience. I
                  focus on maintainable and scalable code in projects, always
                  eager to explore new technologies and continuously improve my
                  skills.
                </Typography>
              </Box>
            </Grid>
            {/* 右侧部分 */}
            {/* <Grid item xs={12} sm={5}>
            <Box mt={5}>
              <Typography variant="h5" component="h2" gutterBottom>
                我的技能
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">HTML/CSS/JavaScript</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">React/Material-UI</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">无障碍性设计</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Recoil/React Router</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box mt={4}>
              <Typography variant="h5" component="h2" gutterBottom>
                联系我
              </Typography>
              <Typography variant="body1">如果你对我的工作感兴趣，欢迎通过以下方式与我联系：</Typography>
              <Typography variant="body1">
                Email: your.email@example.com
              </Typography>
              <Typography variant="body1">
                LinkedIn: linkedin.com/in/your-profile
              </Typography>
            </Box>
          </Grid> */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
