import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import { MediaContext } from "../../Context/MediaContext";

// Material Ui
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Container from "@mui/material/Container";

// Image
import firstImage from "../../../public/image/e-commerce/home/first.AVIF";
import secondImage from "../../../public/image/e-commerce/home/second.AVIF";
import thirdImage from "../../../public/image/e-commerce/home/therd.AVIF";

export default function Home() {
  const { isMobile } = useContext(MediaContext);
  const [uid, setUid] = useState("");

  const [opacity, setOpacity] = useState(0.5);
  const SlideImages = [
    {
      url: firstImage,
      h6: "chair",
      h4: "get all",
      h1: "the good stuff",
      Link: "VIEW MORE",
    },
    {
      url: secondImage,
      h6: "chair",
      h4: "get all",
      h1: "the good stuff",
      Link: "VIEW MORE",
    },
    {
      url: thirdImage,
      h6: "chair",
      h4: "get all",
      h1: "the good stuff",
      Link: "VIEW MORE",
    },
  ];

  const arrowStyles = {
    color: "#fff",
    cursor: "pointer",
  };

  function handleMouseEnter() {
    setOpacity(1);
  }

  useEffect(() => {
    const storedUid = localStorage.getItem("uid");
    if (storedUid) {
      setUid(storedUid);
      console.log(uid);
    }
  }, []);

  const prevArrow = (
    <div style={{ ...arrowStyles, marginLeft: "20px" }}>
      <ArrowBackIosNewIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setOpacity(0.5)}
        style={{
          fontSize: "50px",
          opacity: opacity,
          transition: "opacity 0.5s",
        }}
      />
    </div>
  );

  const nextArrow = (
    <div style={{ ...arrowStyles, marginRight: "20px" }}>
      <ArrowForwardIosIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setOpacity(0.5)}
        style={{
          fontSize: "50px",
          opacity: opacity,
          transition: "opacity 0.5s",
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
      }}
    >
      <Slide
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        duration={3000}
        transitionDuration={1000}
        arrows={true}
        infinite={true}
        pauseOnHover={true}
        autoplay={true}
      >
        {SlideImages.map((SlideImage, index) => (
          <div key={index} style={{ position: "relative", height: "600px" }}>
            <img
              className="img-fluid"
              loading="lazy"
              src={SlideImage.url}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Container
              fixed
              maxWidth="lg"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                textAlign: isMobile ? "center" : "left",
                color: "#fff",
              }}
            >
              <div style={{ color: "black", width: "100%" }}>
                <h4 style={{ color: "#bd744c" }}>{SlideImage.h6}</h4>
                <h2 style={{ margin: "10px 0" }}>{SlideImage.h4}</h2>
                <h1 style={{ marginBottom: "10px" }}>{SlideImage.h1}</h1>
                <Link
                  to="/Shop"
                  className="btn-home "
                  style={{ marginTop: "20px", display: "inline-block" }}
                >
                  {SlideImage.Link}
                </Link>
              </div>
            </Container>
          </div>
        ))}
      </Slide>
    </div>
  );
}
