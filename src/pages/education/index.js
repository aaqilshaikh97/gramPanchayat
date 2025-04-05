import React from "react";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import Footer from "../../components/footer";

const schools = [
  {
    name: "ZILLA PARISHAD PRI SCH RAMLING MUDGAD",
    about: `ZILLA PARISHAD PRI SCH RAMLING MUDGAD was established in 1966 and it is managed by the Local body.
It is located in Rural area in NILANGA block of LATUR district of Maharashtra. The school consists of Grades from 1 to 4.
It is Co-educational and doesn't have an attached pre-primary section. Marathi is the medium of instruction.
The school has a Government building with 4 classrooms in good condition and 2 additional rooms for non-teaching activities.
There is a separate room for the Headmaster/Teacher. It has a Pucca boundary wall and no electric connection.
Drinking water is provided via functional hand pumps. It has 2 boys’ toilets and 1 girls’ toilet, all functional.
The school has a playground and a library with 65 books. It does not need a ramp for disabled children.
There are no computers or computer-aided learning labs. Mid-day meals are provided and prepared on the premises.`,
    details: [
      "Instruction Medium: Marathi",
      "Male Teachers: 3",
      "Female Teacher: 1",
      "Classes: 1 to 4",
      "Establishment: 1966",
      "School Area: Rural",
      "School Type: Co-educational",
      "Pre Primary Section Available: No",
      "Total Teachers: 4",
      "Electricity: No",
      "Library: Yes (65 books)",
      "Playground: Yes",
      "Computer Aided Learning: No",
    ],
    contact: {
      location: "Ramling Mudgad, Nilanga, Latur, Maharashtra",
      pin: "413607",
      phone: "+91 XXXXX-XXXXX",
      email: "XXXX@XXXXXX.XXX",
    },
  },
  {
    name: "RAMLING VIDYALYA H.S.",
    about: `RAMLING VIDYALYA H.S. was established in 1948 and is managed by a private aided organization. 
    It is located in a rural area, in the NILANGA block of LATUR district, Maharashtra. 
    The school consists of Grades 5 to 10 and is co-educational. It does not have an attached pre-primary section. 
    Marathi is the medium of instruction. The school is not a shift school and is approachable by an all-weather road. 
    The academic session starts in April.
    
    The school operates from a rented building and has 7 classrooms for instructional purposes, all in good condition. 
    There are 2 additional rooms for non-teaching activities and a separate room for the Headmaster or teacher. 
    The campus is enclosed with a barbed wire fencing boundary wall and has an electricity connection.
    
    Drinking water is provided through functional hand pumps. The school has 3 functional boys’ toilets and 2 functional girls’ toilets. 
    It has a playground and a library with 850 books. There is no requirement for a ramp for children with disabilities.
    
    The school has 4 functional computers used for teaching and learning purposes, but it does not have a computer-aided learning lab. 
    Mid-day meals are provided and prepared on the school premises. Educational tours are also conducted.`,

    details: [
      "Instruction Medium: Marathi",
      "Male Teachers: 13",
      "Female Teacher: 2",
      "Classes: 5 to 10",
      "Establishment: 1948",
      "School Area: Rural",
      "School Type: Co-educational",
      "Pre Primary Section Available: No",
      "Total Teachers: 15",
      "Electricity: Yes",
      "Library: Yes (850 books)",
      "Playground: Yes",
      "Computers: 4 (Functional)",
    ],
    contact: {
      location: "Ramling Mudgad, Nilanga, Latur, Maharashtra",
      pin: "413607",
      phone: "+91 XXXXX-XXXXX",
      email: "XXXX@XXXXXX.XXX",
    },
  },
];

function Education() {
  return (
    <>
      <SkNavbar />
      <SkBox sx={{ p: 4 }}>
        <SkBox sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {schools.map((school, index) => (
            <SkBox
              key={index}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "16px",
                padding: 3,
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <SkTypography variant="h5">{school.name}</SkTypography>

              <SkTypography>{school.about}</SkTypography>

              <SkBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <SkTypography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, alignSelf: "flex-start" }}
                >
                  Key Details:
                </SkTypography>

                <SkBox
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    pl: 1,
                    width: "100%",
                  }}
                >
                  {school.details.map((item, idx) => (
                    <SkTypography
                      key={idx}
                      variant="body2"
                      sx={{ textAlign: "left", alignSelf: "flex-start" }}
                    >
                      • {item}
                    </SkTypography>
                  ))}
                </SkBox>
              </SkBox>

              <SkTypography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Contact:
              </SkTypography>
              <SkTypography variant="body2">
                📍 {school.contact.location}, PIN: {school.contact.pin}
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;📞 {school.contact.phone}
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;✉ {school.contact.email}
              </SkTypography>
            </SkBox>
          ))}
        </SkBox>
      </SkBox>
      <Footer />
    </>
  );
}

export default Education;
