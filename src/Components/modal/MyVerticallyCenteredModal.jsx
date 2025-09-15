import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CartContext } from "../../Context/CartContext";
import { NotificationContext } from "../../Context/NotificationContext";

export default function MyVerticallyCenteredModal(props) {
  const { product } = props;
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(product?.price);
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

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

  useEffect(() => {
    if (product?.price) {
      setUnitPrice(product.price);
      setPrice(product.price * quantity);
    }
  }, [product]);

  function handleAddCount() {
    setQuantity((prevQty) => {
      const newQty = prevQty + 1;
      setPrice(newQty * unitPrice);
      return newQty;
    });
  }

  function handleMinusCount() {
    if (quantity > 1) {
      setQuantity((prevQty) => {
        const newQty = prevQty - 1;
        setPrice(newQty * unitPrice);
        return newQty;
      });
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Row style={{ padding: "0" }}>
          <Col className="p-0" xs={6} style={{}}>
            <img className="w-100 h-100 " src={product?.image || "No Image"} />
          </Col>
          <Col className="p-4" xs={6} style={{}}>
            <a
              style={{
                color: "#bd744c",
                fontWeight: "bold",
                marginBottom: "10px",
                display: "inline-block",
              }}
              href="#"
            >
              More About Product <ArrowForwardIcon />
            </a>
            <p>{product?.categories || "No categories"}</p>
            <h2 className="mb-2">{product?.title || "No Name"}</h2>
            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{labels[value]}</Box>
            </Box>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
              Vestibulum ultricies aliquam.
            </p>
            <div className="d-flex" style={{ gap: "20px" }}>
              <div>
                <h6>Quantity</h6>
                <div className="d-flex align-items-center">
                  <span onClick={handleAddCount} style={{ cursor: "pointer" }}>
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
              <div>
                <h6>Price</h6>
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: "20px" }}>${price || "None"}</span>
                </div>
              </div>
            </div>
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
              <button className="btn-home" style={{ padding: "15px 20px" }}>
                BUY NOW
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}
