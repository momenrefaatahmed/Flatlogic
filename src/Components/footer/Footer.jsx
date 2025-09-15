import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useContext } from "react";
import { MediaContext } from "../../Context/MediaContext";

export default function Footer() {
  const { isMobile } = useContext(MediaContext);

  return (
    <div
      style={{
        backgroundColor: "#262626",
        width: "100%",
        height: "100%",
        color: "white",
        padding: "15px 0",
      }}
    >
      <Container>
        <h5 className="mb-2">Many desktop publishing</h5>
        <div className={`d-flex align-items-center justify-content-between ${isMobile ? "flex-column" : ""}`}>
          <p style={{ width: isMobile ? "" : "550px", fontSize: "14px", color: "#555" }}>
            Do you want to receive exclusive email offers? Subscribe to our
            newsletter! You will receive a unique promo code which gives you a
            20% discount on all our products in 10 minutes.
          </p>
          <form className={`d-flex   ${isMobile ? "flex-column align-items-start w-100" : "align-items-center"} `}style={{ gap: "15px" }}>
            <input
              style={{ padding: "10px 15px", outline: "none" }}
              type="email"
              placeholder="Enter Your Email"
            ></input>
            <input
              style={{
                padding: "10px 15px",
                backgroundColor: "#bd744c",
                fontWeight: "bold",
                color: "white",
                border: "none",
              }}
              type="button"
              value="Subscribe"
            />
          </form>
        </div>
        <hr />
        <div>
          <Row>
            <Col xs={12} md={5}>
              <h5 className="mb-3">Flatlogic</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
              <ul>
                <li>
                  <EmailIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <h5 className="mb-4">COMPANY</h5>
              <ul
                className="footer-links"
                style={{ color: "#555", fontSize: "14px" }}
              >
                <li className="mb-3">What We Do</li>
                <li className="mb-3">Available Services </li>
                <li className="mb-3">Latest Posts </li>
                <li className="mb-3">FAQs </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <h5 className="mb-4">MY ACCOUNT</h5>
              <ul
                className="footer-links"
                style={{ color: "#555", fontSize: "14px" }}
              >
                <li className="mb-3">Sign In</li>
                <li className="mb-3">View Cart </li>
                <li className="mb-3">Order Tracking </li>
                <li className="mb-3">Help & Support </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h5 className="mb-4">CUSTOMER SERVICE</h5>
              <ul
                className="footer-links"
                style={{ color: "#555", fontSize: "14px" }}
              >
                <li className="mb-3">Help & Contact Us</li>
                <li className="mb-3">Returns & Refunds </li>
                <li className="mb-3">Online Stores </li>
                <li className="mb-3">Terms & Conditions </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
