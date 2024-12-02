import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import {
  ruralSchemes,
  farmerSchemes,
  healthSchemes,
} from "./components/schemeData";
import Box from "@mui/material/Box";
import Footer from "../../components/footer";

const Schemes = () => {
  return (
    <>
      <SkNavbar />
      <SkBox>
        <SkTypography variant="h4" sx={styles.header}>
          Government Schemes
        </SkTypography>
      </SkBox>
      <Box sx={styles.container}>
        <Box sx={styles.schemeBox}>
          <SkTypography variant="h4" sx={styles.header}>
            Schemes of Rural Government
          </SkTypography>
          <ul style={{ paddingLeft: "20px" }}>
            {ruralSchemes.map((scheme, index) => (
              <li key={index}>
                <SkTypography variant="body1" sx={styles.listItem}>
                  {scheme}
                </SkTypography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={styles.schemeBox}>
          <SkTypography variant="h4" sx={styles.header}>
            Schemes for Farmers
          </SkTypography>
          <ul style={{ paddingLeft: "20px" }}>
            {farmerSchemes.map((scheme, index) => (
              <li key={index}>
                <SkTypography variant="body1" sx={styles.listItem}>
                  {scheme}
                </SkTypography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={styles.schemeBox}>
          <SkTypography variant="h4" sx={styles.header}>
            Health Insurance Schemes
          </SkTypography>
          <ul style={{ paddingLeft: "20px" }}>
            {healthSchemes.map((scheme, index) => (
              <li key={index}>
                <SkTypography variant="body1" sx={styles.listItem}>
                  {scheme}
                </SkTypography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Schemes;
const styles = {
  container: {
    borderRadius: "8px",
    margin: "8px ",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
  },
  schemeBox: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "10px",
    padding: "16px",
    boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    marginTop: "12px",
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  listItem: {
    color: "black",
  },
};
