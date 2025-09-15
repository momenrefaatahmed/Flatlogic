import "../../App.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import { MediaContext } from "../../Context/MediaContext";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useContext(MediaContext);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);

  function handleMousePagesHover() {
    setPagesOpen(true);
  }

  function handleMouseShopHover() {
    setShopOpen(true);
  }

  function handleMouseBlogHover() {
    setBlogOpen(true);
  }

  function handlePagesMenuClick() {
    setPagesMenuOpen(!pagesMenuOpen);
    setShopMenuOpen(false);
    setBlogMenuOpen(false);
  }

  function handleShopMenuClick() {
    setShopMenuOpen(!shopMenuOpen);
    setPagesMenuOpen(false);
    setBlogMenuOpen(false);
  }

  function handleBlogMenuClick() {
    setBlogMenuOpen(!blogMenuOpen);
    setPagesMenuOpen(false);
    setShopMenuOpen(false);
  }
  function handleClareClick() {
    alert("LogOut Done");
    localStorage.clear();
  }
  return (
    <div
      className="NavBar"
      style={{
        backgroundColor: "#ffffff",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Container fixed>
        <Box sx={{ fontFamily: "Montserrat" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
            }}
          >
            <div style={{ display: !isMobile ? "none" : "block" }}>
              <MenuIcon
                style={{ cursor: "pointer" }}
                onClick={() => setDrawerOpen(true)}
              />
            </div>
            <a href="#" style={{ fontSize: "16px", fontWeight: "bold" }}>
              Flatlogic
            </a>
            <div
              className={"menu"}
              style={{ display: isMobile ? "none" : "flex" }}
            >
              <ul
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <li>
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                </li>
                <li className="pages">
                  <span
                    onMouseEnter={handleMousePagesHover}
                    onMouseLeave={() => setPagesOpen(false)}
                  >
                    Pages <ArrowDropDownIcon />
                  </span>
                  <div>
                    <ul
                      onMouseEnter={handleMousePagesHover}
                      onMouseLeave={() => setPagesOpen(false)}
                      style={{
                        position: "absolute",
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                        top: "64px",
                        display: pagesOpen ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/AboutUS">About Us</Link>
                      </li>
                      <li>
                        <Link to="/AboutTeam">About Team</Link>
                      </li>
                      <li>
                        <Link to="/ContactUs">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/Faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/404">404</Link>
                      </li>
                      <li>
                        <Link to="/Wishlist">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/Login">Login</Link>
                      </li>
                      <li>
                        <a onClick={handleClareClick} href="#">
                          LogOut
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="shop">
                  <span
                    onMouseEnter={handleMouseShopHover}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    Shop <ArrowDropDownIcon />
                  </span>
                  <div>
                    <ul
                      onMouseEnter={handleMouseShopHover}
                      onMouseLeave={() => setShopOpen(false)}
                      style={{
                        position: "absolute",
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                        top: "64px",
                        display: shopOpen ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/Shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/Categories">Categories</Link>
                      </li>
                      <li>
                        <Link to="/Account">Account</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="blog">
                  <span
                    onMouseEnter={handleMouseBlogHover}
                    onMouseLeave={() => setBlogOpen(false)}
                  >
                    Blog <ArrowDropDownIcon />
                  </span>
                  <div>
                    <ul
                      onMouseEnter={handleMouseBlogHover}
                      onMouseLeave={() => setBlogOpen(false)}
                      style={{
                        position: "absolute",
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                        top: "64px",
                        display: blogOpen ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/ArticleBlog">Blog Article</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="icons"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: isMobile ? "0px" : "200px",
                padding: isMobile ? "0 16px 0 0" : "0",
              }}
            >
              <a href="#">
                <SearchIcon
                  style={{
                    fontSize: isMobile ? "16px" : "20px",
                    display: isMobile ? "none" : "block",
                  }}
                />
              </a>
              <Link to="/Account">
                <PersonIcon
                  style={{
                    fontSize: isMobile ? "16px" : "20px",
                    display: isMobile ? "none" : "block",
                  }}
                />
              </Link>
              <Link
                to="/Cart"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ShoppingCartIcon
                  style={{ fontSize: isMobile ? "16px" : "20px" }}
                />
              </Link>
            </div>
          </div>
        </Box>
      </Container>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: "rgb(38, 38, 38)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#fff",
            padding: "16px",
            fontFamily: "Montserrat",
          }}
          role="presentation"
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List sx={{ height: "100%" }}>
            <h1 style={{ marginBottom: "50px" }}>Flatlogic</h1>
            <div>
              {/* Home */}
              <h3 style={{ marginBottom: "10px" }}>
                <Link
                  to="/"
                  onClick={() => setDrawerOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Home
                </Link>
              </h3>

              {/* Pages */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={handlePagesMenuClick}
              >
                <p>Pages</p>
                <ArrowBackIcon style={{ fontSize: "15px" }} />
              </div>
              <div
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, opacity 0.4s ease",
                  maxHeight: pagesMenuOpen ? "500px" : "0",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0 0 0 20px",
                    margin: "20px 0",
                    fontWeight: "500",
                    opacity: pagesMenuOpen ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.4s ease",
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/AboutUS" onClick={() => setDrawerOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/AboutTeam" onClick={() => setDrawerOpen(false)}>
                      About Team
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/ContactUs" onClick={() => setDrawerOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Faq" onClick={() => setDrawerOpen(false)}>
                      FAQ
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/404" onClick={() => setDrawerOpen(false)}>
                      404
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Wishlist" onClick={() => setDrawerOpen(false)}>
                      Wishlist
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Login" onClick={() => setDrawerOpen(false)}>
                      Login
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <span
                      onClick={handleClareClick}
                      style={{ cursor: "pointer" }}
                    >
                      LogOut
                    </span>
                  </li>
                </ul>
              </div>

              {/* Shop */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={handleShopMenuClick}
              >
                <p>Shop</p>
                <ArrowBackIcon style={{ fontSize: "15px" }} />
              </div>
              <div
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, opacity 0.4s ease",
                  maxHeight: shopMenuOpen ? "500px" : "0",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0 0 0 20px",
                    margin: "20px 0",
                    fontWeight: "500",
                    opacity: shopMenuOpen ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.4s ease",
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Shop" onClick={() => setDrawerOpen(false)}>
                      Shop
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Categories" onClick={() => setDrawerOpen(false)}>
                      Categories
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Account" onClick={() => setDrawerOpen(false)}>
                      Account
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Blog */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={handleBlogMenuClick}
              >
                <p>Blog</p>
                <ArrowBackIcon style={{ fontSize: "15px" }} />
              </div>
              <div
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, opacity 0.4s ease",
                  maxHeight: blogMenuOpen ? "500px" : "0",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0 0 0 20px",
                    margin: "20px 0",
                    fontWeight: "500",
                    opacity: blogMenuOpen ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.4s ease",
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="/Blog" onClick={() => setDrawerOpen(false)}>
                      Blog
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to="/ArticleBlog"
                      onClick={() => setDrawerOpen(false)}
                    >
                      Blog Article
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </List>
          {/* <List sx={{ height: "100%", display: "flex", alignItems: "end" }}>
            <h1>Flatlogic</h1>
          </List> */}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
