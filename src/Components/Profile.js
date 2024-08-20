import React from "react";
import { Container, Typography, Avatar, Grid, Box } from "@mui/material";

const Profile = () => {
  return (
    <Box className="profile-card">
      <Container maxWidth="md" sx={{ width: "80% ", height: "80% " }}>
        <Box textAlign="center" mt={5}>
          <Avatar
            alt="Your Name"
            src="/path-to-your-image.jpg" // 替换为你的头像路径
            sx={{ width: 120, height: 120, margin: "auto" }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            你的名字
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            前端开发工程师 | 无障碍性设计专家
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            关于我
          </Typography>
          <Typography variant="body1" paragraph>
            你好，我是一名充满激情的前端开发工程师，专注于创建用户友好和高效的Web应用程序。
            我拥有丰富的开发经验，尤其擅长无障碍性设计，并且熟练使用 Material-UI 等前端工具库。
          </Typography>

          <Typography variant="body1" paragraph>
            我的开发哲学是“用户至上”，我相信优质的用户体验是每一个成功应用程序的核心。
            因此，我致力于构建不仅美观且功能完善的界面，使得所有用户都能无障碍地访问。
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            我的技能
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">HTML/CSS/JavaScript</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">React/Material-UI</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">无障碍性设计</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">Recoil/React Router</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            联系我
          </Typography>
          <Typography variant="body1">如果你对我的工作感兴趣，欢迎通过以下方式与我联系：</Typography>
          <Typography variant="body1">Email: your.email@example.com</Typography>
          <Typography variant="body1">
            LinkedIn: linkedin.com/in/your-profile
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
