import Footer from "../../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OurBlog from "../ourBlog/OurBlog";
import { Link } from "react-router-dom";

import firstHero from "../../../../../public/image/e-commerce/blog/first_hero.AVIF";
import pearson2 from "../../../../../public/image/e-commerce/details/person2.AVIF";
import contentImage1 from "../../../../../public/image/e-commerce/blog/content_image_one.AVIF";
import contentImage2 from "../../../../../public/image/e-commerce/blog/content_image_two.AVIF";
import contentImage3 from "../../../../../public/image/e-commerce/blog/content_image_three.AVIF";

export default function FirstHearo() {
  return (
    <div>
      <Container fixed>
        {/* Breadcrumb */}
        <div className="text-secondary mt-4">
          <Link className="custom-link" to="/Blog">
            Blog
          </Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <Link className="custom-link">Article</Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <span> First Blog</span>
        </div>
        <hr />
      </Container>

      {/* Hero Image */}
      <div className="w-100 mb-5">
        <img
          loading="lazy"
          className="w-100 img-fluid"
          style={{
            maxHeight: "440px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={firstHero}
          alt=""
        />
      </div>

      <Container fixed>
        {/* Title & Author */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <div style={{ maxWidth: "700px" }} className="mx-auto">
              <h1 className="fw-bold">
                Wall Murals Add Your Interior Design Maximum Escapism
              </h1>
              <div className="d-flex align-items-center justify-content-center mt-3 mb-4">
                <img
                  loading="lazy"
                  src={pearson2}
                  alt=""
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="fw-bold mb-0 ms-2" style={{ color: "#bd744c" }}>
                  By Hillary Johnson
                </p>
              </div>
              <p className="fs-5 fw-bold">
                These lively patterns will give your interior the look you
                always wanted...
              </p>
            </div>
          </Col>
        </Row>

        {/* Content Images + Paragraphs */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage1}
              alt=""
              className="img-fluid mb-2"
            />
            <p className="text-secondary">
              There is a lot of exciting stuff going on in the stars
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8}>
            <div
              style={{ maxWidth: "700px" }}
              className="mx-auto text-secondary"
            >
              <p>
                The universe is constantly changing and moving. Some would say
                it’s a living thing...
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage2}
              alt=""
              className="img-fluid mb-2"
            />
            <p className="text-secondary">
              There is a lot of exciting stuff going on in the stars
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8}>
            <div
              style={{ maxWidth: "700px" }}
              className="mx-auto text-secondary"
            >
              <p>
                Unlike suns, planets, and moons, asteroids are on the move, ever
                changing and dynamic...
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage3}
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* Numbered List Section */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8}>
            <div
              style={{ maxWidth: "700px" }}
              className="mx-auto border-top border-bottom pt-4"
            >
              {[
                { id: 1, title: "Unmatched Toner Cartridge Quality" },
                { id: 2, title: "One more category title" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-start gap-4 mb-3"
                >
                  <div>
                    <span
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "2px solid #bd744c",
                        color: "#bd744c",
                        fontWeight: "bold",
                      }}
                    >
                      {item.id}
                    </span>
                  </div>
                  <div>
                    <span className="text-secondary fw-bold mb-2 d-block">
                      {item.title}
                    </span>
                    <p style={{ fontSize: "14px" }}>
                      There is a lot of exciting stuff going on in the stars
                      above us...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* More From Blog */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={8} className="text-center">
            <div style={{ maxWidth: "700px" }} className="mx-auto">
              <h3 className="fw-bold mb-2">More From Our Blog</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content...
              </p>
            </div>
          </Col>
        </Row>

        <OurBlog />
      </Container>
      <Footer />
    </div>
  );
}
