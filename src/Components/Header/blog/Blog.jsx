import Instagram from "../../instgram/Instgram";
import Footer from "../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firstHero from "../../../../public/image/e-commerce/blog/first_hero.AVIF";
import secondHero from "../../../../public/image/e-commerce/blog/second_hero.AVIF";
import Header from "../../../../public/image/e-commerce/blog/article/header.AVIF";
import fourth_hero from "../../../../public/image/e-commerce/blog/fourth_hero.AVIF";
import article1 from "../../../../public/image/e-commerce/blog/article1.AVIF";
import article2 from "../../../../public/image/e-commerce/blog/article2.AVIF";
import { Link } from "react-router-dom";

export default function Swiper() {
  return (
    <div>
      <Container fixed>
        <Row>
          {/* Blog Section */}
          <Col md={8} xs={12}>
            <h3 className="fw-bold mb-5 mt-4">Blog</h3>

            <Link to="/FirstHearo" className="mb-4 d-block">
              <img
                loading="lazy"
                className="mb-3 w-100"
                src={firstHero}
                alt="First Hero"
              />
              <div className="text-uppercase mb-4">
                <h6
                  className="text-uppercase fw-bold mb-3"
                  style={{ color: "#bd744c", letterSpacing: "1.5px" }}
                >
                  Hillary Johnson
                </h6>
                <p className="fw-bold mb-3">
                  Wall Murals Add Your Interior Design Maximum Escapism
                </p>
                <p style={{ fontSize: "14px" }}>
                  These lively patterns will give your interior the look you
                  always wanted. Can you imagine the way it feels to turn your
                  bedroom into a dreamy forest or warm lake?
                </p>
                <p className="text-secondary">2025-08-28</p>
              </div>
            </Link>

            <Link to="/SecondHearo" className="mb-4 d-block">
              <img
                loading="lazy"
                className="mb-3 w-100"
                src={secondHero}
                alt="Second Hero"
              />
              <div className="text-uppercase mb-4">
                <h6
                  className="text-uppercase fw-bold mb-3"
                  style={{ color: "#bd744c", letterSpacing: "1.5px" }}
                >
                  Phoenix Houston
                </h6>
                <p className="fw-bold mb-3">
                  Amber Tones - A Sophisticated Take On Contemporary Country
                </p>
                <p style={{ fontSize: "14px" }}>
                  Nostalgia and comfort are the words that come to mind. Maximum
                  coziness and simplicity create an unforgettable atmosphere.
                  You should try this concept.
                </p>
                <p className="text-secondary">2025-08-28</p>
              </div>
            </Link>

            <Link to="/ThirdBlog" className="mb-4 d-block">
              <img
                loading="lazy"
                className="mb-3 w-100"
                src={Header}
                alt="Third Blog"
              />
              <div className="text-uppercase mb-4">
                <h6
                  className="text-uppercase fw-bold mb-3"
                  style={{ color: "#bd744c", letterSpacing: "1.5px" }}
                >
                  Andreas Walter
                </h6>
                <p className="fw-bold mb-3">
                  Distant Shores are Waiting For You And Your Bedroom!
                </p>
                <p style={{ fontSize: "14px" }}>
                  The getaway lifestyle was reimagined. Prepare yourself for the
                  journey to the distant shores. It will give you a calm and
                  relaxing atmosphere for you to always recharge yourself.
                </p>
                <p className="text-secondary">2025-08-28</p>
              </div>
            </Link>

            <Link to="/FourthBlog" className="mb-4 d-block">
              <img
                loading="lazy"
                className="mb-3 w-100"
                src={fourth_hero}
                alt="Fourth Hero"
              />
              <div className="text-uppercase mb-4">
                <h6
                  className="text-uppercase fw-bold mb-3"
                  style={{ color: "#bd744c", letterSpacing: "1.5px" }}
                >
                  William Johnson
                </h6>
                <p className="fw-bold mb-3">
                  Vintage Elements Were Reimagined! Use Retro Pieces and Vibrant
                  Colours
                </p>
                <p style={{ fontSize: "14px" }}>
                  Provide plenty of contrast to stand out from the crowd. Each
                  and every one of these vintage pieces should mean something to
                  you. In this case, it will be loved by you.
                </p>
                <p className="text-secondary">2025-08-28</p>
              </div>
            </Link>
          </Col>

          {/* Sidebar Section */}
          <Col md={4} xs={12}>
            <h3 className="fw-bold mb-2 mt-4">Search</h3>
            <div className="border-bottom">
              <input
                className="p-2 mb-4 w-100"
                style={{
                  outline: "none",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder="Index in Blog"
              />
            </div>

            <div className="border-bottom">
              <h5 className="fw-bold mb-3 mt-4">Categories</h5>
              <ul
                style={{
                  fontSize: "14px",
                  listStyleType: "none",
                  paddingLeft: "0px",
                }}
              >
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Basic</span>
                  <span>3</span>
                </Link>
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Creative</span>
                  <span>6</span>
                </Link>
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Offers & Deals</span>
                  <span>1</span>
                </Link>
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Decorations</span>
                  <span>16</span>
                </Link>
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Gift Cards</span>
                  <span>3</span>
                </Link>
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <span>Classic Collection</span>
                  <span>2</span>
                </Link>
              </ul>
            </div>

            <div className="mb-3">
              <h3 className="fw-bold mb-3 mt-4">Recent Posts</h3>
              <Link to="/ArticleBlog">
                <img
                  loading="lazy"
                  className="w-100 mb-2"
                  src={article1}
                  alt="Article 1"
                />
                <div>
                  <span className="text-secondary">March 12, 2020</span>
                  <p className="fw-bold mb-1">What is Lorem Ipsum?</p>
                  <p className="fw-bold" style={{ color: "#bd744c" }}>
                    Read More
                  </p>
                </div>
              </Link>
              <Link to="/ArticleBlog">
                <img
                  loading="lazy"
                  className="w-100 mb-2"
                  src={article2}
                  alt="Article 2"
                />
                <div>
                  <span className="text-secondary">March 12, 2020</span>
                  <p className="fw-bold mb-1">Best Examples of Maximalism</p>
                  <p className="fw-bold" style={{ color: "#bd744c" }}>
                    Read More
                  </p>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Instagram />
      <Footer />
    </div>
  );
}
