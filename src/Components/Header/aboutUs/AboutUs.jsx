import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../footer/Footer";
import aboutUs from "../../../../public/image/e-commerce/about/img1.AVIF";
export default function AboutUs() {
  return (
    <div>
      <Container>
        <Row>
          <h3 className="fw-bold mb-3 p-4">About Us</h3>
          <Col xs={12} md={7} className="mt-5 mb-5">
            <div className="position-relative mb-5">
              <h1
                className="position-absolute z-n1 text-secondary opacity-25"
                style={{ fontSize: "70px" }}
              >
                01
              </h1>
              <div className="ps-5 pt-4 border-bottom">
                <p
                  className="text-uppercase fs-6 fw-bold"
                  style={{ color: "#bd744c" }}
                >
                  Technology
                </p>
                <p className="text-uppercase  fw-bold">
                  Sustainable Furniture Rocks This World! Check Out New
                  Minimalistic Wooden Collection
                </p>
                <p className="text-secondary fs-6">
                  There is no denying that eco-friendly materials can easily
                  conquer the market. But can we produce enough to fulfill the
                  growing demands? Can we create an astonishing look for the new
                  collection of eco-friendly furniture? That is a tough
                  question. But did make an effort!
                </p>
              </div>
            </div>
            <div className="position-relative mb-5">
              <h1
                className="position-absolute z-n1 text-secondary opacity-25"
                style={{ fontSize: "70px" }}
              >
                02
              </h1>
              <div className="ps-5 pt-4 border-bottom">
                <p
                  className="text-uppercase fs-6 fw-bold"
                  style={{ color: "#bd744c" }}
                >
                  Interior
                </p>
                <p className="text-uppercase  fw-bold">
                  Primary Palette Can Allow You To Be Bold! Give Your Interior
                  Artistic Edge
                </p>
                <p className="text-secondary fs-6">
                  Use this well-known tip for mixing two primary colors with a
                  trendy muted palette. Neutral spaces with wooden furniture can
                  be changed within a minutes using the right set of vibrant
                  colors. Such interior design helps you to stand out from
                  ordinary palettes.
                </p>
              </div>
            </div>
            <div className="position-relative">
              <h1
                className="position-absolute z-n1 text-secondary opacity-25"
                style={{ fontSize: "70px" }}
              >
                03
              </h1>
              <div className="ps-5 pt-4 border-bottom">
                <p
                  className="text-uppercase fs-6 fw-bold"
                  style={{ color: "#bd744c" }}
                >
                  Design
                </p>
                <p className="text-uppercase  fw-bold">
                  Check Out The Latest Design Trends! Minimalism, Stripes, and
                  Sculptural Furniture
                </p>
                <p className="text-secondary fs-6">
                  Let's mix stripes and checks - everyone's favorite patterns.
                  New-season colors add the right balance to this awesome mix.
                  Even in bedroom decor you can use this fun new trend along
                  with classic cushions and delicate color scheme or love
                  colorful decoration.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className="mt-5 mb-5 gap-3 d-flex flex-column">
            <img
              src={aboutUs}
              loading="lazy"
              alt="aboutUs"
              className="img-fluid"
            />
            <img
              src={aboutUs}
              loading="lazy"
              alt="aboutUs"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
