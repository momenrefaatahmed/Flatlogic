import Instagram from "../../instgram/Instgram";
import Footer from "../../footer/Footer";
import Service from "../../service/Service";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { WishlistContext } from "../../../Context/WishlistContext";
import { CartContext } from "../../../Context/CartContext";
import { NotificationContext } from "../../../Context/NotificationContext";
export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} className="mt-5 mb-5">
            <h3 className="fw-bold mb-5 p-4">Wishlist</h3>
            {wishlist.length === 0 ? (
              <p>No Items</p>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table
                  className="table align-middle"
                  style={{ minWidth: "800px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">PRODUCT</th>
                      <th className="text-center" scope="col">
                        PRICE
                      </th>
                      <th className="text-center" scope="col">
                        STOCK STATUS
                      </th>
                      <th className="text-center" scope="col"></th>
                      <th className="text-center" scope="col">
                        Clear
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((item) => (
                      <tr key={item.id}>
                        <td style={{ whiteSpace: "nowrap" }}>
                          <div className="d-flex align-items-center">
                            <img
                              loading="lazy"
                              src={item.image}
                              alt={item.name}
                              style={{
                                height: "80px",
                                width: "80px",
                                objectFit: "cover",
                              }}
                              className="me-3 rounded"
                            />
                            <div>
                              <p className="mb-1" style={{ fontSize: "14px" }}>
                                {item.title}
                              </p>
                              <h6 className="fw-bold mb-0">{item.name}</h6>
                            </div>
                          </div>
                        </td>

                        <td
                          className="text-center"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <p className="mb-0">${item.price}</p>
                        </td>

                        <td className="text-center">
                          <p className="mb-0">In Stock</p>
                        </td>

                        <td>
                          <button
                            className="btn-home"
                            style={{
                              width: "150px",
                              height: "40px",
                              fontSize: "14px",
                              padding: "0",
                            }}
                            onClick={() => {
                              addToCart(item);
                              showNotification("Added To Cart!", "success");
                            }}
                          >
                            ADD TO CART
                          </button>
                        </td>

                        <td className="text-center">
                          <ClearIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              removeFromWishlist(item.id);
                              showNotification(
                                "Removed From Wishlist!",
                                "info"
                              );
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <Service />
      <Instagram />
      <Footer />
    </div>
  );
}
