import Instagram from "../../instgram/Instgram";
import Footer from "../../footer/Footer";
import Service from "../../service/Service";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainBanner from "../../../../public/image/e-commerce/categories/main_banner.AVIF";
import springSale from "../../../../public/image/e-commerce/categories/spring-sale.AVIF";
import clock from "../../../../public/image/e-commerce/categories/clock_1.AVIF";
import pillows from "../../../../public/image/e-commerce/categories/pillows_banner.AVIF";
import kitchen from "../../../../public/image/e-commerce/categories/kitchen_banner.AVIF";
import linenBanner from "../../../../public/image/e-commerce/categories/linen_banner.AVIF";
import Swipe from "../../swiper/Swipe";
import { Link } from "react-router-dom";

export default function Categoreies() {
  return (
    <div>
      <Container fluid className="px-3">
        <Row>
          <Col xs={12} className="mt-4 mb-3">
            <Link to="/Shop" className="position-relative text-center">
              <img loading="lazy" className="w-100" src={mainBanner} alt="" />

              <h2
                className="position-absolute text-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "clamp(24px, 5vw, 60px)", 
                  fontWeight: "bold",
                }}
              >
                New Arrivals
              </h2>
            </Link>
          </Col>
        </Row>

        <Row className="g-3 mb-3">
          <Col xs={12} md={6}>
            <Link to="/Shop" className="position-relative">
              <img loading="lazy" className="w-100" src={springSale} alt="" />
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  color: "white",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "0",
                  padding: "10px 20px",
                  fontSize: "clamp(14px, 2vw, 18px)",
                }}
              >
                <h4 style={{ letterSpacing: "1.5px" }}>Spring Sale</h4>
              </div>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link
              to="/Shop"
              className="position-relative w-100 h-100 d-flex align-items-center justify-content-end"
              style={{ backgroundColor: "#f2ece4" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "black",
                }}
              >
                <p className="fw-bold">Accessories</p>
                <h4 className="mb-3 fw-bold">For Living Room</h4>
                <p style={{ color: "#bd744c", fontWeight: "bold" }}>
                  View Collection
                </p>
              </div>
              <img
                loading="lazy"
                style={{ maxWidth: "150px", width: "40%" }}
                src={clock}
                alt=""
              />
            </Link>
          </Col>
        </Row>

        <Row className="g-3 mb-3">
          <Col xs={12} sm={6} lg={3}>
            <Link to="/Shop" className="position-relative">
              <img loading="lazy" className="w-100" src={pillows} alt="" />
              <div
                className="position-absolute text-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#bd744c",
                  fontSize: "clamp(16px, 3vw, 24px)",
                  fontWeight: "bold",
                }}
              >
                <p className="mb-0">up to 60%</p>
                <p>Pillows</p>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} lg={6}>
            <Link to="/Shop" className="position-relative">
              <img
                loading="lazy"
                className="w-100 h-100"
                src={kitchen}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "black",
                }}
              >
                <p className="fw-bold">Accessories</p>
                <h4 className="mb-3 fw-bold">For Living Room</h4>
                <p style={{ color: "#bd744c", fontWeight: "bold" }}>
                  View Collection
                </p>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Link to="/Shop" className="position-relative">
              <img loading="lazy" className="w-100" src={linenBanner} alt="" />
              <div
                className="position-absolute text-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "clamp(16px, 3vw, 24px)",
                  fontWeight: "bold",
                }}
              >
                <p className="mb-0">Bed Linen</p>
              </div>
            </Link>
          </Col>
        </Row>

        <Swipe />
      </Container>

      <Service />
      <Instagram />
      <Footer />
    </div>
  );
}
