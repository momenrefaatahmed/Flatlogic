import Container from "@mui/material/Container";
import img1 from "../../../public/image/e-commerce/home/top1.AVIF";
import img2 from "../../../public/image/e-commerce/home/top2.AVIF";
import img3 from "../../../public/image/e-commerce/home/top3.AVIF";
import img4 from "../../../public/image/e-commerce/home/top4.AVIF";
import img5 from "../../../public/image/e-commerce/home/top5.AVIF";
import { MediaContext } from "../../Context/MediaContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Selling() {
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
              Top Selling Products
            </h1>
            <p style={{ textAlign: "center", fontSize: "16px" }}>
              These furniture sets will become an essential part of an ecosystem
              of elements in your home. Your domestic space will easily embrace
              these tables, chairs, and bookshelves.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className={`row g-4 hover ${
              isMobile ? "align-items-center flex-column" : ""
            }`}
          >
            {/* الصورة الكبيرة */}
            <Link className="col-12 col-md-6" to="/ActiveProduct/9">
              <div className="position-relative zoom-container">
                <img loading="lazy" className="w-100" src={img1} alt="" />

                <div
                  className="position-absolute"
                  style={{ top: "20px", left: "30px" }}
                >
                  <p className="fw-bold" style={{ color: "#bd744c" }}>
                    All New
                  </p>
                  <h2 style={{ color: "#bd744c", fontWeight: "bold" }}>
                    SPRING THINGS
                  </h2>
                  <p>Save up to 30%</p>
                </div>
              </div>
            </Link>

            {/* الصور الصغيرة */}
            <Link className="col-12 col-md-6" to="/ActiveProduct/2">
              <div className="row g-4">
                {/* 1 */}
                <div className="col-12 col-md-6">
                  <div className="position-relative zoom-container text-end ">
                    <img loading="lazy" className="w-100" src={img2} alt="" />

                    <div
                      className="position-absolute"
                      style={{ top: "20px", right: "30px" }}
                    >
                      <p className="fw-bold" style={{ color: "#bd744c" }}>
                        Online Exclusive
                      </p>
                      <a style={{ color: "#bd744c", fontWeight: "bold" }}>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <Link className="col-12 col-md-6" to="/ActiveProduct/4">
                  <div className="position-relative zoom-container text-end">
                    <img loading="lazy" className="w-100" src={img3} alt="" />
                    <div
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "0",
                        transform: "translateY(-50%)",
                        background: "black",
                        color: "white",
                        padding: "10px 20px",
                        marginRight: "8px",
                      }}
                    >
                      <h4 style={{ letterSpacing: "1.5px" }}>70% SALE</h4>
                    </div>
                  </div>
                </Link>

                {/* 3 */}
                <Link className="col-12 col-md-6" to="/ActiveProduct/3">
                  <div className="position-relative zoom-container text-end">
                    <img loading="lazy" className="w-100" src={img4} alt="" />
                    <div
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "0",
                        transform: "translateY(-50%)",
                        background: "black",
                        color: "white",
                        padding: "10px 20px",
                        marginRight: "8px",
                      }}
                    >
                      <h4
                        className="text-uppercase"
                        style={{ letterSpacing: "1.5px" }}
                      >
                        spring sale
                      </h4>
                    </div>
                  </div>
                </Link>

                {/* 4 */}
                <Link className="col-12 col-md-6" to="/ActiveProduct/5">
                  <div className=" position-relative zoom-container text-center text-uppercase">
                    <img loading="lazy" className="w-100" src={img5} alt="" />
                    <div
                      className="position-absolute"
                      style={{
                        top: "20%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <p className="fw-bold mb-0" style={{ color: "#bd744c" }}>
                        Collection
                      </p>
                      <p
                        className="fw-bold"
                        style={{ color: "#bd744c", fontWeight: "bold" }}
                      >
                        Summer
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
