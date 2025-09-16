import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Container from "@mui/material/Container";
import NavBar from "../Header/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../footer/Footer";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51S1xueFH3pA7Fzyl2ikMCZB7BWC9WVbs2gSBlefZkUj3btf08rhLSlCPAH9QXzMA1szt0PyruoGUe4YJgJV65Gda00iG2Oj3EZ"
);

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  async function handleCheckout() {
    try {
      if (!cart || cart.length === 0) return;

      // نجهز الداتا للباك إند
      const items = cart.map((item) => ({
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      }));

      const response = await fetch(
        "http://localhost:5000/create-checkout-session", // بعد الرفع حط لينك الـ Render
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items }),
        }
      );

      const data = await response.json();

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Checkout error:", error);
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-5" style={{ marginBottom: "52px" }}>
          <Row>
            <Col xs={12} md={8}>
              <h3 className="fw-bold mb-5 p-4">Shopping Cart</h3>
              {cart.length === 0 ? (
                <p>No Items</p>
              ) : (
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">PRODUCT</th>
                      <th className="text-center" scope="col">
                        Quantity
                      </th>
                      <th className="text-center" scope="col">
                        Price
                      </th>
                      <th className="text-center" scope="col">
                        Clear
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center flex-column flex-md-row text-center text-md-start">
                            <img
                              loading="lazy"
                              src={item.image}
                              alt={item.title}
                              style={{
                                height: "80px",
                                width: "80px",
                                objectFit: "cover",
                              }}
                              className="me-md-3 mb-2 mb-md-0 rounded"
                            />
                            <div>
                              <p className="mb-1" style={{ fontSize: "14px" }}>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <span
                              style={{ cursor: "pointer", marginRight: "10px" }}
                            >
                              <AddIcon
                                onClick={() => increaseQuantity(item.id)}
                              />
                            </span>
                            <p className="mb-0">{item.quantity}</p>
                            <span
                              style={{ cursor: "pointer", marginLeft: "10px" }}
                            >
                              <RemoveIcon
                                onClick={() => decreaseQuantity(item.id)}
                              />
                            </span>
                          </div>
                        </td>
                        <td className="text-center">
                          <p className="mb-0">${item.price * item.quantity}</p>
                        </td>
                        <td className="text-center">
                          <ClearIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => removeFromCart(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col xs={12} md={4} style={{ backgroundColor: "#f5f5f5" }}>
              <div className="p-4">
                <h3 className="fw-bold mb-5">Cart Total</h3>
                <div className="pb-3 border-bottom">
                  <span className="me-3 fw-bold">Subtotal:</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="pt-3 pb-3 border-bottom">
                  <div className="mb-2">
                    <span className="me-3 fw-bold">Shipping:</span>
                    <span className=" fw-bold">Free Shipping</span>
                  </div>
                  <p>Shipping options will be updated during checkout.</p>
                </div>
                <div className="pt-3">
                  <span className="me-3 fs-5 fw-bold">Total:</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                  <button
                    className="d-block mt-3 "
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      backgroundColor: "#bd744c",
                      color: "white",
                    }}
                    onClick={handleCheckout}
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}
