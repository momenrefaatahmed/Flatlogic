import Footer from "../footer/Footer";
import Service from "../service/Service";
import Instagram from "../instgram/Instgram";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProductsContext } from "../../Context/ProductsContext";
import { MediaContext } from "../../Context/MediaContext";
import { CartContext } from "../../Context/CartContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterContent from "./FilterContent";

export default function Shop() {
  const {
    products,
    iconsHover,
    hoveredProduct,
    handleIconsHover,
    handleIconsLeave,
    handleProductHover,
    handleProductLeave,
  } = useContext(ProductsContext);

  const [modalShow, setModalShow] = useState(false);
  const { isMobile } = useContext(MediaContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectCategories, setSelectedCategories] = useState([]);
  const [value, setValue] = useState([15, 150]);
  const [openFilter, setOpenFilter] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBrandChange = (brand) => (e) => {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  const handleCategoryChange = (category) => (e) => {
    if (e.target.checked) {
      setSelectedCategories([...selectCategories, category]);
    } else {
      setSelectedCategories(selectCategories.filter((c) => c !== category));
    }
  };

  const theme = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#999",
            "&.Mui-checked": {
              color: "#bd744c",
            },
          },
        },
      },
    },
  });

  const filteredProducts = products.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brands);

    const categoryMatch =
      selectCategories.length === 0 ||
      selectCategories.includes(product.category);

    const price = Number(product.price || 0);
    const priceMatch = price >= value[0] && price <= value[1];

    return brandMatch && categoryMatch && priceMatch;
  });

  return (
    <div>
      <Container>
        <ThemeProvider theme={theme}>
          <Row>
            {isMobile && (
              <div className="d-flex justify-content-end mb-3">
                <IconButton
                  onClick={() => setOpenFilter(true)}
                  style={{ color: "#bd744c" }}
                >
                  <FilterListIcon />
                </IconButton>
              </div>
            )}

            {!isMobile && (
              <Col className="pt-3" xs={2}>
                <FilterContent
                  selectCategories={selectCategories}
                  handleCategoryChange={handleCategoryChange}
                  value={value}
                  handleChange={handleChange}
                  selectedBrands={selectedBrands}
                  handleBrandChange={handleBrandChange}
                  theme={theme}
                />
              </Col>
            )}

            <Col
              xs={isMobile ? 12 : 10}
              className="products"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fill, minmax(267px, 1fr))",
              }}
            >
              {filteredProducts.map((product) => {
                const id = product.id || product.firebaseKey;
                const name = product.name || product.title || "Unnamed Product";
                const image =
                  product.image ||
                  "https://via.placeholder.com/300x200?text=No+Image";
                const price = product.price || 0;

                return (
                  <div
                    onMouseEnter={() => handleProductHover(id)}
                    onMouseLeave={handleProductLeave}
                    key={id}
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
                      <Link to="/ActiveProduct" state={{ product }}>
                        <img
                          loading="lazy"
                          src={image}
                          alt={name}
                          style={{
                            width: "100%",
                            display: "block",
                            transition: "transform 0.4s ease",
                            transform:
                              hoveredProduct === id
                                ? "scale(1.05)"
                                : "scale(1)",
                          }}
                        />
                      </Link>
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
                          opacity: hoveredProduct === id ? 1 : 0,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      >
                        <FavoriteBorderIcon
                          onMouseEnter={() => handleIconsHover(id, "favorite")}
                          onMouseLeave={handleIconsLeave}
                          style={{
                            color:
                              iconsHover.productId === id &&
                              iconsHover.icon === "favorite"
                                ? "#bd744c"
                                : "black",
                            cursor: "pointer",
                          }}
                        />
                        <ZoomInIcon
                          onMouseEnter={() => handleIconsHover(id, "zoom")}
                          onMouseLeave={handleIconsLeave}
                          variant="primary"
                          onClick={() => {
                            setModalShow(true);
                            setSelectedProduct(product);
                          }}
                          style={{
                            color:
                              iconsHover.productId === id &&
                              iconsHover.icon === "zoom"
                                ? "#bd744c"
                                : "black",
                            cursor: "pointer",
                          }}
                        />
                        <AddShoppingCartIcon
                          onMouseEnter={() => handleIconsHover(id, "cart")}
                          onMouseLeave={handleIconsLeave}
                          onClick={() => addToCart(product)}
                          style={{
                            color:
                              iconsHover.productId === id &&
                              iconsHover.icon === "cart"
                                ? "#bd744c"
                                : "black",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p style={{ marginTop: "10px", marginBottom: "5px" }}>
                        {product.title || ""}
                      </p>
                      <h3
                        style={{
                          color: hoveredProduct === id ? "#bd744c" : "black",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {name}
                      </h3>
                      <span>${price}</span>
                    </div>
                  </div>
                );
              })}
            </Col>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              product={selectedProduct}
            />

            <Drawer
              anchor="left"
              open={openFilter}
              onClose={() => setOpenFilter(false)}
            >
              <FilterContent
                selectCategories={selectCategories}
                handleCategoryChange={handleCategoryChange}
                value={value}
                handleChange={handleChange}
                selectedBrands={selectedBrands}
                handleBrandChange={handleBrandChange}
                theme={theme}
              />
            </Drawer>
          </Row>
        </ThemeProvider>
      </Container>
      <Service />
      <Instagram />
      <Footer />
    </div>
  );
}
