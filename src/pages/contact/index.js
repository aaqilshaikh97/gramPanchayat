import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
function Contact() {
  return (
    <>
      <SkNavbar />

      <SkBox sx={{ display: "flex", justifyContent: "flex-start", ml: 4 }}>
      </SkBox>
      <h2>Contact Page</h2>
      <p>This is the Contact Page.</p>
    </>
  );
}

export default Contact;
