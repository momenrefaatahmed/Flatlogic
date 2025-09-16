import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Components
import { MediaContext } from "../../Context/MediaContext";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { NotificationContext } from "../../Context/NotificationContext";

// Material Ui
import * as React from "react";
import Grid from "@mui/material/GridLegacy";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductsContext } from "../../Context/ProductsContext";

export default function Products() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isMobile } = useContext(MediaContext);
  const { showNotification } = useContext(NotificationContext);

  const {
    products,
    iconsHover,
    hoveredProduct,
    handleIconsHover,
    handleIconsLeave,
    handleProductHover,
    handleProductLeave,
  } = useContext(ProductsContext);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div style={{ marginBottom: "50px" }}>
      <div
        style={{
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={8} style={{ margin: "auto" }}></Grid>
          </Grid>
        </Box>
      </div>

      {/* Products Grid */}
      <div
        className="products"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(267px, 1fr))",
        }}
      >
        {products
          .filter((product) => product && product.title && product.image) // ✅ يمنع المنتجات الفاضية
          .map((product) => {
            return (
              <div
                onMouseEnter={() => handleProductHover(product.id)}
                onMouseLeave={handleProductLeave}
                key={product.firebaseKey || product.id}
                style={{
                  flexBasis: isMobile ? "100%" : "267px",
                  overflowX: "hidden",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Link to={`/ActiveProduct/${product.id}`} state={{ product }}>
                    <img
                      src={product.image || "https://via.placeholder.com/267"} // 🔑 fallback
                      alt={product.title} // 🔑 كان مكتوب name
                      loading="lazy"
                      style={{
                        width: "100%",
                        display: "block",
                        transition: "transform 0.4s ease",
                        transform:
                          hoveredProduct === product.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />
                  </Link>

                  {/* Hover Icons */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px",
                      borderRadius: "8px",
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {/* Wishlist */}
                    <FavoriteBorderIcon
                      onMouseEnter={() =>
                        handleIconsHover(product.id, "favorite")
                      }
                      onClick={() => {
                        addToWishlist(product);
                        showNotification("Added to wishlist!", "success");
                      }}
                      onMouseLeave={handleIconsLeave}
                      style={{
                        color:
                          iconsHover.productId === product.id &&
                          iconsHover.icon === "favorite"
                            ? "#bd744c"
                            : "black",
                        cursor: "pointer",
                      }}
                    />

                    {/* Zoom / Modal */}
                    <ZoomInIcon
                      onMouseEnter={() => handleIconsHover(product.id, "zoom")}
                      onMouseLeave={handleIconsLeave}
                      onClick={() => {
                        setModalShow(true);
                        setSelectedProduct(product);
                      }}
                      style={{
                        color:
                          iconsHover.productId === product.id &&
                          iconsHover.icon === "zoom"
                            ? "#bd744c"
                            : "black",
                        cursor: "pointer",
                      }}
                    />

                    {/* Add to Cart */}
                    <AddShoppingCartIcon
                      onMouseEnter={() => handleIconsHover(product.id, "cart")}
                      onMouseLeave={handleIconsLeave}
                      onClick={() => {
                        addToCart(product);
                        showNotification("Added To Cart!", "success");
                      }}
                      style={{
                        color:
                          iconsHover.productId === product.id &&
                          iconsHover.icon === "cart"
                            ? "#bd744c"
                            : "black",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <p style={{ marginTop: "10px", marginBottom: "5px" }}>
                    {product.categories}
                  </p>
                  <h3
                    style={{
                      color:
                        hoveredProduct === product.id ? "#bd744c" : "black",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {product.title}
                  </h3>
                  <span>${product.price}</span>
                </div>
              </div>
            );
          })}
      </div>

      {/* Products Modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={selectedProduct}
      />
    </div>
  );
}
