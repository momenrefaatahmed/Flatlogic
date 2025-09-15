import Footer from "../../footer/Footer";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditIcon from "@mui/icons-material/Edit";
import { FaCcVisa } from "react-icons/fa6";

import clock from "../../../../public/image/e-commerce/categories/clock_1.AVIF";
import promo from "../../../../public/image/e-commerce/home/promo.AVIF";
import Product from "../../../../public/image/e-commerce/home/product8.AVIF";
import person from "../../../../public/image/e-commerce/details/person2.AVIF";

export default function Account() {
  return (
    <div>
      <Container fixed>
        <Row className="mt-4">
          <Col xs={12} lg={8} className="mb-4">
            <h3 className="fw-bold">My Account</h3>

            <Row className="g-3 mt-3 mb-4">
              <Col xs={12} md={6}>
                <div
                  className="d-flex position-relative pt-3 pb-3 h-100"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="p-3">
                    <h5 className="fw-bold text-secondary mb-1">Sale up to</h5>
                    <h4 className="fw-bold mb-3" style={{ color: "#bd744c" }}>
                      30%
                    </h4>
                    <p className="fw-bold">Read More</p>
                  </div>
                  <img
                    loading="lazy"
                    className="h-100 position-absolute"
                    style={{ right: "0", top: "0" }}
                    src={promo}
                    alt="promo"
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div
                  className="d-flex position-relative pt-3 pb-3 h-100"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <div className="p-3">
                    <h5 className="fw-bold text-secondary mb-1">Sale up to</h5>
                    <h4 className="fw-bold mb-3" style={{ color: "#bd744c" }}>
                      30%
                    </h4>
                    <p className="fw-bold">Read More</p>
                  </div>
                  <img
                    loading="lazy"
                    className="h-100 position-absolute"
                    style={{ right: "0", top: "0" }}
                    src={clock}
                    alt="clock"
                  />
                </div>
              </Col>
            </Row>

            <h3 className="fw-bold mb-3">My Orders</h3>
            <table className="table align-middle text-center">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Delivery</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((order, i) => (
                  <tr key={i}>
                    <td>16.06.2020</td>
                    <td className="d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        className="me-3"
                        style={{ height: "80px" }}
                        src={Product}
                        alt="product"
                      />
                      <div className="d-flex flex-column ">
                        <span>Delivered</span>
                        <span className="fw-bold"># 123345</span>
                      </div>
                    </td>
                    <td>$5</td>
                    <td>$70</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>

          <Col xs={12} lg={4}>
            <Row className="p-4" style={{ backgroundColor: "#f5f5f5" }}>
              <div className="text-center mb-4">
                <img
                  loading="lazy"
                  className="d-block mx-auto"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                  src={person}
                  alt="profile"
                />
                <h5 className="fw-bold mb-1" style={{ color: "#bd744c" }}>
                  Momen Refaat
                </h5>
                <p className="mb-0">momenrefaat@gmail.com</p>
              </div>

              <table className="table text-center mb-4">
                <thead>
                  <tr>
                    <th>Orders</th>
                    <th>Returns</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>65</td>
                    <td>0</td>
                    <td>145</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              {[
                {
                  title: "Delivery Address",
                  value: "Mr. Robbie Williams, 94 Kings Road, London SW39 6AZ",
                },
                {
                  title: "Payment Method",
                  value: (
                    <>
                      <FaCcVisa /> •••• •••• •••• 5632
                    </>
                  ),
                },
                {
                  title: "Billing Address",
                  value: "Mr. Robbie Williams, 94 Kings Road, London SW39 6AZ",
                },
              ].map((item, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-bold">{item.title}</span>
                    <span
                      style={{ cursor: "pointer" }}
                      className="text-secondary"
                    >
                      <EditIcon style={{ fontSize: "16px" }} />
                    </span>
                  </div>
                  <p className="mb-0">{item.value}</p>
                  {idx < 2 && <hr />}
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
