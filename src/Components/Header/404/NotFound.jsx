import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../footer/Footer";
import Instagram from "../../instgram/Instgram";
import image404 from "../../../../public/image/e-commerce/404/404.AVIF";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <Container fixed>
        <div
          className="w-100"
          style={{
            backgroundImage: `url(${image404})`,
            backgroundPosition: "center", // توسيط الصورة
            height: "80vh", // ارتفاع مناسب
            backgroundRepeat: "no-repeat", // تمنع تكرار الصورة
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Row>
            <Col xs={6}></Col>
            <Col xs={6}>
              <h4 className="fw-bold " style={{ color: "#bd744c" }}>
                OOPS
              </h4>
              <p className="fw-bold fs-4" style={{ color: "black" }}>
                Something’s Missing
              </p>
              <p style={{ color: "black", fontSize: "14px" }}>
                Unfortunately, we cannot find the page you are looking for.
                Thought, we tried...
              </p>
              <Link
                to="/"

                className="btn-home text-uppercase"
                style={{
                  width: "150px",
                  height: "40px",
                  fontSize: "14px",
                  padding: "10px 20px ",
                }}
              >
                take me away
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <Instagram />
      <Footer />
    </div>
  );
}
