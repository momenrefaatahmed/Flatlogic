import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../footer/Footer";
import Instagram from "../../instgram/Instgram";
import { IoLogoBehance } from "react-icons/io5";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import teamImage1 from "../../../../public/image/e-commerce/team/person1.AVIF";
import teamImage2 from "../../../../public/image/e-commerce/team/person2.AVIF";
import teamImage3 from "../../../../public/image/e-commerce/team/person3.AVIF";
import teamImage4 from "../../../../public/image/e-commerce/team/person4.AVIF";
import teamImage5 from "../../../../public/image/e-commerce/team/person5.AVIF";
import teamImage6 from "../../../../public/image/e-commerce/team/person6.AVIF";
import teamImage7 from "../../../../public/image/e-commerce/team/person7.AVIF";
import teamImage8 from "../../../../public/image/e-commerce/team/person8.AVIF";

const teamMembers = [
  {
    img: teamImage1,
    name: "Andreas Walter",
    role: "CEO / Art & Creative Manager",
  },
  {
    img: teamImage2,
    name: "Phoenix Houston",
    role: "Founder / World Traveler",
  },
  { img: teamImage3, name: "Maria Lennon", role: "Design Consultant" },
  {
    img: teamImage4,
    name: "John-James Mosley",
    role: "Digital Marketing Guru",
  },
  { img: teamImage5, name: "Daryl Peters", role: "Director of Operations" },
  {
    img: teamImage6,
    name: "Arianne Savage",
    role: "Project Manager / Technical Lead",
  },
  {
    img: teamImage7,
    name: "Anisa Devine",
    role: "Director of Showroom Design",
  },
  { img: teamImage8, name: "Ashwin Chaney", role: "Customer Service Manager" },
];

export default function AboutTeam() {
  return (
    <div>
      <Container fixed>
        <h3 className="fw-bold mb-5 p-4 text-center">
          Meet the team who dares to create differently.
        </h3>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-5">
              <img
                loading="lazy"
                src={member.img}
                alt={member.name}
                className="img-fluid w-100 "
                style={{ maxHeight: "280px", objectFit: "cover" }}
              />
              <div className="text-center mt-3">
                <h6 className="fw-bold mb-2">{member.name}</h6>
                <p className="text-secondary">{member.role}</p>
                <div
                  className="d-flex align-items-center justify-content-center text-secondary mb-4"
                  style={{ gap: "10px" }}
                >
                  <EmailIcon />
                  <FacebookIcon />
                  <IoLogoBehance className="fs-5" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Instagram />
      <Footer />
    </div>
  );
}
