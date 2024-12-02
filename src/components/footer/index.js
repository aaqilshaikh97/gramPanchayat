import React from "react";
import { Box, Typography, Link } from "@mui/material";

// Define styles in a constant
const footerStyles = {
  container: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "40px 0", 
    height: "auto",
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",  

  },
  link: {
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles.container}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Gram Panchayat. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/" color="inherit" sx={footerStyles.link}>
          Privacy Policy
        </Link>
        {" | "}
        <Link href="/" color="inherit" sx={footerStyles.link}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
