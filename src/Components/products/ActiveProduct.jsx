import { Navbar } from "react-bootstrap";
import Container from "@mui/material/Container";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { usePrice } from "../../Context/PriceContext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FeadBack from "../modal/FeadBack";
import axios from "axios";
import "swiper/css";
import Service from "../service/Service";
import Instagram from "../instgram/Instgram";
import Footer from "../footer/Footer";
import { CartContext } from "../../Context/CartContext";
import { NotificationContext } from "../../Context/NotificationContext";
import { ProductsContext } from "../../Context/ProductsContext";

import Swipe from "../swiper/Swipe";

export default function ActiveProduct() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);
  const { products } = useContext(ProductsContext);

  const { id } = useParams();
  const { price, quantity, handleAddCount, handleMinusCount } = usePrice();

  const [style, setStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "center center",
  });

  const product = products.find((p) => p.id === Number(id));

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };
  const handleMouseLeave = () => {
    setStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });
  };

  // 🟢 الفيدباك
  const fetchFeedback = () => {
    if (!id) return;

    const productIndex = Number(id) - 1;

    axios
      .get(
        `https://dream-store-f5025-default-rtdb.firebaseio.com/data/products/response/${productIndex}/feedback.json`
      )
      .then((res) => {
        if (!res.data) {
          setFeedbackList([]);
          return;
        }

        const allFeedback = Object.values(res.data);
        setFeedbackList(allFeedback);
      })
      .catch((err) => {
        console.error("❌ Error fetching feedback:", err);
      });
  };

  useEffect(() => {
    fetchFeedback();
  }, [id]);

  const value = 3.5;
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  if (!product) {
    return <p className="text-center mt-5">Product not found</p>;
  }

  return (
    <>
      <Navbar />
      <Container fixed>
        <div style={{ marginTop: "-16px" }}>
          {/* Navigation Path */}
          <div
            style={{
              padding: "20px 0 ",
              color: "#7b7b7b",
              borderBottom: "1px solid #7b7b7b",
              fontSize: "13px",
            }}
          >
            <Link className="custom-link" to="/">
              Products
            </Link>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <Link className="custom-link" to="/">
              {product?.title}
            </Link>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <span>{product?.title}</span>
          </div>

          {/* Product Details */}
          <div className="mt-5">
            <Container fixed>
              <Row className="mb-5">
                {/* Product Image */}
                <Col xs={12} md={6} className="p-0">
                  <div
                    style={{
                      cursor: "crosshair",
                      width: "auto",
                      height: "auto",
                      fontSize: "0px",
                      position: "relative",
                      userSelect: "none",
                      overflow: "hidden",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={product?.image}
                      alt={product?.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "block",
                        transition: "transform 0.2s ease",
                        ...style,
                      }}
                    />
                  </div>
                </Col>

                {/* Product Info */}
                <Col
                  xs={12}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <p className="mb-5">{product?.category}</p>
                    <h4 className="mb-4" style={{ fontWeight: "bold" }}>
                      {product?.title}
                    </h4>
                    <Box
                      className="mb-4"
                      sx={{ width: 200, display: "flex", alignItems: "center" }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                    </Box>
                    <p className="mb-4" style={{ color: "#7b7b7b" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    {/* Quantity & Price */}
                    <div className="d-flex mt-5 " style={{ gap: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>
                        <h6>Quantity</h6>
                        <div className="d-flex align-items-center">
                          <span
                            onClick={handleAddCount}
                            style={{ cursor: "pointer" }}
                          >
                            <AddIcon style={{ fontSize: "16px" }} />
                          </span>
                          <span className="mx-2" style={{ fontSize: "20px" }}>
                            {quantity}
                          </span>
                          <span
                            onClick={handleMinusCount}
                            style={{ cursor: "pointer" }}
                          >
                            <RemoveIcon style={{ fontSize: "16px" }} />
                          </span>
                        </div>
                      </div>
                      <div style={{ fontWeight: "bold" }}>
                        <h6>Price</h6>
                        <div className="d-flex align-items-center">
                          <span style={{ fontSize: "20px" }}>
                            ${price || product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 d-flex" style={{ gap: "15px" }}>
                    <button
                      className="btn-home"
                      onClick={() => {
                        addToCart(product, quantity);
                        showNotification("Added To Cart!", "success");
                      }}
                    >
                      ADD TO CART
                    </button>
                    <button
                      className="btn-home"
                      style={{ padding: "15px 20px" }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </Col>
              </Row>

              <hr />

              {/* Reviews Section */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3>Reviews:</h3>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "0",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      color: isHovered ? "black" : "#bd744c",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => {
                      setModalShow(true);
                      setSelectedProduct(product);
                    }}
                  >
                    + Leave Feedback
                  </p>
                </div>

                {feedbackList.length > 0 ? (
                  feedbackList.map((fb, index) => (
                    <div key={index}>
                      <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        {fb.firstName} {fb.lastName}
                      </h6>
                      <Rating
                        name="text-feedback"
                        value={fb.rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <p>{fb.comment}</p>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No feedback yet.</p>
                )}
              </div>
              <Swipe />
            </Container>
          </div>
        </div>

        {/* Modal */}
        <FeadBack
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            fetchFeedback(); 
          }}
          product={selectedProduct}
        />
      </Container>
      <Service />
      <Instagram />
      <Footer />
    </>
  );
}
