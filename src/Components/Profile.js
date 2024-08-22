import React from "react";
import { Box } from "@mui/material";
import Layout from "./Layout";
import PageOne from "./PageOne/PageOne";
import styles from "./profile.module.css";

const Profile = () => {
  const baseStyle = {
    position: "relative",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    overflow: "hidden",
    height: "100%"
  };
  return (
    <Box className={styles.profileCard}>
      <Box sx={baseStyle}>
        <Layout />
        <PageOne />
      </Box>
    </Box>
  );
};

export default Profile;
