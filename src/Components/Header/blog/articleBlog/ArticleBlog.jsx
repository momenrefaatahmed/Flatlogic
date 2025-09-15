import Footer from "../../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OurBlog from "../ourBlog/OurBlog";

import { Link } from "react-router-dom";
import pearson2 from "../../../../../public/image/e-commerce/details/person1.AVIF";

import secondHero from "../../../../../public/image/e-commerce/blog/article/header.AVIF";
import articleImage from "../../../../../public/image/e-commerce/blog/article/article-image.AVIF";

export default function ArticleBlog() {
  return (
    <div>
      <Container fixed>
        <div className="text-secondary mt-4">
          <Link className="custom-link" to="/Blog">
            Blog
          </Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <Link className="custom-link"> Article</Link>
          <KeyboardArrowRightIcon style={{ fontSize: "14px" }} />
          <span> Article Blog</span>
        </div>
        <hr />
      </Container>
      <div className="w-100 mb-5 ">
        <img
          loading="lazy"
          className="w-100"
          style={{
            maxHeight: "440px",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          src={secondHero}
          alt=""
        />
      </div>
      <Container fixed>
        <Row className="align-items-center mb-5 d-flex justify-content-center">
          <Col xs={12} className="mb-5">
            <div className="d-flex text-align-center align-items-center flex-column">
              <div style={{ maxWidth: "700px" }}>
                <h1 className="fw-bold">
                  Distant Shores are Waiting For You And Your Bedroom!
                </h1>
                <div className="d-flex align-items-center mb-4 mt-3 ">
                  <img
                    loading="lazy"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    src={pearson2}
                    alt=""
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
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-3 d-flex justify-content-center">
          <Col xs={12} md={8} className="mb-3">
            <div className="d-flex justify-content-center flex-column">
              <img
                loading="lazy"
                style={{ maxHeight: "650px" }}
                src={articleImage}
                alt=""
              />
              <p className="text-secondary mt-2">
                There is a lot of exciting stuff going on in the stars
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-3 d-flex justify-content-center">
          <Col xs={12} md={8}>
            <div className="d-flex text-align-center align-items-center flex-column">
              <div style={{ maxWidth: "700px" }}>
                <p className="text-secondary">
                  There is a lot of exciting stuff going on in the stars above
                  us that makes astronomy so much fun. The universe is
                  constantly changing and moving. Some would say it’s a living
                  thing because you never know what you are going to see on any
                  given night of stargazing. Of the many celestial phenomenons,
                  there is probably none as exciting as when you see your first
                  asteroid on the move in the heavens. To call asteroids the
                  “rock stars” of astronomy is both a bad joke and an accurate
                  depiction of how astronomy fans view them. Unlike suns,
                  planets, and moons, asteroids are on the move, ever changing
                  and, if they appear in the night sky, they are exciting and
                  dynamic.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-3 d-flex justify-content-center">
          <Col xs={12} md={8}>
            <div className="d-flex text-align-center align-items-start flex-column border-top border-bottom pt-4 ">
              <div style={{ maxWidth: "700px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
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
                    1
                  </span>
                  <div className="d-flex flex-column w-100">
                    <span className="text-secondary fw-bold mb-2">
                      Unmatched Toner Cartridge Quality
                    </span>
                    <p style={{ fontSize: "14px" }}>
                      There is a lot of exciting stuff going on in the stars
                      above us that makes astronomy so much fun. The universe is
                      constantly changing and moving. Some would say it’s a
                      “living” thing because you never know what you are going
                      to see on any given night of stargazing.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ maxWidth: "700px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
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
                    2
                  </span>
                  <div className="d-flex flex-column w-100">
                    <span className="text-secondary fw-bold mb-2">
                      One more category title
                    </span>
                    <p style={{ fontSize: "14px" }}>
                      There is a lot of exciting stuff going on in the stars
                      above us that makes astronomy so much fun. The universe is
                      constantly changing and moving. Some would say it’s a
                      “living” thing because you never know what you are going
                      to see on any given night of stargazing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <OurBlog />
        <Row className="align-items-center mb-5 d-flex justify-content-center">
          <Col xs={12} md={8}>
            <div className="d-flex text-align-center align-items-center flex-column ">
              <div style={{ maxWidth: "700px" }}>
                <p className="text-secondary">
                  There is a lot of exciting stuff going on in the stars above
                  us that makes astronomy so much fun. The universe is
                  constantly changing and moving. Some would say it’s a living
                  thing because you never know what you are going to see on any
                  given night of stargazing. Of the many celestial phenomenons,
                  there is probably none as exciting as when you see your first
                  asteroid on the move in the heavens. To call asteroids the
                  “rock stars” of astronomy is both a bad joke and an accurate
                  depiction of how astronomy fans view them. Unlike suns,
                  planets, and moons, asteroids are on the move, ever changing
                  and, if they appear in the night sky, they are exciting and
                  dynamic.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
