import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import villagebg from "../../assets/media/images/villagebg.webp";
import SkCard from "../../components/SkCard";
import Box from "@mui/material/Box";
import area from "../../assets/media/images/area.jpg"
import education from "../../assets/media/images/education.jpg"
import population from "../../assets/media/images/population.jpg"
import water from "../../assets/media/images/water.jpg"

function Home() {
  return (
    <>
      <SkNavbar />

      <SkBox
        sx={{
          ...BOX_STYLES,  
          backgroundImage: `url(${villagebg})`,
        }}
      >
        <SkBox
          sx={{
            ...OVERLAY_BOX_STYLES,  
            backgroundImage: `url(${villagebg})`,
          }}
        />
        <SkTypography
          variant="h3"
          sx={{ marginBottom: "16px", color: "white", fontWeight: "bold" }}
        >
          Welcome to Raamling
        </SkTypography>

        <SkTypography
          variant="body1"
          sx={{ marginBottom: "16px", color: "white", fontWeight: "bold" }}
        >
          Our village is a beautiful and peaceful place known for its rich
          culture and heritage. Here's some information about it:
        </SkTypography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px", 
            justifyContent: "flex-start",
          }}
        >
          <SkCard
            title="Population"
            image={population}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height, marginBottom: "16px" }} 
          >
            Approximately 5,000 residents
          </SkCard>

          <SkCard
            title="Area"
            image={area}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height, marginBottom: "16px" }} 
          >
            15 square kilometers
          </SkCard>

          <SkCard
            title="Water Supply"
            image={water}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height, marginBottom: "16px" }} 
          >
            The village has a robust water supply system with access to clean and safe drinking water.
          </SkCard>

          <SkCard
            title="Education Facilities"
            image={education}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height, marginBottom: "16px" }} 
          >
            Our village has several schools and a public library to support educational development.
          </SkCard>
        </Box>
      </SkBox>
    </>
  );
}

export default Home;

 const CARD_SIZE = {
  width: "280px",
  height: "300px",
};

 const IMAGE_SIZE = {
  height: "160px", 
  width: "100%",   
};


 const BOX_STYLES = {
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  color: "white",
};

 const OVERLAY_BOX_STYLES = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  filter: "blur(8px)",
  zIndex: -1,
};