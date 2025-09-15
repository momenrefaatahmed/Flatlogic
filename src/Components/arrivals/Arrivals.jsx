import Container from "@mui/material/Container";
import promo from "../../../public/image/e-commerce/home/promo.AVIF";
import { MediaContext } from "../../Context/MediaContext";
import { useContext } from "react";
export default function Arrivals() {
  const { isMobile } = useContext(MediaContext);
  return (
    <div className="mt-5 mb-5" style={{ backgroundColor: "#f5f5f5" }}>
      <Container fixed>
        <div
          className={`d-flex justify-content-between align-items-center p-3 ${
            isMobile ? "text-center flex-column" : ""
          } `}
        >
          <div>
            <p className="fw-bold text-uppercase">news and inspiration</p>
            <h1 className="mb-5 fw-bold text-uppercase">new arrivals</h1>
            <div className="d-flex gap-3 mb-4">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#bd744c", fontWeight: "bold" }}>0</span>
                <span>days</span>
              </div>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#bd744c", fontWeight: "bold" }}>0</span>
                <span>hours</span>
              </div>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#bd744c", fontWeight: "bold" }}>0</span>
                <span>mins</span>
              </div>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#bd744c", fontWeight: "bold" }}>0</span>
                <span>secs</span>
              </div>
            </div>
            <span
              className=" text-secondary fs-4 me-2"
              style={{ textDecoration: "line-through" }}
            >
              $ 140,56
            </span>
            <span className="fw-bold fs-1" style={{ color: "#bd744c" }}>
              $ 70
            </span>
          </div>
          <div className={`${isMobile ? "d-none" : "d-block"}`}>
            <img src={promo} loading="lazy" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
