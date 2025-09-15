import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import article1 from "../../../public/image/e-commerce/blog/article1.AVIF";
import article2 from "../../../public/image/e-commerce/blog/article2.AVIF";
import article3 from "../../../public/image/e-commerce/blog/article3.AVIF";
import { useContext } from "react";
import { MediaContext } from "../../Context/MediaContext";

export default function HomeBlogs() {
  const { isMobile } = useContext(MediaContext);
  return (
    <>
      <Container fixed className="mt-5 mb-5">
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ width: "700px" }}>
            <h1
              className="fw-bold"
              style={{ fontSize: "25px", textAlign: "center" }}
            >
              From Our Blogs
            </h1>
            <p style={{ textAlign: "center", fontSize: "16px" }}>
              Design your home interior story! Here are the latest trends, tips,
              and design tricks to help you out.
            </p>
          </div>
        </div>
        <div
          className={`mb-3 d-flex text-center gap-4 home-blog ${
            isMobile ? "flex-column" : ""
          }`}
        >
          <Link to="/FirstHearo" className="zoom-container">
            <div className="overflow-hidden">
              <img loading="lazy" className="w-100 " src={article1} alt="" />
            </div>
            <div className="mt-2">
              <span className="text-secondary">March 12, 2020</span>
              <p className="fw-bold mb-1">What is Lorem Ipsum?</p>
              <p className="fw-bold" style={{ color: "#bd744c" }}>
                Read More
              </p>
            </div>
          </Link>
          <Link to="/SecondHearo" className="zoom-container">
            <div className="overflow-hidden">
              <img loading="lazy" className="w-100 " src={article2} alt="" />
            </div>
            <div className="mt-2">
              <span className="text-secondary">March 12, 2020</span>
              <p className="fw-bold mb-1">Best Examples of Maximalism</p>
              <p className="fw-bold" style={{ color: "#bd744c" }}>
                Read More
              </p>
            </div>
          </Link>
          <Link to="/ThirdBlog" className="zoom-container">
            <div className="overflow-hidden">
              <img loading="lazy" className="w-100 " src={article3} alt="" />
            </div>
            <div className="mt-2">
              <span className="text-secondary">March 12, 2020</span>
              <p className="fw-bold mb-1">Best Examples of Maximalism</p>
              <p className="fw-bold" style={{ color: "#bd744c" }}>
                Read More
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
}
