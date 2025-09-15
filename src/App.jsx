import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";

// External Libraries
import { Routes, Route, useLocation, Link, Router } from "react-router-dom";

// Components
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/home/Home";
import { MediaContext } from "./Context/MediaContext";
import { PriceProvider } from "./Context/PriceProvider";
import ProductsProvider from "./Context/ProductsProvider";
import Products from "./Components/products/Products";
import ActiveProduct from "./Components/products/ActiveProduct";
import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import Service from "./Components/service/Service";
import Instagram from "./Components/instgram/Instgram";
import Footer from "./Components/footer/Footer";
import Cart from "./Components/cart/Cart";
import Shop from "./Components/shop/Shop";
import Wishlist from "./Components/Header/wishlist/Wishlist";
import { WishlistProvider } from "./Context/WishlistProvider";
import { NotificationProvider } from "./Context/NotificationProvider";
import AboutUs from "./Components/Header/aboutUs/AboutUs";
import AboutTeam from "./Components/Header/aboutTeam/AboutTeam";
import ContactUs from "./Components/Header/contactUs/ContactUs";
import Faq from "./Components/Header/faq/Faq";
import NotFound from "./Components/Header/404/NotFound";
import Categories from "./Components/Header/categories/Categories";
import Blog from "./Components/Header/blog/Blog";
import FirstHearo from "./Components/Header/blog/firstHero/FirstHearo";
import SecondHearo from "./Components/Header/blog/secondHearo/SecondHearo";
import ThirdBlog from "./Components/Header/blog/thirdBlog/ThirdBlog";
import FourthBlog from "./Components/Header/blog/fourthBlog/FourthBlog";
import ArticleBlog from "./Components/Header/blog/articleBlog/ArticleBlog";
import Account from "./Components/Header/account/Account";
import HomeBlogs from "./Components/homeblogs/HomeBlogs";
import DashboardLayout from "./Components/dashBoard/DashBoardLayout";
import {
  DashboardHome,
  DashboardProducts,
  DashboardOrders,
  DashboardFeadBack,
  DashboardBlog,
  DashboardUsers,
  DashboardCategories,
  DashboardProfile,
  DashboardPassword,
  DashboardNewProduct,
  DashboardEditProduct,
} from "./Components/dashBoard/DashBoardPages";
import Arrivals from "./Components/arrivals/Arrivals";
import ProtectedRoute from "./Components/protectedRoute/ProtectedRoute";
import Selling from "./Components/selling/Selling";
// Material Ui
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  // const location = useLocation();
  // const { product } = location.state || {};
  const isMobile = useMediaQuery("(max-width:700px)");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();

    if (
      currentPath.startsWith("/dashboard") ||
      currentPath.startsWith("/login") ||
      currentPath.startsWith("/signup")
    ) {
      document.body.style.paddingTop = "0px";
    } else {
      document.body.style.paddingTop = "70px";
    }
  }, [location.pathname]);

  const hideNavBar = location.pathname.toLowerCase().startsWith("/dashboard");

  {
    !hideNavBar && <NavBar />;
  }

  return (
    <div className="App" style={{ fontFamily: "Montserrat" }}>
      <ProductsProvider>
        <PriceProvider>
          <WishlistProvider>
            <NotificationProvider>
              <MediaContext.Provider value={{ isMobile }}>
                {!location.pathname.toLowerCase().startsWith("/dashboard") &&
                  location.pathname.toLowerCase() !== "/login" &&
                  location.pathname.toLowerCase() !== "/signup" && <NavBar />}
                <ScrollToTop />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Home />
                        <Container fixed>
                          <div className="d-flex align-items-center justify-content-center mt-5 ">
                            <div style={{ width: "700px" }}>
                              <h1
                                className="fw-bold"
                                style={{
                                  fontSize: "25px",
                                  textAlign: "center",
                                }}
                              >
                                New Arrivals
                              </h1>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "16px",
                                }}
                              >
                                Check out our new furniture collection! Cozy
                                sofa, fancy chair, wooden casket, and many more.
                                The new collection brings an informal elegance
                                to your home.
                              </p>
                            </div>
                          </div>
                          <Products />
                          <div className="w-100 d-flex justify-content-center align-items-center">
                            <Link to={"/Shop"} className="btn-home ">
                              VIEW ALL
                            </Link>
                          </div>
                        </Container>
                        <Arrivals />
                        <Selling />
                        <Service />
                        <HomeBlogs />
                        <Instagram />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<h2>Welcome to Dashboard</h2>} />
                    <Route path="home" element={<DashboardHome />} />
                    <Route path="products" element={<DashboardProducts />} />
                    <Route
                      path="products/new"
                      element={<DashboardNewProduct />}
                    />
                    <Route
                      path="/dashboard/edit/:firebaseKey"
                      element={<DashboardEditProduct />}
                    />
                    <Route path="feadback" element={<DashboardFeadBack />} />
                    <Route path="password" element={<DashboardPassword />} />
                    <Route path="blog" element={<DashboardBlog />} />
                    <Route path="orders" element={<DashboardOrders />} />
                    <Route path="users" element={<DashboardUsers />} />
                    <Route path="profile" element={<DashboardProfile />} />
                    <Route
                      path="categories"
                      element={<DashboardCategories />}
                    />
                  </Route>

                  <Route path="/Account" element={<Account />} />
                  <Route path="/ArticleBlog" element={<ArticleBlog />} />
                  <Route path="/FourthBlog" element={<FourthBlog />} />
                  <Route path="/ThirdBlog" element={<ThirdBlog />} />
                  <Route path="/SecondHearo" element={<SecondHearo />} />
                  <Route path="/FirstHearo" element={<FirstHearo />} />
                  <Route path="/Blog" element={<Blog />} />
                  <Route path="/Categories" element={<Categories />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="/Faq" element={<Faq />} />
                  <Route path="/ContactUs" element={<ContactUs />} />
                  <Route path="/AboutTeam" element={<AboutTeam />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                  <Route path="/Wishlist" element={<Wishlist />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/ActiveProduct/:id"
                    element={<ActiveProduct />}
                  />

                  <Route path="/login" element={<Login />} />
                </Routes>
              </MediaContext.Provider>
            </NotificationProvider>
          </WishlistProvider>
        </PriceProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
