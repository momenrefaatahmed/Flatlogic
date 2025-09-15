import Footer from "../../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OurBlog from "../ourBlog/OurBlog";
import { Link } from "react-router-dom";

import pearson2 from "../../../../../public/image/e-commerce/details/person3.AVIF";
import contentImage1 from "../../../../../public/image/e-commerce/blog/content_image_four.AVIF";
import contentImage2 from "../../../../../public/image/e-commerce/blog/content_image_five.AVIF";
import contentImage3 from "../../../../../public/image/e-commerce/blog/content_image_six.AVIF";
import secondHero from "../../../../../public/image/e-commerce/blog/second_hero.AVIF";

export default function SecondHearo() {
  return (
    <div>
      {/* Breadcrumb */}
      <Container fixed>
        <div className="text-secondary mt-4">
          <Link className="custom-link" to="/Blog">
            Blog
          </Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <span className="custom-link">Article</span>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <span>Second Blog</span>
        </div>
        <hr />
      </Container>

      {/* Hero Image */}
      <div className="w-100 mb-5">
        <img
          loading="lazy"
          className="img-fluid w-100"
          style={{
            maxHeight: "440px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={secondHero}
          alt="Hero"
        />
      </div>

      <Container fixed>
        {/* Title + Author */}
        <Row className="align-items-center mb-5 justify-content-center">
          <Col xs={12}>
            <div className="d-flex flex-column align-items-center text-center">
              <div style={{ maxWidth: "700px" }}>
                <h1 className="fw-bold">
                  Amber Tones - A Sophisticated Take On Contemporary Country
                </h1>
                <div className="d-flex align-items-center justify-content-center mb-4 mt-3">
                  <img
                    loading="lazy"
                    src={pearson2}
                    alt="Author"
                    className="rounded-circle"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="fw-bold mb-0 ms-2" style={{ color: "#bd744c" }}>
                    By Phoenix Houston
                  </p>
                </div>
                <p className="fs-5 fw-bold">
                  Nostalgia and comfort are the words that come to mind. Maximum
                  coziness and simplicity create an unforgettable atmosphere.
                  You should try this concept.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Image + Caption */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage1}
              alt="Content 1"
              className="img-fluid w-100"
              style={{ maxHeight: "650px", objectFit: "cover" }}
            />
            <p className="text-secondary mt-2">
              There is a lot of exciting stuff going on in the stars
            </p>
          </Col>
        </Row>

        {/* Paragraph */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8}>
            <div
              className="text-center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              <p className="text-secondary">
                There is a lot of exciting stuff going on in the stars above us
                that makes astronomy so much fun. The universe is constantly
                changing and moving. Some would say it’s a living thing because
                you never know what you are going to see on any given night of
                stargazing. Of the many celestial phenomenons, there is probably
                none as exciting as when you see your first asteroid on the move
                in the heavens. To call asteroids the “rock stars” of astronomy
                is both a bad joke and an accurate depiction of how astronomy
                fans view them.
              </p>
            </div>
          </Col>
        </Row>

        {/* Second Image */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage2}
              alt="Content 2"
              className="img-fluid w-100"
              style={{ maxHeight: "650px", objectFit: "cover" }}
            />
            <p className="text-secondary mt-2">
              There is a lot of exciting stuff going on in the stars
            </p>
          </Col>
        </Row>

        {/* Another Paragraph */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8}>
            <div
              className="text-center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              <p className="text-secondary">
                There is a lot of exciting stuff going on in the stars above us
                that makes astronomy so much fun. The universe is constantly
                changing and moving. Some would say it’s a living thing because
                you never know what you are going to see on any given night of
                stargazing. Of the many celestial phenomenons, there is probably
                none as exciting as when you see your first asteroid on the move
                in the heavens.
              </p>
            </div>
          </Col>
        </Row>

        {/* Third Image */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <img
              loading="lazy"
              src={contentImage3}
              alt="Content 3"
              className="img-fluid w-100"
              style={{ maxHeight: "650px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Numbered Points */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8}>
            <div className="border-top border-bottom pt-4 pb-4">
              {[
                { num: 1, title: "Unmatched Toner Cartridge Quality" },
                { num: 2, title: "One more category title" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="d-flex align-items-start gap-2 mb-3"
                >
                  <div>
                    <span
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#bd744c",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        border: "2px solid #bd744c",
                      }}
                    >
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <span className="text-secondary fw-bold mb-2 d-block">
                      {item.title}
                    </span>
                    <p style={{ fontSize: "14px" }}>
                      There is a lot of exciting stuff going on in the stars
                      above us that makes astronomy so much fun.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* More From Blog */}
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h3 className="mb-2 fw-bold">More From Our Blog</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
        </Row>

        <OurBlog />

        {/* Final Paragraph */}
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={8}>
            <div
              className="text-center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              <p className="text-secondary">
                There is a lot of exciting stuff going on in the stars above us
                that makes astronomy so much fun. The universe is constantly
                changing and moving. Some would say it’s a living thing because
                you never know what you are going to see on any given night of
                stargazing.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
