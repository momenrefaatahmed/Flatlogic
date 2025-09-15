import Footer from "../../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OurBlog from "../ourBlog/OurBlog";
import { Link } from "react-router-dom";

import pearson2 from "../../../../../public/image/e-commerce/details/person1.AVIF";
import contentImage1 from "../../../../../public/image/e-commerce/blog/content_image_four.AVIF";
import contentImage2 from "../../../../../public/image/e-commerce/blog/content_image_five.AVIF";
import contentImage3 from "../../../../../public/image/e-commerce/blog/content_image_six.AVIF";
import secondHero from "../../../../../public/image/e-commerce/blog/fourth_hero.AVIF";

export default function FourthBlog() {
  const blogImages = [contentImage1, contentImage2, contentImage3];

  const sampleText =
    "There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The universe is constantly changing and moving. Some would say it’s a living thing because you never know what you are going to see on any given night of stargazing. Of the many celestial phenomenons, there is probably none as exciting as when you see your first asteroid on the move in the heavens. To call asteroids the “rock stars” of astronomy is both a bad joke and an accurate depiction of how astronomy fans view them. Unlike suns, planets, and moons, asteroids are on the move, ever changing and, if they appear in the night sky, they are exciting and dynamic.";

  return (
    <div>
      <Container fixed>
        {/* Breadcrumb */}
        <div className="text-secondary mt-4">
          <Link className="custom-link" to="/Blog">
            Blog
          </Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <Link className="custom-link"> Article</Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <span> Fourth Blog</span>
        </div>
        <hr />
      </Container>

      {/* Hero Image */}
      <div className="w-100 mb-5">
        <img
          loading="lazy"
          className="w-100"
          style={{
            maxHeight: "440px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={secondHero}
          alt="hero"
        />
      </div>

      <Container fixed>
        {/* Blog Title & Author */}
        <Row className="mb-5 justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <h1 className="fw-bold">
              Distant Shores are Waiting For You And Your Bedroom!
            </h1>
            <div className="d-flex align-items-center justify-content-center mb-4 mt-3">
              <img
                loading="lazy"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                src={pearson2}
                alt="author"
              />
              <p className="fw-bold mb-0 ms-2" style={{ color: "#bd744c" }}>
                By Andreas Walter
              </p>
            </div>
            <p className="fs-5 fw-bold">
              The getaway lifestyle was reimagined. Prepare yourself for the
              journey to the distant shores. It will give you a calm and
              relaxing atmosphere for you to always recharge yourself.
            </p>
          </Col>
        </Row>

        {/* Blog Images & Text */}
        {blogImages.map((img, index) => (
          <Row key={index} className="mb-5 justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <img
                loading="lazy"
                
                className="w-100"
                style={{ maxHeight: "650px", objectFit: "cover" }}
                src={img}
                alt={`content-${index + 1}`}
              />
              <p className="text-secondary mt-2">
                There is a lot of exciting stuff going on in the stars
              </p>
              <p className="text-secondary mt-3">{sampleText}</p>
            </Col>
          </Row>
        ))}

        {/* Numbered Points */}
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={10} lg={8}>
            {[1, 2].map((num) => (
              <div
                key={num}
                className="d-flex align-items-start gap-3 mb-4 border-top pt-3"
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
                    {num}
                  </span>
                </div>
                <div>
                  <span className="text-secondary fw-bold mb-2 d-block">
                    {num === 1
                      ? "Unmatched Toner Cartridge Quality"
                      : "One more category title"}
                  </span>
                  <p style={{ fontSize: "14px" }}>
                    There is a lot of exciting stuff going on in the stars above
                    us that makes astronomy so much fun...
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* More From Blog */}
        <Row className="mb-5 justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <h3 className="mb-2 fw-bold">More From Our Blog</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
        </Row>

        <OurBlog />

        {/* Final Paragraph */}
        <Row className="mb-5 justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <p className="text-secondary">{sampleText}</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
