import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import membersData from "./components/membersData";
import { Grid } from "@mui/material";
import Footer from "../../components/footer";



function Members() {
  return (
    <>
      <SkNavbar />

      <SkBox sx={styles.container}>
        <SkTypography variant="h4" sx={styles.title}>
          Gram Panchayat Office Members, Ramling (M)
        </SkTypography>
        <SkTypography variant="body2" sx={styles.subtitle}>
          Taluka Nilanga, District Latur
        </SkTypography>

        <Grid container spacing={4}>
          {membersData.map((member) => (
            <Grid
              container
              item
              key={member.id}
              xs={12}
              spacing={2}
              alignItems="center"
            >
              <SkBox sx={styles.memberCard}>
                <Grid item xs={3} sm={3} md={1}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={styles.memberImage}
                  />
                </Grid>
                <Grid item xs={8} sm={8} md={10}>
                  <SkTypography
                    variant="h6"
                    color="text.primary"
                    sx={styles.memberName}
                  >
                    {member.name}
                  </SkTypography>
                  <SkTypography
                    variant="body2"
                    color="text.secondary"
                    sx={styles.memberDescription}
                  >
                    {member.description}
                  </SkTypography>
                </Grid>
              </SkBox>
            </Grid>
          ))}
        </Grid>
      </SkBox>
      <Footer/>

    </>
  );
}

export default Members;

const styles = {
  container: {
    border: "2px solid #ccc",
    borderRadius: "8px",
    margin: "20px",
    padding: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  title: {
    marginTop: "12px",
    color: "black",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "8px",
    color: "black",
    fontWeight: "bold",
  },
  memberCard: {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    backgroundColor: "#e6e6e6",
    width: "100%",
  },
  memberImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  memberName: {
    textAlign: "left",
  },
  memberDescription: {
    textAlign: "left",
  },
};