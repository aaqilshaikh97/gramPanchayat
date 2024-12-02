import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import villagebackground from "../../assets/media/images/villagebg.jpg";
import SkCard from "../../components/SkCard";
import Box from "@mui/material/Box";
import area from "../../assets/media/images/area.jpg";
import education from "../../assets/media/images/education.jpg";
import population from "../../assets/media/images/population.jpg";
import water from "../../assets/media/images/water.jpg";
import market from "../../assets/media/images/market.jpg";
import healthcare from "../../assets/media/images/healthcare.jpg";
import connectivity from "../../assets/media/images/connectivity.jpg";
import agriculture from "../../assets/media/images/agriculture.jpg";

function Home() {
  return (
    <>
      <SkNavbar />

      <SkBox
        sx={{
          ...BOX_STYLES,
          backgroundImage: `url(${villagebackground})`,
        }}
      >
        <SkTypography
          variant="h2"
          sx={{
            marginBottom: "8px",
            marginTop: "32px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Welcome to Ramling
        </SkTypography>

        <SkTypography
          variant="body1"
          sx={{ marginBottom: "16px", color: "black", fontWeight: "bold" }}
        >
          Our village is a beautiful and peaceful place known for its rich
          culture and heritage. Here's some information about it:
        </SkTypography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <SkCard
            title="Population"
            image={population}
            sx={{
              width: CARD_SIZE.width,
              height: CARD_SIZE.height,
              marginBottom: "16px",
            }}
          >
            <strong>Population:</strong> Approximately 5,000 residents.
            <br />
            <strong>Language:</strong> Marathi and Hindi are widely spoken.
          </SkCard>

          <SkCard
            title="Area"
            image={area}
            sx={{
              width: CARD_SIZE.width,
              height: CARD_SIZE.height,
              marginBottom: "16px",
            }}
          >
            <strong>Total Area:</strong> 15 square kilometers.
            <br />
            <strong>Geography:</strong> Fertile plains surrounded by hills.
          </SkCard>

          <SkCard
            title="Water Supply"
            image={water}
            sx={{
              width: CARD_SIZE.width,
              height: CARD_SIZE.height,
              marginBottom: "16px",
            }}
          >
            The village practices rainwater harvesting and has a reliable supply
            of clean drinking water.
          </SkCard>

          <SkCard
            title="Education Facilities"
            image={education}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height }}
          >
            Schools, a public library, and digital learning centers ensure
            educational development.
          </SkCard>

          <SkCard
            title="Local Market"
            image={market}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height }}
          >
            The village bazaar is a hub for fresh produce, handmade goods, and
            community interaction.
          </SkCard>

          <SkCard
            title="Healthcare Facilities"
            image={healthcare}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height }}
          >
            Equipped with a primary health center and mobile medical units for
            emergencies.
          </SkCard>

          <SkCard
            title="Agriculture"
            image={agriculture}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height }}
          >
            The backbone of our economy. Crops include wheat, rice, and
            sugarcane, cultivated with modern techniques.
          </SkCard>

          <SkCard
            title="Connectivity"
            image={connectivity}
            sx={{ width: CARD_SIZE.width, height: CARD_SIZE.height }}
          >
            Well-connected by roads with regular bus services. Internet and
            mobile networks keep us digitally active.
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



const BOX_STYLES = {
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  color: "white",
};

// const OVERLAY_BOX_STYLES = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   filter: "blur(8px)",
//   zIndex: -1,
// };
